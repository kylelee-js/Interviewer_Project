import axios from "axios";

export const fetchPool = async () => {
  try {
    const res = await axios.get("/board/pool/");
    console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
