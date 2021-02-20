import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 8m_R_F6wcjI33he2vs1X1YkmDh86mamMpjp3F_8a7Gs",
  },
});
