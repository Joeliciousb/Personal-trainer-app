import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ width: "100%", height: "80px" }}>
          <Typography variant="h6" sx={{ marginRight: 2 }}>
            Personal trainer app
          </Typography>
          <Box display="flex">
            <Link
              to="/customers"
              style={{
                marginRight: "12px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography>Customers</Typography>
            </Link>
            <Link
              to="/trainings"
              style={{
                marginRight: "12px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography>Trainings</Typography>
            </Link>
            <Link
              to="/calendar"
              style={{
                marginRight: "12px",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Typography>Calendar</Typography>
            </Link>
            <Link
              to="/reports"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography>Reports</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
