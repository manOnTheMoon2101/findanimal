import Header from "@/components/Header/Header";
import Body from "@/components/Body/Body";
import Footer from "@/components/Footer/footer";
export default function Home() {
  return (
    <div className="m-5">
      <div className="my-4">
        <Header />
      </div>
      <div className="my-24">
        <Body />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
