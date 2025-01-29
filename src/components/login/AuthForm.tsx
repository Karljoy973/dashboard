import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./SignInForm";
import LogInForm from "./LogInForm";

const AuthForm = () => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signIn">SignIn</TabsTrigger>
        <TabsTrigger value="logIn">LogIn</TabsTrigger>
      </TabsList>
      <TabsContent value="signIn">
        <SignInForm/>
      </TabsContent>
      <TabsContent value="logIn"><LogInForm /></TabsContent>
    </Tabs>
  );
};

export default AuthForm;
