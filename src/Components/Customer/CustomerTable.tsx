import { Box, Button } from "@mui/material";
import { customerGetType } from "../../Types/types";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { ColDef } from "ag-grid-community";
import React from "react";
import EditCustomerDialog from "./EditCustomerDialog";

const CustomerTable = ({
  customerData,
  handleDeleteCustomer,
  editCustomer,
}: {
  customerData: customerGetType[];
  handleDeleteCustomer: (link: string) => void;
  editCustomer: (link: string, customer: customerGetType) => Promise<void>;
}) => {
  const [selectedCustomer, setSelectedCustomer] =
    React.useState<customerGetType | null>(null);

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
                `Are you sure you want to delete  ${params.data.firstname} ${params.data.lastname}?`
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
  return (
    <Box className="ag-theme-material" style={{ width: "100%", height: 500 }}>
      {selectedCustomer && (
        <EditCustomerDialog
          customer={selectedCustomer}
          handleClose={() => setSelectedCustomer(null)}
          editCustomer={editCustomer}
        />
      )}
      <AgGridReact rowData={customerData} columnDefs={columnDefs}></AgGridReact>
    </Box>
  );
};

export default CustomerTable;
