export default function handler(req, res) {
  res.status(200).json({
    id: Date.now(),
    produto: "Pedido teste",
    valor: 0.10,
    status: "aguardando_pagamento"
  });
}
