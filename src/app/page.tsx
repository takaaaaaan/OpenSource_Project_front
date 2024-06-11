import { CarouselPlugin } from "@/components/Carusel/CaruselPlugin";
import { SubCarousel } from "@/components/Carusel/subCarusel";

export default function Home() {
  const newsImages = [
    {
      src: "",
      alt: "",
      title: "",
      description: "",
      link: "",
    },
    {
      src: "/images/b-00.jpg",
      alt: "Image 2",
      title: "For Teams",
      description: "A superassistant for every member of your team",
      link: "https://example.com/learn-more",
    },
    {
      src: "/images/b-01.jpg",
      alt: "Image 2",
      title: "For Teams",
      description: "A superassistant for every member of your team",
      link: "https://example.com/learn-more",
    },
    {
      src: "/images/b-02.jpg",
      alt: "Image 3",
      title: "For Enterprises",
      description: "Empower your entire workforce with enterprise-grade AI",
      link: "https://example.com/discover-more",
    },
    {
      src: "/images/b-03.jpg",
      alt: "Image 4",
      title: "For Everyone",
      description: "Explore limitless possibilities",
      link: "https://example.com/possibilities",
    },
    {
      src: "/images/b-04.jpg",
      alt: "Image 5",
      title: "For Teams",
      description: "Boost team productivity",
      link: "https://example.com/productivity",
    },
    {
      src: "/images/b-05.jpg",
      alt: "Image 6",
      title: "For Enterprises",
      description: "Transform your operations",
      link: "https://example.com/transform",
    },
  ];

  const analysisImages = [
    {
      src: "",
      alt: "",
      title: "",
      description: "",
      link: "",
    },
    {
      src: "/images/00.jpg",
      alt: "Image 2",
      title: "For Teams",
      description: "A superassistant for every member of your team",
      link: "https://example.com/learn-more",
    },
    {
      src: "/images/01.jpg",
      alt: "Image 2",
      title: "For Teams",
      description: "A superassistant for every member of your team",
      link: "https://example.com/learn-more",
    },
    {
      src: "/images/02.jpg",
      alt: "Image 3",
      title: "For Enterprises",
      description: "Empower your entire workforce with enterprise-grade AI",
      link: "https://example.com/discover-more",
    },
    {
      src: "/images/03.jpg",
      alt: "Image 4",
      title: "For Everyone",
      description: "Explore limitless possibilities",
      link: "https://example.com/possibilities",
    },
    {
      src: "/images/04.jpg",
      alt: "Image 5",
      title: "For Teams",
      description: "Boost team productivity",
      link: "https://example.com/productivity",
    },
    {
      src: "/images/05.jpg",
      alt: "Image 6",
      title: "For Enterprises",
      description: "Transform your operations",
      link: "https://example.com/transform",
    },
  ];

  return (
    <div className="h-full">
      <div>
        <CarouselPlugin />
      </div>
      <h1 className="ml-20 mt-9 text-3xl font-bold">News</h1>
      <div className="h-[400px] mt-9">
        <SubCarousel images={newsImages} />
      </div>
      <h1 className="mt-9 ml-20 text-3xl font-bold">분석</h1>
      <div className="h-[400px] mt-9 ">
        <SubCarousel images={analysisImages} />
      </div>
    </div>
  );
}
