// pages/article.tsx

import React, { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample article data
const articleData = {
  title: "Sample Article Title",
  image: "/42lp.png",
  description: "This is the short description about this article you will fin more details at the part of read more Thank you so much for reading",
  content: "Detailed content of the article goes here. You can provide more information about the article, including images, videos, and further explanations."
};

const Article: React.FC = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMore = () => {
    setShowFullContent(true);
  };

  return (
    <div>
      <Header />
      <br /><br /><br />
      <div className="article">
        <div className="image-container">
          <img src={articleData.image} alt={articleData.title} />
        </div>
        <div className="description-container">
          <h1>{articleData.title}</h1>
          <p>{showFullContent ? articleData.content : articleData.description}</p>
          {!showFullContent && (
            <button onClick={handleReadMore}>Read More</button>
          )}
        </div>
      </div>

      <style jsx>{`
        .article {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .image-container {
          flex: 1;
          margin-right: 20px;
        }
        .image-container img {
          max-width: 100%;
          height: auto;
        }
        .description-container {
          flex: 2;
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default Article;
