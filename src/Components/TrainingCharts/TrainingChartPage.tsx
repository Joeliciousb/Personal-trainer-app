import { Box, Typography } from "@mui/material";
import { XAxis, YAxis, BarChart, Bar, Cell, Tooltip } from "recharts";
import { TrainingGetType } from "../../Types/types";
import React from "react";
import { fetchTrainings } from "../../api/trainingApi";
import BodyLayout from "../Layout/BodyLayout";
import TrainingChartSkeleton from "./TrainingChartSkeleton";

const TrainingChartPage = () => {
  type ActivityDurations = { [activity: string]: number };

  type TrainingChartData = {
    activity: string;
    duration: number;
  };
  const [barChartData, setBarChartData] = React.useState<TrainingChartData[]>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const colors = [
    "#FF8C00", // Dark Orange
    "#FF1493", // Deep Pink
    "#32CD32", // Lime Green
    "#4169E1", // Royal Blue
    "#9370DB", // Medium Purple
    "#FFD700", // Gold
    "#20B2AA", // Light Sea Green
    "#FF69B4", // Hot Pink
    "#4682B4", // Steel Blue
    "#8A2BE2", // Blue Violet
  ];

  React.useEffect(() => {
    const handleGetTrainings = async () => {
      setIsLoading(true);
      const data = await fetchTrainings();

      const activityDurations: ActivityDurations = {};
      data.map((training: TrainingGetType) => {
        const { activity, duration } = training;
        if (activity in activityDurations) {
          activityDurations[activity] += duration;
        } else {
          activityDurations[activity] = duration;
        }
      });

      const modifiedTrainingData: TrainingChartData[] = Object.keys(
        activityDurations
      ).map((activity) => ({
        activity,
        duration: activityDurations[activity],
      }));
      setBarChartData(modifiedTrainingData);
      setIsLoading(false);
    };
    handleGetTrainings();
  }, []);

  return (
    <BodyLayout>
      {isLoading ? (
        <TrainingChartSkeleton />
      ) : (
        <Box sx={{ mt: 2 }}>
          <Typography sx={{ mb: 1 }}>Training reports</Typography>
          <Typography sx={{ mb: 4 }}>
            Total duration of trainings represented in a barchart
          </Typography>
          <BarChart width={800} height={400} data={barChartData}>
            <XAxis dataKey={"activity"} />
            <YAxis
              label={{
                value: "Duration (minutes)",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip />
            <Bar dataKey="duration">
              {barChartData?.map((_data, index) => (
                <Cell fill={colors[index % 10]} />
              ))}
            </Bar>
          </BarChart>
        </Box>
      )}
    </BodyLayout>
  );
};

export default TrainingChartPage;
