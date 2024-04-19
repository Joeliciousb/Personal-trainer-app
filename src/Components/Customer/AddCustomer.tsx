import { Box, Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import React from "react";
import { customerType } from "../../Types/types";
import CustomerDialogContent from "./CustomerDialogContent";

const AddCustomer = ({
  handleAddCustomer,
}: {
  handleAddCustomer: (customer: customerType) => Promise<void>;
}) => {
  const [addCustomerDialogIsOpen, setAddCustomerDialogIsOpen] =
    React.useState<boolean>(false);

  const [newCustomer, setNewCustomer] = React.useState<customerType>({
    firstname: "",
    lastname: "",
    streetaddress: "",
    postcode: "",
    city: "",
    email: "",
    phone: "",
  });

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewCustomer({ ...newCustomer, [event.target.name]: event.target.value });
  };

  return (
    <Box>
      <Button
        variant="contained"
        onClick={() => setAddCustomerDialogIsOpen(true)}
      >
        Add customer
      </Button>
      <Dialog
        open={addCustomerDialogIsOpen}
        onClose={() => setAddCustomerDialogIsOpen(false)}
      >
        <DialogTitle>Add customer</DialogTitle>
        <CustomerDialogContent
          customer={newCustomer}
          handleTextFieldChange={handleTextFieldChange}
        />
        <DialogActions>
          <Button onClick={() => setAddCustomerDialogIsOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => handleAddCustomer(newCustomer)}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AddCustomer;
