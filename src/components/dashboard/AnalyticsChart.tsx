"use client";
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
import data from "@/data/analytics";

const AnalyticsChart = () => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Analytics for this yrear</CardTitle>
          <CardDescription>Views per months</CardDescription>
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
        </CardHeader>
      </Card>
    </>
  );
};

export default AnalyticsChart;
