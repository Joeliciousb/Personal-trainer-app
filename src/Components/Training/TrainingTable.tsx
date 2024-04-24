import { Box, Button } from "@mui/material";
import { AgGridReact, CustomCellRendererProps } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { ColDef } from "ag-grid-community";
import { GetTrainingWithCustomerInfoType } from "../../Types/types";
import dayjs from "dayjs";
import { CSVLink } from "react-csv";

const TrainingTable = ({
  trainingsData,
  handleDeleteTraining,
}: {
  trainingsData: GetTrainingWithCustomerInfoType[];
  handleDeleteTraining: (trainingId: number) => Promise<void>;
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
                `Are you sure you want to delete ${
                  params.data.activity
                } on ${formatDate(params.data.date)}?`
              )
            ) {
              handleDeleteTraining(params.data.id);
            }
          }}
        >
          Delete
        </Button>
      ),
    },
  ];

  const csvData = trainingsData.map((training) => ({
    date: formatDate(training.date),
    activity: training.activity,
    duration: training.duration,
    customer: training.customer.firstname,
  }));

  return (
    <Box sx={{ marginTop: 2 }}>
      <CSVLink data={csvData} filename={"trainings.csv"}>
        <Button variant="outlined" color="info">
          Export to CSV
        </Button>
      </CSVLink>
      <div className="ag-theme-material" style={{ width: "100%", height: 500 }}>
        <AgGridReact rowData={trainingsData} columnDefs={columnDefs} />
      </div>
    </Box>
  );
};

export default TrainingTable;
