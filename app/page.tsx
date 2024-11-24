import Header from "@/components/Header";
import Body from "@/components/Body";
import { MdInfo } from "react-icons/md";
import { InfoDialog } from "@/components/Body/info/Info";
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
      {/* <div className="fixed bottom-5 right-5 p-2 z-20">
        <InfoDialog />
      </div> */}

      <div>
        <Footer />
      </div>
    </div>
  );
}
