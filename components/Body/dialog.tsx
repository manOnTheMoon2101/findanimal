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
          <Image src={data.data.image} alt="images" className="w-full" />
        </div>
        <DialogDescription>info</DialogDescription>
        <DialogFooter>
          <Button>Contact</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
