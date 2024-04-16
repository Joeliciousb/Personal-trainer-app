import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box>
      <AppBar position="static" color="secondary">
        <Toolbar sx={{ width: "100%" }}>
          <Typography variant="h6">Personal trainer app</Typography>
          <Box display="flex">
            <Link href="/home" color="inherit" underline="hover">
              <Typography>home</Typography>
            </Link>
            <Link href="/trainings" color="inherit" underline="hover">
              <Typography>trainings</Typography>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
