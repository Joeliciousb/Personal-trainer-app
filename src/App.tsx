import { Box } from "@mui/material";
import Header from "./Components/Layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerPage from "./Components/Customer/CustomerPage";
import TrainingPage from "./Components/Training/TrainingPage";
import "./styles.css";
import CalendarPage from "./Components/Calendar/CalendarPage";
import TrainingChartPage from "./Components/TrainingCharts/TrainingChartPage";

const App = () => {
  return (
    <Box>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Personal-trainer-app/" element={<CustomerPage />} />
          <Route
            path="/Personal-trainer-app/customers"
            element={<CustomerPage />}
          />
          <Route
            path="/Personal-trainer-app/trainings"
            element={<TrainingPage />}
          />
          <Route
            path="/Personal-trainer-app/calendar"
            element={<CalendarPage />}
          />
          <Route
            path="/Personal-trainer-app/reports"
            element={<TrainingChartPage />}
          />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
