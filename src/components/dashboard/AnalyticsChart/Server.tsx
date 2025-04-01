import AnalyticsChartClient from "./Client";
import { ANALYTICS_ENDPOINT, API_BASE_PATH } from "@/constants";
import { AnalyticsItem } from "@/types/types";

const fetchAnalytics = async (): Promise<AnalyticsItem[] | Error> => {
	try {
		const [res] = await Promise.allSettled([fetch(`${API_BASE_PATH}${ANALYTICS_ENDPOINT}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
            },
            cache: "no-store"
		})]) 

		if (res.status == 'fulfilled') {
            const data = await res.value.json()
            console.log(data)
            return data
        }
        
        else {
            const errorText = await res.reason;
            console.error("API Error Response:", errorText);
            return new Error(`Erreur: ${res.status} - ${errorText}`)
        }
	} catch (err) {
		console.error("Fetch error:", err);
		return new Error(`Erreur: API Error Response`)
	}
};

const AnalyticsChartServer = async () => {
    const data = await fetchAnalytics();
    return <AnalyticsChartClient {...data} />;
};

export default AnalyticsChartServer;