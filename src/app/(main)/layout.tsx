import type { Metadata } from "next";
import "@/app/globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
	title: "A Cool Looking Dashboard",
	description: "With this you have the best way to check your analytics !",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex">
			<div className="hidden md:block h-[100vh] w-[300px]">
				<Sidebar />
			</div>
			<div className="p-5 w-full md:max-w-[1140px]">{children}</div>
		</div>
	);
}
