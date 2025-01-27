import {
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
    Table,
  } from "@/components/ui/table";
  
  import posts from "@/data/posts";
  import {  PostInterface } from "@/types/posts";
  type PostTableProps = Partial<{
    limit: number;
    title: string;
  }>;
  
  import { Heart } from "lucide-react";
  
  const FavouritePostsTable = ({ title }: PostTableProps) => {
    let filteredSortedPosts: PostInterface[] = [...posts]
      .filter((post) => post.like)
    return (
      <div className="mt-10">
        <h3 className="text-2xl mb-4 font-semibold">{title ? title : "Posts"}</h3>
        <Table>
          <TableCaption>List of recent posts</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="hidden md:table-cell">
                Author
              </TableHead>
              <TableHead className="hidden md:table-cell text-right">
                Date
              </TableHead>
              <TableHead className="hidden md:table-cell">
                Likes
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredSortedPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell> {post.title}</TableCell>
                <TableCell> {post.body} </TableCell>
                <TableCell> {post.author} </TableCell>
                <TableCell className="flex flex-grow"> {post.date} </TableCell>
                <TableCell>
                  <Heart fill="#cc1005" />
                  {post.like}
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  };
  
  export default FavouritePostsTable;
  