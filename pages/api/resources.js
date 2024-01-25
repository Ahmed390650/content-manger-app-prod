import axios from "axios";

export default async function resources(req, res) {
  if (req.method === "GET") {
    return res.send("data");
  }
  if (req.method === "POST" || req.method === "PATCH") {
    const { id, title, description, link, timeToFinish, priority } = req.body;

    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data are missing!");
    }
    const url = req.method === "POST" ? "new" : `${id}/edit`;
    try {
      const postFetch = await axios[`${req.method}`.toLowerCase()](
        `${process.env.URL_API}/resource/` + url,
        req.body
      )
      return res.send(postFetch.data);
    } catch  {
      return res.status(422).send("Data can not be stored!");
    }
  }
}
