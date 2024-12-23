"use client";
import { GetMatchCardAPI } from "@/APIs/api";

import Link from "next/link";
import { useEffect, useState } from "react";

const Shedule = (): any => {
  const [matches, setmatches]: any = useState([]);

  const fetch = async () => {
    const cards = await GetMatchCardAPI();
    console.log("cards: ", cards?.matchIds);
    setmatches(cards?.matchIds);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="">
      {matches?.map((post:any, index:any) => (
        <div key={index} className=" rounded overflow-hidden shadow-lg mb-4">
          <table className="table-fixed w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Match Format</th>
                <th className="border border-gray-300 p-2">Venue City</th>
                <th className="border border-gray-300 p-2">Ground</th>
                <th className="border border-gray-300 p-2">Timezone</th>
                <th className="border border-gray-300 p-2">Team 1</th>
                <th className="border border-gray-300 p-2">Team 2</th>
                <th className="border border-gray-300 p-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">{post?.matchFormat}</td>
                <td className="border border-gray-300 p-2">{post?.venueInfo?.city}</td>
                <td className="border border-gray-300 p-2">{post?.venueInfo?.ground}</td>
                <td className="border border-gray-300 p-2">{post?.venueInfo?.timezone}</td>
                <td className="border border-gray-300 p-2">{post?.team1?.teamName}</td>
                <td className="border border-gray-300 p-2">{post?.team2?.teamName}</td>
                <td className="border border-gray-300 p-2">{post?.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default Shedule;
