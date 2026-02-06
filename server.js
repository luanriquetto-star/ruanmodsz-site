const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// rota principal
app.get("/", (req, res) => {
  res.send("API RUAN MODSZ ONLINE 🚀");
});

// 🔥 ROTA DO STATUS (ESSA É A QUE FALTAVA)
app.get("/status", (req, res) => {
  res.json({
    status: "online",
    api: "RUAN MODSZ",
    servidor: "OK",
    timestamp: new Date()
  });
});

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});
