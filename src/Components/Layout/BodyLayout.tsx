import { Box } from "@mui/material";

const BodyLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 2, px: 1 }}>
      {children}
    </Box>
  );
};

export default BodyLayout;
