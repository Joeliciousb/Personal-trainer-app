import { CustomerGetType, CustomerType } from "../Types/types";

const API_BASE_URL =
  "https://customerrestservice-personaltraining.rahtiapp.fi/api/customers";

export const fetchCustomers = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching customers:", error);
    throw error;
  }
};

export const postCustomer = async (customer: CustomerType) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(customer),
    });
    return response;
  } catch (error) {
    console.error("Error adding customer:", error);
    throw error;
  }
};

export const deleteCustomer = async (link: string) => {
  try {
    const response = await fetch(link, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.error("Error deleting customer:", error);
    throw error;
  }
};

export const editCustomer = async (link: string, customer: CustomerGetType) => {
  try {
    const response = await fetch(link, {
      method: "PUT",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(customer),
    });
    return response;
  } catch (error) {
    console.error("Error updating customer:", error);
    throw error;
  }
};
