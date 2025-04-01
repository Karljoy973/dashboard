"use client";
import PaginationPosts from "@/components/posts/PaginationPosts";
import PostTable from "@/components/posts/PostTable";

const PostPage = () => {
  return (
		<div className="flex flex-col ">
			<PostTable />
			<PaginationPosts />
		</div>
  );
};

export default PostPage;
