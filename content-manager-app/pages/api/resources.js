
export default async function(req, res) {
  const API = await fetch('http://localhost:3001/api/resources')
  const data = await API.json()
  res.send(data);
}