import axios from "axios";
 
async function activeresource(req, res) {
  const axiosRes = await axios.get(
    `${process.env.URL_API}/resource/activeresource`
  );
  const resource = axiosRes.data;
  return res.send(resource);
};

export default activeresource;