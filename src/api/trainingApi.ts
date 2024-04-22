export const fetchTrainings = async () => {
  try {
    const response = await fetch(
      "https://customerrestservice-personaltraining.rahtiapp.fi/gettrainings"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteTraining = async (trainingId: number) => {
  try {
    const response = await fetch(
      `https://customerrestservice-personaltraining.rahtiapp.fi/api/trainings/${trainingId}`,
      {
        method: "DELETE",
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
