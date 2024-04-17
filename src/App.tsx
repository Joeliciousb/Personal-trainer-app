import { Box } from "@mui/material";
import Header from "./Components/Layout/Header";
import ListTrainings from "./Components/Training/ListTrainings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomerPage from "./Components/Customer/CustomerPage";
const App = () => {
  return (
    <Box>
      <Header />
      <Box>
        <BrowserRouter>
          <Routes>
            <Route index element={<CustomerPage />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/trainings" element={<ListTrainings />} />{" "}
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  );
};

export default App;
