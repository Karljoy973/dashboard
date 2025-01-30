import "@/app/globals.css";
import ThemeToggler from "@/components/ThemeToggler";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-[100vh] flex item-center justify-center relative">
    <div className="absolute bottom-5 right-0"><ThemeToggler /></div>
    {children}
  </div>;
}
