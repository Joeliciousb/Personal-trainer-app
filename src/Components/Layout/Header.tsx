import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ width: "100%" }}>
          <Typography variant="h6">Personal trainer app</Typography>
          <Box display="flex">
            <Link href="/customers" color="inherit" underline="hover">
              <Typography>Customers</Typography>
            </Link>
            <Link href="/trainings" color="inherit" underline="hover">
              <Typography>Trainings</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;