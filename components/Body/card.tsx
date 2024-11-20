import * as React from "react";

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
        <CardDescription>{props.type} {formatDate(props.date)}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={props.image} alt="images" className="w-full" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button className="bg-accent">Deploy</Button>
      </CardFooter>
    </Card>
  );
}
