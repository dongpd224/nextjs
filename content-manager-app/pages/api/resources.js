import axios from "axios";
export default async function (req, res) {
  if (req.method === "GET") {
    const dataRes = await fetch("http://localhost:3001/api/resources");
    const data = await dataRes.json();
    return res.send(data);
  }
  if (req.method === "POST" || req.method === "PATCH") {
    const { id, title, description, link, timeToFinish, priority } = req.body;

    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send("Data are missing!");
    }
    const url = () => {
      if (req.method === "POST") {
        return "http://localhost:3001/api/resources"
      }
      if (req.method === "PATCH") return `http://localhost:3001/api/resources/${id}`
    }
    try {

      const axiosRes = await axios[req.method.toLowerCase()](url(), req.body);
      return res.send("Data has been updated");

    } catch {
      return res.status(422).send("Cannot update the data");
    }
  }
}