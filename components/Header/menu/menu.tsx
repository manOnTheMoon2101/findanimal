"use client";
import { IoMdMenu } from "react-icons/io";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InfoDialog } from "@/components/Body/info/Info";
export function Menu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          <IoMdMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-background">
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
            <InfoDialog />
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
