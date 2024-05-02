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
          <Route path="/" element={<CustomerPage />} />
          <Route path="/customers" element={<CustomerPage />} />
          <Route path="/trainings" element={<TrainingPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/reports" element={<TrainingChartPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
};

export default App;
