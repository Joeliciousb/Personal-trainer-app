import { Box, Skeleton } from "@mui/material";

const TrainingChartSkeleton = () => {
  return (
    <Box>
      <Box display="flex" sx={{ marginTop: 20, alignItems: "baseline" }}>
        <Skeleton
          variant="rounded"
          sx={{ height: 300, width: 5, marginRight: 1 }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{ height: 280, width: 70, marginRight: 3 }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{ height: 180, width: 70, marginRight: 3 }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{ height: 220, width: 70, marginRight: 3 }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{ height: 150, width: 70, marginRight: 3 }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{ height: 200, width: 70, marginRight: 3 }}
        ></Skeleton>
        <Skeleton
          variant="rounded"
          sx={{ height: 250, width: 70, marginRight: 3 }}
        ></Skeleton>
      </Box>
      <Skeleton variant="rounded" sx={{ height: 5, width: 570 }}></Skeleton>
    </Box>
  );
};

export default TrainingChartSkeleton;
