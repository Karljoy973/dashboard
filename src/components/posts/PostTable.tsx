import {
	TableHeader,
	TableBody,
	TableHead,
	TableRow,
	TableCell,
	TableCaption,
	Table,
} from "@/components/ui/table";

import Link from "next/link";
import posts from "@/data/posts";
import { PostInterface } from "@/types/posts";
type PostTableProps = Partial<{
  limit: number;
  title: string;
}>;

import { Pen, Heart } from "lucide-react";

const PostTable = ({ limit, title }: PostTableProps) => {
  const filteredSortedPosts: PostInterface[] = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit ? limit : posts.length);
  return (
    <div className="mt-10">
      <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
      <Table>
        <TableCaption>List of recent posts</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="hidden md:table-cell ">Author</TableHead>
            <TableHead className="hidden md:table-cell ">Date</TableHead>
            <TableHead className="hidden md:table-cell ">Edit</TableHead>
            <TableHead className="hidden md:table-cell ">Likes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSortedPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell> {post.title} </TableCell>
              <TableCell> {post.body} </TableCell>
              <TableCell> {post.author} </TableCell>
              <TableCell>{post.date}</TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="mx-4">
                    <Pen size={15} />
                  </button>
                </Link>
              </TableCell>
              <TableCell>
                <Heart fill={post.like ? "#cc1005" : ""} />
                {post.like}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostTable;
