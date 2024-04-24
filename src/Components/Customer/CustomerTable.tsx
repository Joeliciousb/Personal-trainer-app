import { Box, Button } from "@mui/material";
import { CustomerGetType } from "../../Types/types";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { ColDef } from "ag-grid-community";
import React from "react";
import EditCustomerDialog from "./EditCustomerDialog";
import { CSVLink } from "react-csv";

const CustomerTable = ({
  customerData,
  handleDeleteCustomer,
  handleEditCustomer,
}: {
  customerData: CustomerGetType[];
  handleDeleteCustomer: (link: string) => void;
  handleEditCustomer: (
    link: string,
    customer: CustomerGetType
  ) => Promise<void>;
}) => {
  const [selectedCustomer, setSelectedCustomer] =
    React.useState<CustomerGetType | null>(null);

  const columnDefs: ColDef[] = [
    { field: "firstname", width: 150 },
    { field: "lastname", width: 150 },
    { field: "streetaddress", width: 175 },
    { field: "postcode", width: 150 },
    { field: "city", width: 150 },
    { field: "email", width: 175 },
    { field: "phone", width: 150 },
    {
      field: "edit",
      width: 125,
      cellRenderer: (params: CustomCellRendererProps) => (
        <Button
          variant="contained"
          size="small"
          onClick={() => setSelectedCustomer(params.data)}
        >
          Edit
        </Button>
      ),
    },
    {
      field: "delete",
      width: 100,
      cellRenderer: (params: CustomCellRendererProps) => (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => {
            if (
              window.confirm(
                `Are you sure you want to delete ${params.data.firstname} ${params.data.lastname}?`
              )
            ) {
              handleDeleteCustomer(params.data._links.self.href);
            }
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  const csvData = customerData.map((customer) => ({
    firstname: customer.firstname,
    lastname: customer.lastname,
    streetaddress: customer.streetaddress,
    postcode: customer.postcode,
    city: customer.city,
    email: customer.email,
    phone: customer.phone,
  }));

  return (
    <Box
      className="ag-theme-material"
      sx={{ width: "100%", height: 500, marginTop: 2 }}
    >
      {selectedCustomer && (
        <EditCustomerDialog
          customer={selectedCustomer}
          handleClose={() => setSelectedCustomer(null)}
          handleEditCustomer={handleEditCustomer}
        />
      )}
      <CSVLink data={csvData} filename={"customers.csv"}>
        <Button variant="outlined" color="info">
          Export to CSV
        </Button>
      </CSVLink>
      <AgGridReact rowData={customerData} columnDefs={columnDefs}></AgGridReact>
    </Box>
  );
};

export default CustomerTable;
