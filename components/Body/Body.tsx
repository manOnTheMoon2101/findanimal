"use client";
import React, { useEffect, useState } from "react";
import { MainCard } from "./card/card";
import dogs from "@/app/assets/images/dogs3.jpg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import { Button } from "../ui/button";
import { Annie_Use_Your_Telescope } from "next/font/google";
import { AiOutlineLoading } from "react-icons/ai";
import RandomTip from "./tips/Generator";
import { Badge } from "../ui/badge";
const annie = Annie_Use_Your_Telescope({
  weight: "400",
  subsets: ["latin"],
});

const Body = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedType, setSelectedType] = useState<any>(null);

  const fetchPosts = async (type: string | null) => {
    setLoading(true);
    try {
      const url = type ? `/api/animals?type=${type}` : "/api/animals";
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts(selectedType);
  }, [selectedType]);

  const handleSelectChange = (value: string) => {
    setSelectedType(value);
  };

  const handleClearSelection = () => {
    setSelectedType(null);
  };

  return (
    <div>
      <div className="relative w-full h-screen">
        <Image
          src={dogs}
          alt="Dogs"
          layout="fill"
          objectFit="cover"
          className="absolute top-0 left-0 z-0 rounded"
        />
        <div className="relative z-10 flex items-start justify-start w-full h-full bg-black bg-opacity-20 rounded">
          {/* <h2 className="text-black text-4xl md:text-5xl font-bold text-left absolute bottom-0 right-4 mb-4 ml-4 bg-white rounded ">
            find_A_nimal.
          </h2> */}

          <div className="text-black text-4xl md:text-5xl font-bold text-left absolute bottom-0 right-4 mb-4 ml-4">
            <Badge className="bg-accent text-white flex justify-center">
              <RandomTip />
            </Badge>
          </div>
        </div>
      </div>

      <div>
        <div className="my-28">
          <h2 className={`text-8xl text-center ${annie.className}`}>
            Give a shelter <br />
            Gain a friend
          </h2>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span className="text-center font-bold">Filter</span>
          <Select onValueChange={handleSelectChange} value={selectedType}>
            <SelectTrigger className="w-[180px] bg-primary text-white">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent className="bg-background">
              <SelectGroup>
                <SelectItem value="Dog" className="cursor-pointer">Dogs</SelectItem>
                <SelectItem value="Cat" className="cursor-pointer">Cats</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            {selectedType && (
              <Button
                onClick={handleClearSelection}
                className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
              >
                Clear Filter
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-4 align-baseline my-4">
        {loading ? (
          <div>
            <AiOutlineLoading size={34} className="animate-spin text-primary" />
          </div>
        ) : (
          data.map((x: any) => (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" key={x.id}>
              <MainCard
                image={x.image}
                name={x.name}
                type={x.type}
                details={x.details}
                age={x.age}
                ageDate={x.ageDate}
                date={x.createdAt}
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
