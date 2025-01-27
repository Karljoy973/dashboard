import {
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Table,
} from "@/components/ui/table";

import Link from "next/link";
import posts from "@/data/posts";
import { PostComment, PostInterface } from "@/types/posts";
type PostTableProps = Partial<{
  limit: number;
  title: string;
}>;

import { Pen, Heart } from "lucide-react";

const PostTable = ({ limit, title }: PostTableProps) => {
  let filteredSortedPosts: PostInterface[] = [...posts]
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
            <TableHead className="hidden md:table-cell text-right">
              Author
            </TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Edit
                      </TableHead>
                      <TableHead className="hidden md:table-cell text-right">
              Likes
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredSortedPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell> {post.author} </TableCell>
              <TableCell> {post.body} </TableCell>
              <TableCell> {post.author} </TableCell>
                  <TableCell> {post.date}
                <Link href={`/profile/edit/${post.id}`}>
                  <button className="mx-4">
                    <Pen size={15} />
                  </button>
                </Link>
                  
                  </TableCell>
                  <TableCell>
                      <Heart fill={post.like? "#cc1005":"" }/>
                      {post.like} </TableCell>
              <TableCell>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostTable;
