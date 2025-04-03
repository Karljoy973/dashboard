import {
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
  Table,
} from "@/components/ui/table";
import { PostTableProps, PostsData, AuthorData } from "@/types/types";

import { Heart } from "lucide-react";
import { API_BASE_PATH, POSTS_ENDPOINT, AUTHORS_ENDPOINT } from "@/constants";

const FavouritePostsTable = async ({ title }: PostTableProps) => {
	const [fetchedPosts, fetchedAuthors] = await Promise.allSettled([
		fetch(`${API_BASE_PATH}${POSTS_ENDPOINT}`),
		fetch(`${API_BASE_PATH}${AUTHORS_ENDPOINT}`),
	]);

	try {
		if (
			fetchedAuthors.status == "rejected" ||
			fetchedPosts.status == "rejected"
		) {
			throw new Error("Server Error please reload the page or try later");
		}
		const posts: PostsData[] = await fetchedPosts.value.json();
		const likedPosts = posts.filter((post) => post.isliked);
		const authors: AuthorData[] = await fetchedAuthors.value.json();
		return (
			<div className="mt-10">
				<h3 className="text-2xl mb-4 font-semibold">
					{title ? title : "Posts"}
				</h3>
				<Table className="w-11/12">
					<TableCaption>List of recent posts</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead>Title</TableHead>
							<TableHead>Description</TableHead>
							<TableHead className="hidden md:table-cell">
								Author
							</TableHead>
							<TableHead className="hidden md:table-cell text-right min-w-40">
								Date
							</TableHead>
							<TableHead className="hidden md:table-cell">
								Likes
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{likedPosts.map((post) => (
							<TableRow key={post.id}>
								<TableCell> {post.title}</TableCell>
								<TableCell> {post.body} </TableCell>
								<TableCell>
									{" "}
									{
										authors.find(
											(author) =>
												author.id == post.authorid
										)!.username
									}{" "}
								</TableCell>
								<TableCell className="flex flex-grow">
									{" "}
									{new Date(
										post.datetime
									).toDateString()}{" "}
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
	} catch (error) {
		console.log(error);
		return (
			<>
				<div>
					<b>Server Error please reload the page or try later ...</b>
				</div>
			</>
		);
	}
};

export default FavouritePostsTable;
