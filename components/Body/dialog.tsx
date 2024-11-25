import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoMdOpen } from "react-icons/io";
import Image from "next/image";
import { Badge } from "../ui/badge";

export function MainDialog(data: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-accent text-white">
          <IoMdOpen />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{data.data.name}</DialogTitle>
        </DialogHeader>
        <div>
          <Image
            src={data.data.image}
            alt="images"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto", borderRadius: "20px" }}
          />
        </div>
        <DialogDescription>
          <Badge>
            {data.data.age} {data.data.ageDate}
          </Badge>
        </DialogDescription>
        <DialogFooter>
          <a
            href={`https://wellingtonspca.co.za/up-for-adoption/dogs/${data.data.name}/`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-accent text-white font-bold">Contact</Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
