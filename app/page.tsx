import Header from "@/components/Header";
import Body from "@/components/Body";
import { MdInfo } from "react-icons/md";
export default function Home() {
  return (
    <div>
      <Header />
      <Body/>
      <button className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg text-2xl hover:bg-blue-600 focus:outline-none">
      <MdInfo />
      </button>
    </div>
  );
}
