const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

async function fetchHTML(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching page ${url}:`, error);
    return null;
  }
}

async function scrapeMainPage() {
  const mainURL = "https://wellingtonspca.co.za/up-for-adoption";
  const html = await fetchHTML(mainURL);

  if (!html) return;

  const $ = cheerio.load(html);

  const h2Values = [];
  $("h2.x-text-content-text-primary").each((index, element) => {
    const h2Text = $(element).text().trim();
    h2Values.push(h2Text);
  });

  console.log("H2 Values found:", h2Values);

  const dogDetails = [];

  for (const h2Value of h2Values) {
    const details = await scrapeDogPage(h2Value);
    if (details) {
      dogDetails.push(details);
    }
  }

  fs.writeFileSync(
    "dogDetails.json",
    JSON.stringify(dogDetails, null, 2),
    "utf-8"
  );
  console.log("Data saved to dogDetails.json");
}

async function scrapeDogPage(h2Value) {
  const formattedH2Value = h2Value.replace(/\s+/g, "-");
  let dogPageURL = `https://wellingtonspca.co.za/up-for-adoption/dogs/${formattedH2Value}`;

  const html = await fetchHTML(dogPageURL);

  if (!html) return null;

  const $ = cheerio.load(html);

  // Try to get p tags from the first div
  const pTags = $("div.x-text.x-content.e104-e10.m2w-y.m2w-z p");
  const petData = {
    name: h2Value,
    details: "",
  };

  // If the first div has p tags
  if (pTags.length) {
    pTags.each((index, element) => {
      const text = $(element).text();

      if (text.includes("old")) {
        const afterOld = text.split("old")[1].trim();
        petData.type = afterOld;
      }
    });

    const imgSrc = $( "div.x-col.e102-e3.m2u-g.m2u-h span img, div.x-col.e104-e3.m2w-g.m2w-h span img" ).attr("src");

    if (imgSrc) {
      petData.image = imgSrc;
    } else {
      console.log(`No image found for ${h2Value}`);
    }

    const detailsText = $("div.x-text.x-content.e104-e10.m2w-y.m2w-z").text().trim();
    if (detailsText) {
      petData.details = detailsText;

      const ageMatch = detailsText.match(/\b\d+\b/);
      if (ageMatch) {
        petData.age = parseInt(ageMatch[0], 10);
      }
      const monthYearMatch = detailsText.match(/(\d+)\s*(month|year|week)/i);
      if (monthYearMatch) {
        petData.ageDate = monthYearMatch[2].toLowerCase();
      }
    }
  } else {
    // If the first div does not exist, look in the second div (x-text.x-content.e102-e10.m2u-z.m2u-10)
    const alternatePTags = $("div.x-text.x-content.e102-e10.m2u-z.m2u-10 p");

    if (alternatePTags.length >= 3) {
      // Last p tag for petData.type
      const lastTagText = $(alternatePTags[2]).text().trim();
      petData.type = lastTagText;

      // Second p tag for petData.age
      const secondTagText = $(alternatePTags[1]).text().trim();
      const ageMatch = secondTagText.match(/\b\d+\b/);
      if (ageMatch) {
        petData.age = parseInt(ageMatch[0], 10);
      }
      const monthYearMatch = secondTagText.match(/(\d+)\s*(month|year|week)/i);
      if (monthYearMatch) {
        petData.ageDate = monthYearMatch[2].toLowerCase();
      }
    }
  }

  // Extract image from both divs (fallback logic)
  const imgSrc = $( "div.x-col.e102-e3.m2u-g.m2u-h span img, div.x-col.e104-e3.m2w-g.m2w-h span img" ).attr("src");
  if (imgSrc) {
    petData.image = imgSrc;
  } else {
    console.log(`No image found for ${h2Value}`);
  }

  // If any petData is populated, return it
  if (
    petData.details ||
    petData.type ||
    petData.image ||
    petData.age ||
    petData.ageDate
  ) {
    return petData;
  } else {
    console.log(`No details found for ${h2Value}`);
    return null;
  }
}

scrapeMainPage();
