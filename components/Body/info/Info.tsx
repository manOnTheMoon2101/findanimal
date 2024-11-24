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
import { MdInfo } from "react-icons/md";
export function InfoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="w-full">About</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Note</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          The project I’ve developed is an informational website designed for
          our local animal adoption center. It serves as a platform to showcase
          the animals currently available for adoption, providing potential pet
          owners with up-to-date details about each animal's breed, age, and
          temperament. By offering easy access to this information, the website
          aims to promote the adoption of pets in need and help connect them
          with loving homes. This project is a step forward in supporting our
          community’s efforts to rescue and rehome animals.
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
