import React from 'react';

interface BlogPostLinkProps {
  blogInfo: {
    postId: string;
    title: string;
    content: string;
    imageUrl: string;
  };
};

const BlogPostLink: React.FC<BlogPostLinkProps> = ({blogInfo}) => {
    return (
        <div>
          <h2>{blogInfo.title}</h2>
          <p>{blogInfo.content}</p>
          <img src={blogInfo.imageUrl} alt={blogInfo.title} style={{ maxWidth: '50%' }} />
        </div>
    );
};
export default BlogPostLink;
