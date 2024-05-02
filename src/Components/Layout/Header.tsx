import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

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
              href="/customers"
              color="inherit"
              underline="hover"
              sx={{ marginRight: 2 }}
            >
              <Typography>Customers</Typography>
            </Link>
            <Link
              href="/trainings"
              color="inherit"
              underline="hover"
              sx={{ marginRight: 2 }}
            >
              <Typography>Trainings</Typography>
            </Link>
            <Link
              href="/calendar"
              color="inherit"
              underline="hover"
              sx={{ marginRight: 2 }}
            >
              <Typography>Calendar</Typography>
            </Link>
            <Link href="/reports" color="inherit" underline="hover">
              <Typography>Reports</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
