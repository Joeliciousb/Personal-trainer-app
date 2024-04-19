import { Box } from "@mui/material";
import React from "react";
import { getTrainingsWithCustomerInfoType } from "../../Types/types";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import TrainingTable from "./TrainingTable";

const TrainingPage = () => {
  const [trainingsData, setTrainingsData] = React.useState<
    getTrainingsWithCustomerInfoType[]
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchTrainings = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings"
      );
      const data = await response.json();
      setTrainingsData(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchTrainings();
  }, []);

  return (
    <Box sx={{ py: 2, px: 1 }}>
      {isLoading ? (
        <Box>Loading Trainings Skeleton</Box>
      ) : (
        <TrainingTable trainingsData={trainingsData} />
      )}
    </Box>
  );
};

export default TrainingPage;
