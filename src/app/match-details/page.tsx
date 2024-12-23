"use client";
import { GetMatchCardAPI } from "@/APIs/api";

import Link from "next/link";
import { useEffect, useState } from "react";

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

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4">
      {matches?.map((post: any, index: any) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg">
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
    </div>
  );
};

export default MatchCards;
