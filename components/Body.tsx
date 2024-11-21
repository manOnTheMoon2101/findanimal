"use client";
import React, { useEffect, useState } from "react";
import { MainCard } from "./Body/card";
import dogs from "@/app/assets/images/dogs.jpg";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Body = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/animals");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="my-4">
        <Select>
          <SelectTrigger className="w-[180px] bg-accent text-white">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent className="bg-background">
            <SelectGroup>
              <SelectLabel>Type</SelectLabel>
              {data
                .map((x: any) => x.type)
                .filter(
                  (value: any, index: any, self: any) =>
                    self.indexOf(value) === index
                )
                .map((type: any) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-row justify-between">
        {data.map((x: any) =>
          loading ? (
            "loading"
          ) : (
            <MainCard
              image={dogs}
              name={x.name}
              type={x.type}
              date={x.createdAt}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Body;
