import { trainingPostType } from "../Types/types";

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

export const postTraining = async (training: trainingPostType) => {
  try {
    const response = await fetch(
      "https://customerrestservice-personaltraining.rahtiapp.fi/api/trainings",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(training),
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
