# Tech & Code Summit 2026

Projeto acadêmico de portal para um evento fictício de tecnologia e inovação.

## Requisitos
- Node.js instalado
- Navegador atualizado

## Como executar
1. Extraia a pasta do projeto.
2. Abra o terminal dentro da pasta `tech_code_summit`.
3. Instale a dependência:
   ```bash
   npm install
   ```
4. Inicie o servidor:
   ```bash
   npm start
   ```
5. Acesse: http://localhost:2000

O servidor está configurado para usar **a porta 2000**.

## Integração Frontend e Backend
- `GET /api/status`: verifica se o servidor está ativo.
- `GET /api/programacao`: entrega a programação para o frontend.
- `POST /api/inscricoes`: recebe os dados do formulário e cria uma inscrição demonstrativa.
- `GET /api/inscricoes`: informa a quantidade de inscrições feitas durante a execução.

As inscrições ficam armazenadas em memória e são apagadas quando o servidor é reiniciado. Não existe cobrança real.

## Antes de entregar
- Atualize a seção "Quem Somos" em `public/index.html` com nomes, RAs, fotos e conhecimentos reais do grupo.
- Confira data, local e informações fictícias do evento com o professor.
- Teste o site em `http://localhost:2000`.

## Publicar no GitHub
Crie um repositório público no GitHub e envie os arquivos desta pasta. Não envie a pasta `node_modules`.
