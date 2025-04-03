"use client";

import {  useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer,
} from "recharts";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
	CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AnalyticsItem } from "@/types/types";


const AnalyticsChartClient = (data : AnalyticsItem[]|Error) => {
	const [loading, setLoading] = useState(true);


	if (loading) {
		return (
			<Card>
				<CardHeader>
					<CardTitle>Analytics for this year</CardTitle>
					<CardDescription>Views per month</CardDescription>
				</CardHeader>
				<CardContent>
					<Skeleton className="w-full h-[300px] rounded-lg" />
				</CardContent>
			</Card>
		);
	}

    if (data instanceof Error) {
		setLoading(false);
		return (
			<Card>
				<CardHeader>
					<CardTitle>Erreur</CardTitle>
					<CardDescription>
						Impossible de récupérer les données
					</CardDescription>
				</CardHeader>
				<CardContent>
					<p className="text-red-500">{data.message}</p>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Analytics for this year</CardTitle>
				<CardDescription>Views per month</CardDescription>
			</CardHeader>
			<CardContent>
				<div style={{ width: "100%", height: 300 }}>
					<ResponsiveContainer>
						<LineChart width={1100} height={300} data={data}>
							<Line
								type="monotone"
								dataKey="uniqueViews"
								stroke="#6684d8"
							/>
							<CartesianGrid stroke="#ccc" />
							<XAxis dataKey="name" />
							<YAxis />
						</LineChart>
					</ResponsiveContainer>
				</div>
			</CardContent>
		</Card>
	);
};

export default AnalyticsChartClient;
