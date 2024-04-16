import { Box } from "@mui/material";
import Header from "./Components/Header";
import ListCustomers from "./Components/ListCustomers";
import ListTrainings from "./Components/ListTrainings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header />
      <Box>
        <BrowserRouter>
          <Routes>
            <Route index element={<ListCustomers />} />
            <Route path="/home" element={<ListCustomers />} />
            <Route path="/trainings" element={<ListTrainings />} />{" "}
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default App;
