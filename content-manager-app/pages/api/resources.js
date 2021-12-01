import axios from 'axios'
export default async function (req, res) {
  if (req.method === "GET") {

    const API = await fetch('http://localhost:3001/api/resources')
    const data = await API.json()
    res.send(data);
  }
  if (req.method === "POST") {
    const { title, description, link, timeToFinish, priority } = req.body
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send(`Data are missing: ${req.body}`)
    }
    try {
      const axiosRes = await axios.post("http://localhost:3001/api/resources", req.body)
     // return res.send(axiosRes.data)
      return axiosRes
    } catch {
      return status(422).send("Data has cannot be stored!")
    }
  }
}
