const express = require("express");
const path = require("path");

const app = express();
const PORT = 2000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const inscricoes = [];

const programacao = [
  { horario: "08:30", titulo: "Credenciamento e café de boas-vindas", tipo: "Recepção", local: "Hall principal" },
  { horario: "09:30", titulo: "A tecnologia que está mudando o mundo", tipo: "Palestra", local: "Palco Innovation" },
  { horario: "10:30", titulo: "Inteligência Artificial na prática", tipo: "Palestra", local: "Palco Innovation" },
  { horario: "11:30", titulo: "Desenvolvimento web do zero ao deploy", tipo: "Workshop", local: "Sala Code" },
  { horario: "12:30", titulo: "Intervalo para almoço", tipo: "Intervalo", local: "Praça de alimentação" },
  { horario: "14:00", titulo: "Aplicativos e experiências mobile", tipo: "Palestra", local: "Palco Connect" },
  { horario: "15:00", titulo: "Internet das Coisas e cidades inteligentes", tipo: "Minicurso", local: "Sala Maker" },
  { horario: "16:30", titulo: "Carreira em tecnologia: primeiros passos", tipo: "Bate-papo", local: "Palco Connect" },
  { horario: "17:30", titulo: "Encerramento e networking", tipo: "Networking", local: "Hall principal" }
];

app.get("/api/status", (req, res) => {
  res.json({ ok: true, evento: "Tech & Code Summit", porta: PORT });
});

app.get("/api/programacao", (req, res) => {
  res.json(programacao);
});

app.get("/api/inscricoes", (req, res) => {
  res.json({ total: inscricoes.length });
});

app.post("/api/inscricoes", (req, res) => {
  const { nome, email, ingresso } = req.body;

  if (!nome || !email || !ingresso) {
    return res.status(400).json({ mensagem: "Preencha nome, e-mail e tipo de ingresso." });
  }

  const novaInscricao = {
    id: inscricoes.length + 1,
    nome: nome.trim(),
    email: email.trim(),
    ingresso,
    data: new Date().toLocaleString("pt-BR")
  };

  inscricoes.push(novaInscricao);
  res.status(201).json({
    mensagem: "Inscrição realizada com sucesso! Este é um credenciamento demonstrativo.",
    inscricao: novaInscricao
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Tech & Code Summit rodando em http://localhost:${PORT}`);
});