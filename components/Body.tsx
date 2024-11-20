"use client";
import React, { useEffect, useState } from "react";
import { MainCard } from "./Body/card";
import dogs from "@/app/assets/images/dogs.jpg";

const Body = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    <div className="flex flex-row justify-between">
      {data.map((x: any) => (
        <MainCard 
          image={dogs} 
          name={x.name} 
          type={x.type} 
          date={x.createdAt} 
          refresh={fetchPosts}
        />
      ))}
    </div>
  );
};

export default Body;
