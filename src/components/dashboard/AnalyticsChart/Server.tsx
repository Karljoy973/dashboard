import { ANALYTICS, API_BASE_PATH } from "@/constants";
import AnalyticsChartClient from "./Client";
import { AnalyticsItem } from "@/types/types";

const fetchAnalytics = async (): Promise<AnalyticsItem[] | Error> => {
	try {
		const res = await fetch(`${API_BASE_PATH}${ANALYTICS}`);

		if (res.ok) {
			const data = await res.json();
			console.log(data);
			return data;
		} else {
			const errorText = res.statusText;
			console.error("API Error Response:", errorText);
			return new Error(`Erreur: ${res.status} - ${errorText}`);
		}
	} catch (err) {
		console.error("Fetch error:", err);
		return new Error(`Erreur: API Error Response`);
	}
};

const AnalyticsChartServer = async () => {
	const data = await fetchAnalytics();
	return <AnalyticsChartClient {...data} />;
};

export default AnalyticsChartServer;
