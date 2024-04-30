import { Box, Skeleton } from "@mui/material";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import React from "react";
import moment from "moment";
import { fetchTrainings } from "../../api/trainingApi";
import { GetTrainingWithCustomerInfoType } from "../../Types/types";
import BodyLayout from "../Layout/BodyLayout";

const localizer = dayjsLocalizer(dayjs);

type EventDataType = { id: number; start: Date; end: Date; title: string };

const CalendarPage = () => {
  const [events, setEvents] = React.useState<EventDataType[]>();
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleFetchTrainings = async () => {
    setIsLoading(true);
    const data: GetTrainingWithCustomerInfoType[] = await fetchTrainings();
    const formattedData = data.map((training) => {
      return {
        id: training.id,
        start: moment(training.date).toDate(),
        end: moment(training.date).add(training.duration, "minutes").toDate(),
        title: training.activity,
      };
    });
    setEvents(formattedData);
    setIsLoading(false);
  };

  React.useEffect(() => {
    handleFetchTrainings();
  }, []);

  return (
    <BodyLayout>
      {isLoading ? (
        <Skeleton variant="rectangular" width={1090} height={650} />
      ) : (
        <Box sx={{ height: 650, width: "75%" }}>
          <Calendar
            events={events}
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
          ></Calendar>
        </Box>
      )}
    </BodyLayout>
  );
};

export default CalendarPage;
