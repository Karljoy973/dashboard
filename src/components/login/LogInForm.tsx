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
import BackButton from "@/components/BackButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

interface PostEditPageProps {
  params: {
    id: string;
  };
}
const formSchema = z.object({
  email: z.string().min(3, { message: "Please enter a valid email address" }),
  password: z.string().min(2, { message: "Please provide a valid password" }),
});

const LogInForm = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    router.push("/", { scroll: true });
    console.log(data);
  };
  const redirect = () => router.push("/")

  return (
    <>
      <Card>
      <CardHeader>
        <CardTitle>Log into your account using your SSO</CardTitle>
      </CardHeader>
        <CardContent className="grid grid-cols-2 w-[80%]">
                <Button className="mx-2" onClick={redirect}>Google</Button> <Button className="mx-2" onClick={redirect}>GitHub</Button>
        </CardContent>

        
          <CardDescription className="flex items-center justify-center">
          ----- or with your credentials -----
          </CardDescription>
        
        <CardContent className="space-y-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-lg font-bold text-zinc-500  dark:text-slate-400">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-slate-100 border-0 focus-vidsible:ring-0 text-black dark:text-white focus-visible:ring-offset-visible"
                        placeholder="Enter email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-lg font-bold text-zinc-500  dark:text-slate-400">Password</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-slate-100 border-0 focus-vidsible:ring-0 text-black dark:text-white focus-visible:ring-offset-visible"
                        placeholder="Update title"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full my-4">LogIn</Button>
            </form>
          </Form>
        </CardContent>
          
      </Card>
    </>
  );
};

export default LogInForm;
