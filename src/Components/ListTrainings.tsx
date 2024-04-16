import { Box } from "@mui/material";
import React from "react";
import { customerGetType } from "../Types/types";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css"; // Material Design theme
import { ColDef } from "ag-grid-community";

const ListTrainings = () => {
  const [trainingsData, setTrainingsData] = React.useState<customerGetType[]>(
    []
  );

  const fetchTrainingsData = async () => {
    try {
      const response = await fetch(
        "https://customerrestservice-personaltraining.rahtiapp.fi/api/customers"
      );
      const data = await response.json();
      setTrainingsData(data._embedded.customers);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    fetchTrainingsData();
  }, []);

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
    <Box>
      <Box className="ag-theme-material" style={{ width: "100%", height: 500 }}>
        <AgGridReact
          rowData={trainingsData}
          columnDefs={columnDefs}
        ></AgGridReact>
      </Box>
    </Box>
  );
};

export default ListTrainings;
