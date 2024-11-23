import * as React from "react";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MainDialog } from "./dialog";
import formatDate from "@/utils/dateFormat";
export function MainCard(props: any) {
  return (
    <Card className="w-[350px] bg-primary">
      <CardHeader>
        <CardTitle>{props.name}</CardTitle>
        <CardDescription>{props.type}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={props.image}
          alt="images"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </CardContent>
      <CardFooter className="flex justify-between">
        {formatDate(props.date)}
        <MainDialog data={props} />
      </CardFooter>
    </Card>
  );
}
