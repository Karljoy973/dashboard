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


const PostTable = ({ limit, title }: PostTableProps) => {
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
          </TableRow>
              </TableHeader>
              <TableBody>
                  {posts.map((post) => {
                      <TableRow key={post.id}>
                          <TableCell> {post.author} </TableCell>
                      </TableRow>
                  })}
              </TableBody>
      </Table>
    </div>
  );
};

export default PostTable;
