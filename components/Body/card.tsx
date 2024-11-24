import * as React from "react";
import types from "@/utils/typeFormat.json"; // Ensure the JSON is properly imported
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "../ui/badge";
import { MainDialog } from "./dialog";
import formatDate from "@/utils/dateFormat";

export function MainCard(props: any) {
  const matchedType = types.find((x: any) => x.type === props.type);

  return (
    <Card className="w-[350px] bg-background drop-shadow-xl">
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-center">
          <span>{props.name}</span>
          <Badge className="bg-primary">Age</Badge>
        </CardTitle>
        <CardDescription>
          {matchedType ? matchedType.name : "Unknown"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Image
          src={props.image}
          alt="images"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto", borderRadius: "20px" }}
        />
      </CardContent>
      <CardFooter className="flex justify-between items-baseline">
        <Badge className="bg-white"> {formatDate(props.date)}</Badge>
        <MainDialog data={props} />
      </CardFooter>
    </Card>
  );
}
