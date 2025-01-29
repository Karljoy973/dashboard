import "@/app/globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="p-5 w-full md:max-w-[1140px]">{children}</div>;
}
