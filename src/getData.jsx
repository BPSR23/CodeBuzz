import axios from "axios";

export const getData = async (platform,user_name) => {
  const ENDPOINT = `https://competitive-coding-api.herokuapp.com/api/${platform}/${user_name}`;
  return axios.get(ENDPOINT);
 
};
