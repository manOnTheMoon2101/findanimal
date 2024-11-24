import Header from "@/components/Header";
import Body from "@/components/Body";
import { MdInfo } from "react-icons/md";
export default function Home() {
  return (
    <div>
      {/* <div>
        <Header />
      </div> */}
      <body>
        <div className="my-18">
          <Body />
        </div>
        <div>
          <button className="fixed bottom-5 right-5 bg-accent text-white p-4 rounded-full shadow-lg text-2xl">
            <MdInfo />
          </button>
        </div>
      </body>
    </div>
  );
}
