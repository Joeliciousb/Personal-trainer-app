import { Box } from "@mui/material";
import Header from "./Components/Layout/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerPage from "./Components/Customer/CustomerPage";
import TrainingPage from "./Components/Training/TrainingPage";
import "./styles.css";
import CalendarPage from "./Components/Calendar/CalendarPage";

const App = () => {
  return (
    <Box>
      <Header />
      <Box>
        <BrowserRouter>
          <Routes>
            <Route index element={<CustomerPage />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/trainings" element={<TrainingPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
};

export default App;
