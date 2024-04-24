import { Box } from "@mui/material";
import { ResponsiveContainer, XAxis, YAxis, BarChart, Bar } from "recharts";
import { TrainingGetType } from "../../Types/types";
import React from "react";
import { fetchTrainings } from "../../api/trainingApi";

const TrainingChartPage = () => {
  type ActivityDurations = { [activity: string]: number };

  type TrainingChartData = {
    activity: string;
    duration: number;
  };
  const [barChartData, setBarChartData] = React.useState<TrainingChartData[]>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

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
    <Box sx={{ py: 2, px: 1 }}>
      {isLoading ? (
        <Box>Skeleton</Box>
      ) : (
        <ResponsiveContainer height="100%" width="100%">
          <Box>
            <BarChart width={500} height={300} data={barChartData}>
              <XAxis dataKey={"activity"} />
              <YAxis dataKey={"duration"} />
              <Bar dataKey="duration" fill="#8884d8" />
            </BarChart>
          </Box>
        </ResponsiveContainer>
      )}
    </Box>
  );
};

export default TrainingChartPage;
