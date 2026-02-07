import React, { useState, useEffect } from 'react';
import BlogPostLink from './blogPostLink';

interface BlogPostInfo {
  postId: string;
  title: string;
  content: string;
  imageUrl: string;
}

const HomePage: React.FC = () => {
  const API_URL = 'https://shhhihi666.execute-api.us-west-2.amazonaws.com/posts';
  const [blogPosts, setBlogPosts] = useState<BlogPostInfo[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBlogPosts(data);

      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Travel Blog Posts</h1>
      {blogPosts ? 
        blogPosts.map((post) => (
          <BlogPostLink key={post.postId} blogInfo={post} />
        ))
        : <p>Loading...</p>
      }
    </div>
  );
};

export default HomePage;