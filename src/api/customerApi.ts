import { customerGetType, customerType } from "../Types/types";

export const fetchCustomers = async () => {
  try {
    const response = await fetch(
      "https://customerrestservice-personaltraining.rahtiapp.fi/api/customers"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const postCustomer = async (customer: customerType) => {
  try {
    const response = await fetch(
      "https://customerrestservice-personaltraining.rahtiapp.fi/api/customers",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(customer),
      }
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const deleteCustomer = async (link: string) => {
  try {
    const response = await fetch(link, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

export const editCustomer = async (link: string, customer: customerGetType) => {
  try {
    const response = await fetch(link, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(customer),
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};
