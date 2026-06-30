import axios from "axios";

const API = "https://dummyjson.com/posts";

export const fetchPosts = async () => {
  const response = await axios.get(API);

  return response.data.posts;
};