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
import posts, { formSchema } from "@/data/posts";
import { useToast } from "@/hooks/use-toast";

interface PostEditPageProps {
  params: {
    id: string;
  };
}
const post = posts.find((post) => {});
const { toast } = useToast();
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

const LogInForm = () => {

    return (<><Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-8">
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
        /></form>
    </Form></>  );
}
 
export default LogInForm;