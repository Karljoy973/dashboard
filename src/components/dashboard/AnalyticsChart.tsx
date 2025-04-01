import { Suspense } from "react";
import AnalyticsChartServer from "./AnalyticsChart/Server";

const AnalyticsChart = () => {
	return (
		<div>
			<h1 className="text-2xl font-bold">Dashboard</h1>
			<Suspense fallback={<p>Chargement des statistiques...</p>}>
				<AnalyticsChartServer />
			</Suspense>
		</div>
	);
};

export default AnalyticsChart;
