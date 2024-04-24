import { Autocomplete, DialogContent, Stack, TextField } from "@mui/material";
import { CustomerGetType, TrainingType } from "../../Types/types";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const TrainingDialogContent = ({
  customers,
  training,
  setTraining,
}: {
  customers: CustomerGetType[];
  training: TrainingType;
  setTraining: React.Dispatch<React.SetStateAction<TrainingType>>;
}) => {
  const handleTextFieldChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTraining({ ...training, [event.target.name]: event.target.value });
  };

  const handleAutocompleteChange = (value: CustomerGetType | null) => {
    if (value !== null) {
      setTraining({ ...training, customer: value._links.self.href });
    }
  };
  return (
    <>
      <DialogContent sx={{ width: "320px" }}>
        <Stack spacing={2} mt={1}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={training.date}
              onChange={(newValue) =>
                setTraining({ ...training, date: newValue })
              }
            />
          </LocalizationProvider>
          <TextField
            label="Duration"
            name="duration"
            onChange={handleTextFieldChange}
            value={training.duration}
          />
          <TextField
            label="Activity"
            name="activity"
            onChange={handleTextFieldChange}
            value={training.activity}
          />
          <Autocomplete
            options={customers}
            getOptionLabel={(option) =>
              `${option.firstname} ${option.lastname}`
            }
            renderInput={(params) => (
              <TextField {...params} label="Customer" name="customer" />
            )}
            onChange={(_event, value) => {
              handleAutocompleteChange(value);
            }}
          />
        </Stack>
      </DialogContent>
    </>
  );
};
export default TrainingDialogContent;
