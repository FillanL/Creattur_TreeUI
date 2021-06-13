import axios from "axios";
export default class api {
  static fetcher = async (request) => {
    const response = await axios.post(process.env.NEXT_PUBLIC_BaseURL, request);
    if (response.status === 200) return response.data.data.getProfileInfo;
    return null;
  };
}