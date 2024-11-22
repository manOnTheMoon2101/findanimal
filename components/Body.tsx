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
      <div className="my-4"></div>
      <div className="flex flex-wrap justify-center gap-4 align-baseline">
        {data.map((x: any) =>
          loading ? (
            <div>loading</div>
          ) : (
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <MainCard
                image={x.image}
                name={x.name}
                type={x.type}
                details={x.details}
                date={x.createdAt}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Body;
