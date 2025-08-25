// script.js - CÓDIGO ATUALIZADO E COMPLETO

// 1. Pegar os parâmetros da URL
const urlParams = new URLSearchParams(window.location.search);
const nome = urlParams.get('nomeCompleto');
const email = urlParams.get('email');
const github = urlParams.get('github');

// 2. Selecionar os elementos HTML
const h1NomeUsuario = document.getElementById('h1-nome-usuario');
const confirmEmail = document.getElementById('confirm-email');
const ticketAvatar = document.getElementById('ticket-avatar');
const ticketNome = document.getElementById('ticket-nome');
const ticketGithub = document.getElementById('ticket-github');
const ticketNumberElement = document.getElementById('ticket-number');

// 3. Atualizar o conteúdo de texto
h1NomeUsuario.textContent = nome;
confirmEmail.textContent = email;
ticketNome.textContent = nome;
ticketGithub.textContent = '@' + github;
ticketAvatar.alt = `Avatar de ${nome}`;

// 4. Lógica para definir o Avatar (ATUALIZADO)
// Primeiro, tenta carregar o avatar do sessionStorage
const userAvatarData = sessionStorage.getItem('userAvatar');

if (userAvatarData) {
  // Se encontrou uma imagem do upload, usa ela
  ticketAvatar.src = userAvatarData;
} else if (github) {
  // Se não, tenta usar a imagem do GitHub como alternativa
  ticketAvatar.src = `https://github.com/${github}.png`;
} else {
    // Se não tem nenhum dos dois, usa um caminho para uma imagem padrão
    ticketAvatar.src = 'images/avatar-padrao.png'; // Crie uma imagem padrão se quiser
}

// 5. Gerar número de ingresso aleatório
const numeroAleatorio = Math.floor(Math.random() * 100000);
const numeroFormatado = String(numeroAleatorio).padStart(5, '0');
ticketNumberElement.textContent = `#${numeroFormatado}`;