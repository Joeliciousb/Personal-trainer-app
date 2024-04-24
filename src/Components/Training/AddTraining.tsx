import { Box, Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { fetchCustomers } from "../../api/customerApi";
import React from "react";
import { CustomerGetType, TrainingType } from "../../Types/types";
import TrainingDialogContent from "./TrainingDialogContent";
import dayjs from "dayjs";

const AddTraining = ({
  handleAddTraining,
}: {
  handleAddTraining: (training: TrainingType) => void;
}) => {
  const createNewTraining = () => {
    return {
      date: dayjs(),
      duration: "",
      activity: "",
      customer: "",
    };
  };

  const [customerData, setCustomerData] = React.useState<CustomerGetType[]>();
  const [newTraining, setNewTraining] = React.useState<TrainingType>(
    createNewTraining()
  );
  const [addTrainingDialogIsOpen, setAddTrainingDialogIsOpen] =
    React.useState<boolean>(false);

  const getCustomers = async () => {
    if (customerData === undefined) {
      const data = await fetchCustomers();
      setCustomerData(data._embedded.customers);
    }
    setNewTraining(createNewTraining());
    setAddTrainingDialogIsOpen(true);
  };

  return (
    <Box>
      <Button variant="contained" onClick={getCustomers}>
        Add training
      </Button>
      {customerData && (
        <Dialog open={addTrainingDialogIsOpen}>
          <DialogTitle>Add training</DialogTitle>
          <TrainingDialogContent
            customers={customerData}
            training={newTraining}
            setTraining={setNewTraining}
          />
          <DialogActions>
            <Button onClick={() => setAddTrainingDialogIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => handleAddTraining(newTraining)}>Save</Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default AddTraining;
