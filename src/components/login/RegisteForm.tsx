"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
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
import Image from "next/image";
import github from "@public/github.png"
import google from "@public/google.png"



const handleSubmit = () => alert("submitted");

// let form: any = {}
const RegisterForm = () => {
  const form = useForm();
  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="w-4/12 flex flex-col my-8 p-2 dark:bg-slate-900 bg-slate-300 rounded-md">
        <div className="item-center flex">
        <h3 className="text-slate-900 dark:text-slate-300 font-bold">Register</h3>
        </div>
        <p>register using a SSO</p>
        <div className="flex flex-row justify-between ">
          <Button>
          <Image src={google} alt="GH" width={50} />
          </Button>
          <Button>
            <Image src={github} alt="GH" width={50} />
        </Button>
        </div>
        <p>Or enter your personal informations</p>
        <FormField
          control={form.control}
          name="email"
          render={() => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" className="bg-slate-200 dark:bg-slate-800 p-2"  />
              </FormControl>
              {/* <FormMessage className=''>Enter a valid email adress </FormMessage> */}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={() => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="bg-slate-200 dark:bg-slate-800 p-2"/>
              </FormControl>
              {/* <FormMessage className=''>Enter a valid email adress </FormMessage> */}
            </FormItem>
          )}
        />
        <Button className="my-4">Register</Button>
      </form>
    </Form>
  );
};

export default RegisterForm;
