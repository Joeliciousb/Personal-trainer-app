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

const CustomerPageSkeleton = () => {
  return (
    <Box sx={{ mt: 2, width: 1340 }}>
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
                Firstname
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Lastname
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Streetaddress
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Postcode
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                City
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Email
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Phone
              </Typography>
            </TableCell>
            <TableCell>
              <Typography variant="subtitle2" color="grey">
                Edit
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

export default CustomerPageSkeleton;
