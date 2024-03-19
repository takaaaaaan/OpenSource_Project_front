// components/ui/AspectRatioCard.tsx
"use client";
import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface AspectRatioCardProps {
  children: React.ReactNode;
}

const AspectRatioCard: React.FC<AspectRatioCardProps> = ({ children }) => {
  const [imgUrls, setImgUrls] = useState<string[]>([]); // 画像URLの配列を保持する状態

  useEffect(() => {
    const fetchImageUrls = async () => {
      const response = await fetch("/api/imageUrl");
      const data = await response.json();
      setImgUrls(data.imageUrls); // 配列を状態にセット
    };

    fetchImageUrls();
  }, []);

  return (
    <div className="relative pb-1/1">
      <Card className="absolute top-0 left-0 h-full w-full">
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            {imgUrls.length > 0 && (
              <Image
                src={imgUrls[0]} // 配列の最初のURLを使用
                alt="Image"
                className="rounded-md object-cover"
                layout="fill"
              />
            )}
          </AspectRatio>
        </div>
        {children}
      </Card>
    </div>
  );
};

export default AspectRatioCard;
