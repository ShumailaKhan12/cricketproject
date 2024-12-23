"use client";
import { GetMatchCardAPI } from "@/APIs/api";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MatchCards = (): any => {
  const [matches, setmatches]: any = useState([]);

  const fetch = async () => {
    const cards = await GetMatchCardAPI();
    // console.log("cards: ", cards?.matchIds);
    setmatches(cards?.matchIds);
  };

  useEffect(() => {
    fetch();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1279,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   <div className=" mt-7">
     {/* <div className="grid grid-cols-4 grid-rows-2 gap-4 mt-2"> */}
       <Slider {...settings}>
      {matches?.map((post: any, index: any) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg h-72 me-4"
        >
          <Link href={`/match-details/${post?.matchId}`} className="">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post?.seriesName}</div>
              <div className="flex justify-between">

                <p className="text-gray-700 text-base">
                  {post?.team1?.teamName} VS {post?.team2?.teamName}
                </p>
                <p>
                  {new Date(parseInt(post?.startDate)).toLocaleString("en-US", {
                    timeZone: "Asia/Dubai",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
              </div>

            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {post?.stateTitle}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {post?.status}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {post?.matchFormat}
              </span>
            </div>
          </Link>
        </div>
      ))}
      </Slider>
    {/* </div> */}
   </div>
  );
};

export default MatchCards;
