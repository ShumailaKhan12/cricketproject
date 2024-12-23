"use client"
import { GetNewsAPI } from "@/APIs/api";
import { useEffect, useState } from "react";

const News = () => {
  const [articles, setArticles] = useState([]);
  const fetch = async () => {
    try {
      let response = await GetNewsAPI()
      setArticles(response)
    } catch (error) {

    }
  }

  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className=" mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>
      <div className="grid grid-cols-4 gap-4">
        {articles?.map((article: any) => (
          <div key={article.title} className="mb-6 border p-4 rounded-lg shadow-md">
            <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-2xl font-semibold">
              <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
            </h2>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">{article.author}</span> - {new Date(article.publishedAt).toLocaleDateString()}
            </p>
            <p className="text-gray-800">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;