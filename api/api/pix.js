export default function handler(req, res) {
  res.status(200).json({
    chave_pix: "adbe80ca-0439-4b2e-8968-eeb8d8381270",
    valor: "0.10",
    nome: "RUAN MODSZ",
    descricao: "Pedido teste R$0,10"
  });
}
