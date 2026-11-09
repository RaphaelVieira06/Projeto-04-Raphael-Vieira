async function carregarProgramacao() {
  const lista = document.getElementById("lista-programacao");
  try {
    const resposta = await fetch("/api/programacao");
    const dados = await resposta.json();
    lista.innerHTML = "";
    dados.forEach(item => {
      const linha = document.createElement("div");
      linha.className = "agenda-item";
      linha.innerHTML = `<strong>${item.horario}</strong>
        <div><h3>${item.titulo}</h3><p>${item.local}</p></div>
        <span class="tipo">${item.tipo}</span>`;
      lista.appendChild(linha);
    });
  } catch (erro) {
    lista.innerHTML = "<p>Não foi possível carregar a programação. Verifique se o servidor está ligado.</p>";
  }
}

document.getElementById("form-inscricao").addEventListener("submit", async function(event) {
  event.preventDefault();
  const mensagem = document.getElementById("mensagem-form");
  const dados = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    ingresso: document.getElementById("ingresso").value
  };

  try {
    const resposta = await fetch("/api/inscricoes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados)
    });
    const resultado = await resposta.json();
    mensagem.textContent = resultado.mensagem;
    if (resposta.ok) this.reset();
  } catch (erro) {
    mensagem.textContent = "Erro ao enviar. Confira se o servidor está funcionando.";
  }
});

carregarProgramacao();