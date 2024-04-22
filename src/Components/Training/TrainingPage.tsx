import { Box, Snackbar } from "@mui/material";
import React from "react";
import { getTrainingsWithCustomerInfoType } from "../../Types/types";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import TrainingTable from "./TrainingTable";
import { deleteTraining, fetchTrainings } from "../../api/trainingApi";
import AddTraining from "./AddTraining";

const TrainingPage = () => {
  const [trainingsData, setTrainingsData] = React.useState<
    getTrainingsWithCustomerInfoType[]
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [snackbarIsOpen, setSnackbarIsOpen] = React.useState<boolean>(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState<string>("");

  const handleFetchTrainings = async () => {
    setIsLoading(true);
    const data = await fetchTrainings();
    setTrainingsData(data);
    setIsLoading(false);
  };

  const handleDeleteTraining = async (trainingId: number) => {
    const response = await deleteTraining(trainingId);
    if (response?.ok) {
      setSnackbarMsg("Training deleted successfully");
      setSnackbarIsOpen(true);
      handleFetchTrainings();
    } else {
      setSnackbarMsg("An error occured");
      setSnackbarIsOpen(true);
    }
  };

  React.useEffect(() => {
    handleFetchTrainings();
  }, []);

  return (
    <Box sx={{ py: 2, px: 1 }}>
      {isLoading ? (
        <Box>Loading Trainings Skeleton</Box>
      ) : (
        <Box>
          <AddTraining />
          <Snackbar
            open={snackbarIsOpen}
            message={snackbarMsg}
            autoHideDuration={3000}
            onClose={() => setSnackbarIsOpen(false)}
          />
          <TrainingTable
            trainingsData={trainingsData}
            handleDeleteTraining={handleDeleteTraining}
          />
        </Box>
      )}
    </Box>
  );
};

export default TrainingPage;
