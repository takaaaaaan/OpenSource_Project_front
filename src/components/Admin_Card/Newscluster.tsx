import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Newscluster() {
  const [collectionName, setCollectionName] = useState("");
  const [dateStr, setDateStr] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      collection_name: collectionName,
      date_str: dateStr,
    };

    try {
      const response = await fetch("/newscluster", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Card className="w-[400px] h-full">
        <CardHeader>
          <CardTitle>News Cluster</CardTitle>
          <CardDescription>Cluster news articles based on the collection name and date.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="collection_name">Collection Name</Label>
                <Input
                  id="collection_name"
                  value={collectionName}
                  onChange={(e) => setCollectionName(e.target.value)}
                  placeholder="Enter collection name"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="date_str">Date (YYYY-MM-DD)</Label>
                <Input
                  id="date_str"
                  value={dateStr}
                  onChange={(e) => setDateStr(e.target.value)}
                  placeholder="Enter date (YYYY-MM-DD)"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => { setCollectionName(""); setDateStr(""); }}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
