// components/ui/AspectRatioCard.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

// interface AspectRatioCardProps {
//   children: React.ReactNode;
// }

interface AspectRatioCardProps {
  children?: React.ReactNode; // `children` プロパティをオプショナルにする
}

const AspectRatioCard: React.FC<AspectRatioCardProps> = ({ children }) => {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImageUrls = async () => {
      const response = await fetch("/api/imageUrl");
      const data = await response.json();
      setImgUrls(data.imageUrls);
    };

    fetchImageUrls();
  }, []);

  return (
    <>
      {imgUrls.map((url, index) => (
        <div key={index} className="relative pb-1/1">
          <Card>
            <AspectRatio>
              <Image
                src={url}
                alt="Image"
                className="rounded-md object-cover"
                layout="fill"
              />
            </AspectRatio>
            {children}
          </Card>
        </div>
      ))}
    </>
  );
};

export default AspectRatioCard;
