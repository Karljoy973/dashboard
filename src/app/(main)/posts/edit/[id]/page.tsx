"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import BackButton from "@/components/BackButton";
import posts from "@/data/posts";
import { use } from "react";

const formSchema = z.object({
  title: z
    .string({ description: "Form Title", required_error: "Empty Title Error" })
    .min(1, "Empty Title Error"),
  body: z
    .string({ description: "Form body", required_error: "Empty body Error" })
    .min(1, "Empty body Error"),
  author: z
    .string({
      description: "Form author",
      required_error: "Empty author Error",
    })
    .min(1, "Empty author Error"),
  date: z
    .string({ description: "Form date", required_error: "Empty date Error" })
    .min(1, "Empty date Error"),
});

interface PostEditPageProps {
  params: {
    id: string;
  };
}

const handleSubmit = (data: z.infer<typeof formSchema>) => console.log(data);

const EditPostPage = ({ params }: PostEditPageProps) => {
  let post = posts.find((post) => post.id === params.id);
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
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
          <FormField
            control={postform.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                    <FormLabel className="uppercase text-lg font-bold text-zinc-500 dark:bg-slate-700 dark:text-secondary/70">{post?.author }</FormLabel>
                <FormControl>
                  <Input className="bg-slate-100 border-0 focus-vidsible:ring-0 text-black dark:text-white focus-visible:ring-offset-visible" placeholder="Edit title" {...field} />
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
                  <Textarea className="bg-slate-100 border-0 focus-vidsible:ring-0 text-black dark:text-white focus-visible:ring-offset-visible" placeholder="Enter Body" {...field} />
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
                  <Textarea className="bg-slate-100 border-0 focus-vidsible:ring-0 text-black dark:text-white focus-visible:ring-offset-visible" placeholder="Enter Body" {...field} />
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
                  <Textarea className="bg-slate-100 border-0 focus-vidsible:ring-0 text-black dark:text-white focus-visible:ring-offset-visible" placeholder="Enter Body" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
                
            )}
          />
        </form>
      </Form>
    </>
  );
};

export default EditPostPage;
