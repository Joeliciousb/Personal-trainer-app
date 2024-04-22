import { Box, Snackbar } from "@mui/material";
import CustomerTable from "./CustomerTable";
import { customerGetType, customerType } from "../../Types/types";
import React from "react";
import AddCustomer from "./AddCustomer";
import {
  fetchCustomers,
  postCustomer,
  deleteCustomer,
  editCustomer,
} from "../../api/customerApi";

const CustomerPage = () => {
  const [customerData, setCustomerData] = React.useState<customerGetType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [snackbarIsOpen, setSnackbarIsOpen] = React.useState<boolean>(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState<string>("");

  const getCustomers = async () => {
    setIsLoading(true);
    const data = await fetchCustomers();
    setCustomerData(data._embedded.customers);
    setIsLoading(false);
  };

  const handleAddCustomer = async (customer: customerType) => {
    const response = await postCustomer(customer);
    if (response?.ok) {
      setSnackbarMsg("Customer was added successfully");
      setSnackbarIsOpen(true);
      getCustomers();
    }
  };

  const handleDeleteCustomer = async (link: string) => {
    const response = await deleteCustomer(link);
    if (response?.ok) {
      setSnackbarMsg("Customer was deleted successfully");
      setSnackbarIsOpen(true);
      getCustomers();
    }
  };

  const handleEditCustomer = async (
    link: string,
    customer: customerGetType
  ) => {
    const response = await editCustomer(link, customer);
    if (response?.ok) {
      setSnackbarMsg("Customer was updated successfully");
      setSnackbarIsOpen(true);
      getCustomers();
    }
  };

  React.useEffect(() => {
    getCustomers();
  }, []);

  return (
    <Box sx={{ py: 2, px: 1 }}>
      {isLoading ? (
        <Box>Loading skeleton</Box>
      ) : (
        <Box>
          <AddCustomer handleAddCustomer={handleAddCustomer} />
          <Snackbar
            open={snackbarIsOpen}
            message={snackbarMsg}
            autoHideDuration={3000}
            onClose={() => setSnackbarIsOpen(false)}
          />
          <CustomerTable
            customerData={customerData}
            handleDeleteCustomer={handleDeleteCustomer}
            handleEditCustomer={handleEditCustomer}
          />
        </Box>
      )}
    </Box>
  );
};

export default CustomerPage;
