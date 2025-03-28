"use client";
import PaginationPosts from "@/components/posts/PaginationPosts";
import PostTable from "@/components/posts/PostTable";

const PostPage = () => {
  return (
    <>
      <PostTable />
      <PaginationPosts />
    </>
  );
};

export default PostPage;
