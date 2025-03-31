import {
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Table,
} from "@/components/ui/table";

import { Heart } from "lucide-react";

type PostTableProps = Partial<{
	limit: number;
	title: string;
}>;

// type PostsData = {
// 	id: number;
// 	title: string;
// 	body: string;
// 	authorId: number;
// 	dateTime: string;
// 	isliked: boolean;
// };

// type JSONPostsResponse = {
// 	data: PostsData;
// 	fetchError: Error;
// };

// const fetchPostsData = async () => {
// 	const PostData = await fetch(
// 		"https://dashboard-backend-flame.vercel.app/posts"
// 	);

// 	const { data, fetchError }: JSONPostsResponse = await PostData.json();
// 	if (!!fetchError) return Error("Internal Error");
// 	return data;
// };

const FavouritePostsTable = async ({ title }: PostTableProps) => {
	//TODO - Fetch data
	const PostData = await fetch(
		"https://dashboard-backend-flame.vercel.app/posts"
	);

	const fetchedPosts: {
		id: number;
		title: string;
		body: string;
		authorid: number;
		dateTime: string;
		isliked: boolean;
		comment_list_id: number[];
	}[] = await PostData.json();

	const likedFetchedPosts = fetchedPosts.filter((e) => e.isliked);

	const AuthorData = await fetch(
		"https://dashboard-backend-flame.vercel.app/authors"
	);
	const fetchedAuthors: { id: number; username: string }[] =
		await AuthorData.json();
	const temp = fetchedAuthors.map((author) =>
		fetchedPosts.find((post) => post.authorid == author.id)
	);
	console.log(temp);
	return (
		<div className="mt-10">
			<h3 className="text-2xl mb-4 font-semibold">
				{title ? title : "Posts"}
			</h3>
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
					{likedFetchedPosts.map((post) => (
						<TableRow key={post.id}>
							<TableCell> {post.title}</TableCell>
							<TableCell> {post.body} </TableCell>
							<TableCell> {`${post.authorid}`} </TableCell>
							<TableCell className="flex flex-grow">
								{" "}
								{post.dateTime}{" "}
							</TableCell>
							<TableCell>
								<Heart fill="#cc1005" />
								{post.isliked}
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
