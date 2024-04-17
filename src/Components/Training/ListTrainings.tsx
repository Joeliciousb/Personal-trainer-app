import { Box } from "@mui/material";
import React from "react";
import { getTrainingsWithCustomerInfoType } from "../../Types/types";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { ColDef } from "ag-grid-community";
import dayjs from "dayjs";

const ListTrainings = () => {
  const [trainingsData, setTrainingsData] = React.useState<
    getTrainingsWithCustomerInfoType[]
  >([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchTrainings = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings"
      );
      const data = await response.json();
      setTrainingsData(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchTrainings();
  }, []);

  const formatDate = (dateString: string) => {
    return dayjs(dateString).format("DD.MM.YYYY HH:mm");
  };

  const columnDefs: ColDef[] = [
    { field: "date", valueGetter: (params) => formatDate(params.data.date) },
    { field: "activity" },
    { field: "duration" },
    {
      headerName: "Customer",
      valueGetter: (params) => params.data.customer.firstname,
    },
  ];

  return (
    <Box>
      {isLoading ? (
        <Box>Loading Skeleton</Box>
      ) : (
        <Box
          className="ag-theme-material"
          style={{ width: "100%", height: 500 }}
        >
          <AgGridReact
            rowData={trainingsData}
            columnDefs={columnDefs}
          ></AgGridReact>
        </Box>
      )}
    </Box>
  );
};

export default ListTrainings;
