import { Box } from "@mui/material";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { ColDef } from "ag-grid-community";
import { getTrainingsWithCustomerInfoType } from "../../Types/types";
import dayjs from "dayjs";

const TrainingTable = ({
  trainingsData,
}: {
  trainingsData: getTrainingsWithCustomerInfoType[];
}) => {
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
    <Box className="ag-theme-material" style={{ width: "100%", height: 500 }}>
      <AgGridReact
        rowData={trainingsData}
        columnDefs={columnDefs}
      ></AgGridReact>
    </Box>
  );
};

export default TrainingTable;
