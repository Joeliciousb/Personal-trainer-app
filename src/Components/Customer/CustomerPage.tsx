import { Box, Snackbar } from "@mui/material";
import CustomerTable from "./CustomerTable";
import { CustomerGetType, CustomerType } from "../../Types/types";
import React from "react";
import AddCustomer from "./AddCustomer";
import {
  fetchCustomers,
  postCustomer,
  deleteCustomer,
  editCustomer,
} from "../../api/customerApi";
import BodyLayout from "../Layout/BodyLayout";
import CustomerPageSkeleton from "./CustomerPageSkeleton";

const CustomerPage = () => {
  const [customerData, setCustomerData] = React.useState<CustomerGetType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [snackbarIsOpen, setSnackbarIsOpen] = React.useState<boolean>(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState<string>("");

  const getCustomers = async () => {
    setIsLoading(true);
    const data = await fetchCustomers();
    setCustomerData(data._embedded.customers);
    setIsLoading(false);
  };

  const handleAddCustomer = async (customer: CustomerType) => {
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
    customer: CustomerGetType
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
    <BodyLayout>
      {isLoading ? (
        <CustomerPageSkeleton />
      ) : (
        <Box sx={{ width: "92%" }}>
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
    </BodyLayout>
  );
};

export default CustomerPage;
