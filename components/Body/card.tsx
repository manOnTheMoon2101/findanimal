import * as React from "react";
import { IoMdOpen } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import formatDate from "@/utils/dateFormat";
export function MainCard(props: any) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={props.image} alt="images" className="w-full" />
      </CardContent>
      <CardFooter className="flex justify-between">
        {formatDate(props.date)}
        <Button className="bg-accent text-white">
          <IoMdOpen />
        </Button>
      </CardFooter>
    </Card>
  );
}
