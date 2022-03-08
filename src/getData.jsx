import axios from "axios";

export const getData = async (user_name) => {
  const ENDPOINT = `https://competitive-coding-api.herokuapp.com/api/leetcode/${user_name}`;
  try {
    const response = await axios.get(ENDPOINT);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
