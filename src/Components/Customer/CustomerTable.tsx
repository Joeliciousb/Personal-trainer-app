import { Box } from "@mui/material";
import { customerGetType } from "../../Types/types";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { ColDef } from "ag-grid-community";

const CustomerTable = ({
  customerData,
}: {
  customerData: customerGetType[];
}) => {
  const columnDefs: ColDef[] = [
    { field: "firstname" },
    { field: "lastname" },
    { field: "streetaddress" },
    { field: "postcode" },
    { field: "city" },
    { field: "email" },
    { field: "phone" },
  ];
  return (
    <Box className="ag-theme-material" style={{ width: "100%", height: 500 }}>
      <AgGridReact rowData={customerData} columnDefs={columnDefs}></AgGridReact>
    </Box>
  );
};

export default CustomerTable;
