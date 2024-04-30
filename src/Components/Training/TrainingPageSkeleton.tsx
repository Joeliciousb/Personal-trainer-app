import {
  Box,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const TrainingPageSkeleton = () => {
  return (
    <Box sx={{ mt: 2, width: 900 }}>
      <Skeleton
        variant="rounded"
        sx={{ width: 200, height: 37, mb: 2 }}
      ></Skeleton>
      <Skeleton
        variant="rounded"
        sx={{ width: 200, height: 37, mb: 2 }}
      ></Skeleton>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Date
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Activity
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Duration
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Customer
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Delete
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton
                variant="rounded"
                sx={{ height: 40, width: 120 }}
              ></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton
                variant="rounded"
                sx={{ height: 40, width: 120 }}
              ></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton
                variant="rounded"
                sx={{ height: 40, width: 120 }}
              ></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton
                variant="rounded"
                sx={{ height: 40, width: 120 }}
              ></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton
                variant="rounded"
                sx={{ height: 40, width: 120 }}
              ></Skeleton>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton
                variant="rounded"
                sx={{ height: 40, width: 120 }}
              ></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton
                variant="rounded"
                sx={{ height: 40, width: 120 }}
              ></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton
                variant="rounded"
                sx={{ height: 40, width: 120 }}
              ></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton
                variant="rounded"
                sx={{ height: 40, width: 120 }}
              ></Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton
                variant="rounded"
                sx={{ height: 40, width: 120 }}
              ></Skeleton>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default TrainingPageSkeleton;
