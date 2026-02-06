export default function handler(req, res) {
  res.status(200).json({
    status: "online",
    api: "RUAN MODSZ",
    servidor: "OK",
    plataforma: "Vercel"
  });
}
