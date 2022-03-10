import axios from "axios";

export const getLeetCodeData = async (user_name) => {
  const ENDPOINT = `https://competitive-coding-api.herokuapp.com/api/leetcode/${user_name}`;
  return axios.get(ENDPOINT);
 
};
export const getCodeForcesData = async (user_name) => {
  const ENDPOINT = `https://competitive-coding-api.herokuapp.com/api/codeforces/${user_name}`;
  return axios.get(ENDPOINT);
 
};

// export const getCodeChefData = async (user_name) => {
//   const ENDPOINT = `https://competitive-coding-api.herokuapp.com/api/${platform}/${user_name}`;
//   return axios.get(ENDPOINT);
 
// };

// export const getInterviewBitData = async (user_name) => {
//   const ENDPOINT = `https://competitive-coding-api.herokuapp.com/api/${platform}/${user_name}`;
//   return axios.get(ENDPOINT);
 
// };
