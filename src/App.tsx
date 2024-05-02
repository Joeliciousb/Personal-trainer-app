import { Box } from "@mui/material";
import Header from "./Components/Layout/Header";
import { Routes, Route } from "react-router-dom";
import CustomerPage from "./Components/Customer/CustomerPage";
import TrainingPage from "./Components/Training/TrainingPage";
import CalendarPage from "./Components/Calendar/CalendarPage";
import TrainingChartPage from "./Components/TrainingCharts/TrainingChartPage";
import "./styles.css";

const App = () => {
  return (
    <Box>
      <Header />

      <Routes>
        <Route index element={<CustomerPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/trainings" element={<TrainingPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/reports" element={<TrainingChartPage />} />
      </Routes>
    </Box>
  );
};

export default App;
