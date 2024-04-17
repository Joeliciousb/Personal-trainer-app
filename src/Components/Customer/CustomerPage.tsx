import { Box } from "@mui/material";
import CustomerTable from "./CustomerTable";
import { customerGetType } from "../../Types/types";
import React from "react";

const CustomerPage = () => {
  const [customerData, setCustomerData] = React.useState<customerGetType[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchCustomers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://customerrestservice-personaltraining.rahtiapp.fi/api/customers"
      );
      const data = await response.json();
      setCustomerData(data._embedded.customers);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Box>Loading skeleton</Box>
      ) : (
        <CustomerTable customerData={customerData} />
      )}
    </Box>
  );
};

export default CustomerPage;
