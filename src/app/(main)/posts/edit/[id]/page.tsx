"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { PageProps } from "../../../../../../.next/types/app/(main)/posts/edit/[id]/page";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BackButton from "@/components/BackButton";
import posts, { formSchema } from "@/data/posts";
import { useToast } from "@/hooks/use-toast";

interface PostEditPageProps extends PageProps {
	postEditParams: {
		id: string;
	};
}

const EditPostPage = ({ postEditParams }: PostEditPageProps) => {
	const { toast } = useToast();
	const post = posts.find((post) => post.id === postEditParams.id);
	const handleSubmit = (data: z.infer<typeof formSchema>) => {
		toast({
			title: "Your post has been submitted",
			description: `Updated by ${post?.author} on ${post?.date}`,
		});
		console.log(data);
	};
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: post?.title || "",
			body: post?.body || "",
			author: post?.author || "",
			date: post?.date || "",
		},
	});

	const postform = useForm();
	return (
		<>
			<BackButton link="/posts" text="Previous Post" />
			<h3 className="text-4xl mb-4">Edit Post</h3>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(handleSubmit)}
					className="space-y-8">
					<FormField
						control={postform.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="uppercase text-lg font-bold text-zinc-500 dark:bg-slate-700 dark:text-secondary/70">
									{post?.author}
								</FormLabel>
								<FormControl>
									<Input
										className="bg-slate-100 border-0 focus-vidsible:ring-0 text-black dark:text-white focus-visible:ring-offset-visible"
										placeholder="Update title"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={postform.control}
						name="body"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="uppercase text-lg font-bold text-zinc-500 dark:bg-slate-700 dark:text-secondary/70"></FormLabel>
								<FormControl>
									<Textarea
										className="bg-slate-100 border-0 focus-vidsible:ring-0 text-black dark:text-white focus-visible:ring-offset-visible"
										placeholder="Update Body"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={postform.control}
						name="author"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="uppercase text-lg font-bold text-zinc-500 dark:bg-slate-700 dark:text-secondary/70"></FormLabel>
								<FormControl>
									<Textarea
										className="bg-slate-100 border-0 focus-vidsible:ring-0 text-black dark:text-white focus-visible:ring-offset-visible"
										placeholder="Update Author"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={postform.control}
						name="date"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="uppercase text-lg font-bold text-zinc-500 dark:bg-slate-700 dark:text-secondary/70"></FormLabel>
								<FormControl>
									<Textarea
										className="bg-slate-100 border-0 focus-vidsible:ring-0 text-black dark:text-white focus-visible:ring-offset-visible"
										placeholder="Update Date"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button className="w-full bg-slate-700 dark:bg-slate-400 text-white dark:text-gray-800">
						Update Post
					</Button>
				</form>
			</Form>
		</>
	);
};

export default EditPostPage;
