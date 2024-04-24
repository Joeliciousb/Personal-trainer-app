import React from "react";
import { CustomerGetType } from "../../Types/types";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import CustomerDialogContent from "./CustomerDialogContent";

const EditCustomerDialog = ({
  customer,
  handleClose,
  handleEditCustomer,
}: {
  customer: CustomerGetType;
  handleClose: () => void;
  handleEditCustomer: (
    link: string,
    customer: CustomerGetType
  ) => Promise<void>;
}) => {
  const [updatedCustomer, setUpdatedCustomer] =
    React.useState<CustomerGetType>(customer);

  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUpdatedCustomer({
      ...updatedCustomer,
      [event.target.name]: event.target.value,
    });
  };

  const handleSave = () => {
    handleEditCustomer(customer._links.self.href, updatedCustomer);
    handleClose();
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Edit customer</DialogTitle>
      <CustomerDialogContent
        customer={updatedCustomer}
        handleTextFieldChange={handleTextFieldChange}
      />
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditCustomerDialog;
