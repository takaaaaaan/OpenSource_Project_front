"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { X, Volume2 } from "lucide-react";
import ctl from "@netlify/classnames-template-literals";
import { AspectRatioCardProps, Article } from "../../../types/Article";

const fetchSentiment = async (content: string) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/sentiment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.sentiment;
    } catch (error) {
        console.error('Failed to fetch sentiment:', error);
        return 'neutral';
    }
};

const speak = (text: string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
};

const stopSpeaking = () => {
    speechSynthesis.cancel();
};

const CategoryRatioCard03: React.FC<AspectRatioCardProps> = ({ articles }) => {
    const [analyzedArticles, setAnalyzedArticles] = useState<Article[]>([]);

    useEffect(() => {
        const analyzeSentiments = async () => {
            const articlesWithSentiment = await Promise.all(
                articles.map(async (article) => {
                    const sentiment = await fetchSentiment(article.content);
                    return { ...article, sentiment };
                })
            );
            setAnalyzedArticles(articlesWithSentiment);
        };

        analyzeSentiments();
    }, [articles]);

    return (
        <div className="pt-4 pb-96 grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-4 lg:grid-cols-5 lg:gap-5 overflow-y-auto h-screen">
            {analyzedArticles.map((article, index) => {
                const sentiment = article.sentiment ?? "neutral";
                const sentimentClass =
                    sentiment === "negative"
                        ? badgeNegative
                        : sentiment === "neutral"
                            ? badgeNeutral
                            : badgePositive;

                const dotClass =
                    sentiment === "negative"
                        ? notificationDotNegative
                        : sentiment === "neutral"
                            ? notificationDotNeutral
                            : notificationDotPositive;

                return (
                    <AlertDialog key={index}>
                        <AlertDialogTrigger asChild>
                            <div className="relative border border-gray-300 rounded-md">
                                <div className="relative w-full" style={{ paddingBottom: "45%" }}>
                                    <Image
                                        src={article.urlToImage ?? ""}
                                        alt="Article Image"
                                        className="absolute inset-0 w-full h-full rounded-md object-cover"
                                        layout="fill"
                                        unoptimized
                                    />
                                    <div className={dotClass}></div>
                                </div>
                                <div className="p-2 h-full">
                                    <div
                                        className="font-bold text-lg mt-1 overflow-hidden text-ellipsis"
                                        style={{
                                            display: "-webkit-box",
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: "vertical",
                                        }}
                                    >
                                        {article.title}
                                    </div>
                                </div>
                            </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <div className="relative w-full" style={{ paddingBottom: "45%" }}>
                                    <Image
                                        src={article.urlToImage ?? ""}
                                        alt="Article Image"
                                        className="absolute inset-0 w-full h-full rounded-md object-cover"
                                        layout="fill"
                                        unoptimized
                                    />
                                </div>
                                <AlertDialogTitle>{article.title}</AlertDialogTitle>
                                <div>{article.publishedAt}</div>
                                <div className="flex justify-end mt-2">
                                    <div className={sentimentClass}>
                                        {sentiment === "negative" && "negative"}
                                        {sentiment === "neutral" && "neutral"}
                                        {sentiment === "positive" && "positive"}
                                    </div>
                                </div>
                            </AlertDialogHeader>
                            <AlertDialogDescription className="max-h-48 overflow-y-auto">
                                {article.content}
                                <div className="mt-4">
                                    <h3 className="font-bold">Related Links</h3>
                                    <ul className="list-disc pl-5">
                                        {article.newsurlList.map((url, urlIndex) => (
                                            <li key={urlIndex}>
                                                <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                    {url}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </AlertDialogDescription>
                            <AlertDialogFooter>
                                <div className="flex justify-between w-full">
                                    <button onClick={() => speak(article.content)} className="flex items-center space-x-2 text-blue-600 hover:underline">
                                        <Volume2 />
                                        <span>Listen</span>
                                    </button>
                                    <AlertDialogCancel onClick={stopSpeaking}>
                                        <X />
                                    </AlertDialogCancel>
                                </div>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                );
            })}
        </div>
    );
};

export default CategoryRatioCard03;

const badge = ctl(`
  inline-block
  p-1
  text-xs
  font-bold
  text-center
  whitespace-nowrap
  align-baseline
  rounded-md
`);

const badgeNegative = ctl(`
  ${badge}
  text-white
  bg-red-600
`);

const badgeNeutral = ctl(`
  ${badge}
  text-white
  bg-blue-600
`);

const badgePositive = ctl(`
  ${badge}
  text-white
  bg-green-600
`);

const notificationDotBase = ctl(`
  absolute
  -top-4
  -right-2
  h-6
  w-6
  rounded-full
  my-1
`);

const notificationDotNegative = ctl(`
  ${notificationDotBase}
  bg-red-500
`);

const notificationDotNeutral = ctl(`
  ${notificationDotBase}
  bg-blue-500
`);

const notificationDotPositive = ctl(`
  ${notificationDotBase}
  bg-green-500
`);
