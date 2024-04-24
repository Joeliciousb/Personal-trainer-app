import { Box, Snackbar } from "@mui/material";
import React from "react";
import {
  GetTrainingWithCustomerInfoType,
  TrainingType,
} from "../../Types/types";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import TrainingTable from "./TrainingTable";
import {
  deleteTraining,
  fetchTrainings,
  postTraining,
} from "../../api/trainingApi";
import AddTraining from "./AddTraining";
import dayjs from "dayjs";

const TrainingPage = () => {
  const [trainingsData, setTrainingsData] = React.useState<
    GetTrainingWithCustomerInfoType[]
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

  const handleAddTraining = async (training: TrainingType) => {
    const formattedTraining = {
      ...training,
      date: dayjs(training.date).toISOString(),
    };
    const response = await postTraining(formattedTraining);
    if (response?.ok) {
      setSnackbarMsg("Training added successfully");
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
          <AddTraining handleAddTraining={handleAddTraining} />
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
