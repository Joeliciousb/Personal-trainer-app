import { DialogContent, Stack, TextField } from "@mui/material";
import { customerType } from "../../Types/types";

const CustomerDialogContent = ({
  customer,
  handleTextFieldChange,
}: {
  customer: customerType;
  handleTextFieldChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <DialogContent sx={{ width: "320px" }}>
        <Stack spacing={2} mt={1}>
          <TextField
            label="firstname"
            name="firstname"
            value={customer.firstname}
            onChange={handleTextFieldChange}
          />
          <TextField
            label="lastname"
            name="lastname"
            value={customer.lastname}
            onChange={handleTextFieldChange}
          />
          <TextField
            label="streetaddress"
            name="streetaddress"
            value={customer.streetaddress}
            onChange={handleTextFieldChange}
          />
          <TextField
            label="postcode"
            name="postcode"
            value={customer.postcode}
            onChange={handleTextFieldChange}
          />
          <TextField
            label="city"
            name="city"
            value={customer.city}
            onChange={handleTextFieldChange}
          />
          <TextField
            label="email"
            name="email"
            value={customer.email}
            onChange={handleTextFieldChange}
          />
          <TextField
            label="phone"
            name="phone"
            value={customer.phone}
            onChange={handleTextFieldChange}
          />
        </Stack>
      </DialogContent>
    </>
  );
};

export default CustomerDialogContent;
