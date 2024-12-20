"use client";
import { GetMatchCardAPI } from "@/APIs/api";

import Link from "next/link";
import { useEffect } from "react";

const MatchCards = (): any => {
  const fetch = async () => {
    const cards = await GetMatchCardAPI();
    // console.log("cards: ", cards);
    // let a = cards?.liveMatches?.flatMap((i: any) => {
    //   console.log(i?.seriesMatches);
    // });
    //    let b = cards?.liveMatches?.flat(5)
    //    console.log('b: ', b);
    let arry:any = [];
    const matchIds = cards.liveMatches.flatMap((matchType: any) =>
        matchType.seriesMatches.flatMap((seriesMatch: any) =>
            // console.log('seriesMatch: ', seriesMatch?.seriesAdWrapper?.matches)
    arry?.push(seriesMatch?.seriesAdWrapper?.matches),
    
    // seriesMatch.seriesAdWrapper.matches.map(
        //     (match: any) => {
            //         console.log('match: ', match?.matchInfo?.matchId);
            //         // match.matchInfo.matchId
            //     }
            // )
        )
    );
    console.log('matchIds: ', arry?.flat(4)?.map((i:any)=>{
        console.log(i?.matchInfo?.matchId)
    }));

  };
  // const extractMatchIds = (nestedData:any) => {
  //     return nestedData.flatMap((series:any) =>
  //       series.seriesMatches.flatMap((matches:any) =>
  //         matches.matches.map((match:any) => match.matchInfo?.matchId)
  //       )
  //     );
  //   };

  //   // Extract matchIds from the incoming data
  //   const matchIds = extractMatchIds(cards);

  useEffect(() => {
    fetch();
  }, []);

  const posts = [
    { slug: "post-12", title: "Post 11" },
    { slug: "post-2", title: "Post 2" },
    // Add more posts as needed
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-4">
      {posts.map((post) => (
        <div
          key={post.slug}
          className="max-w-sm rounded overflow-hidden shadow-lg"
        >
          <Link href={`/match-details/${post.slug}`} className="">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{post.title}</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MatchCards;
