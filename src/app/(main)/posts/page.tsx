"use client";
import PaginationPosts from "@/components/posts/PaginationPosts";
import PostTable from "@/components/posts/PostTable";
import BackButton from "@/components/BackButton";
import editPostPage from "./edit/[id]/page";

const PostPage = () => {
  return (
    <>
      <PostTable />
      <PaginationPosts />
    </>
  );
};

export default PostPage;
