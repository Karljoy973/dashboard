import PaginationPosts from "@/components/posts/PaginationPosts";
import PostTable from "@/components/posts/PostTable";
import BackButton from "@/components/BackButton";
import * as z from "zod"


const PostPage = () => {
  return (
    <>
      <BackButton link="/" text="Previous Post"/>
      <PostTable />
      <PaginationPosts />
    </>
  );
};

export default PostPage;
