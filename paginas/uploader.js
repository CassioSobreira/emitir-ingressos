// uploader.js - CÓDIGO CORRIGIDO E COMPLETO

// --- Bloco 1: Lógica do Drag and Drop (sem alterações) ---
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('avatar');
const dropAreaContent = document.getElementById('drop-area-content');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});
function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}
['dragenter', 'dragover'].forEach(eventName => {
  dropArea.addEventListener(eventName, () => dropArea.classList.add('drag-over'), false);
});
['dragleave', 'drop'].forEach(eventName => {
  dropArea.addEventListener(eventName, () => dropArea.classList.remove('drag-over'), false);
});
dropArea.addEventListener('drop', handleDrop, false);
function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  handleFiles(files);
}
fileInput.addEventListener('change', function() {
  handleFiles(this.files);
});

function handleFiles(files) {
  const file = files[0];
  if (file && file.type.startsWith('image/')) {
    showPreview(file);
  } else {
    alert("Por favor, selecione um arquivo de imagem (JPG ou PNG).");
  }
}

function showPreview(file) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = function() {
    dropAreaContent.innerHTML = '';
    const img = document.createElement('img');
    img.src = reader.result;
    img.id = 'image-preview';
    dropAreaContent.appendChild(img);
  }
}

// --- Bloco 2: Lógica de Envio do Formulário (NOVO E CORRIGIDO) ---
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
  // 1. Tenta encontrar a imagem de pré-visualização
  const imagePreview = document.getElementById('image-preview');

  // 2. Se uma imagem foi pré-visualizada, salva seus dados
  if (imagePreview) {
    // sessionStorage é uma área de armazenamento temporário do navegador
    sessionStorage.setItem('userAvatar', imagePreview.src);
  } else {
    // Se nenhuma imagem foi enviada, limpa qualquer imagem antiga que possa estar salva
    sessionStorage.removeItem('userAvatar');
  }

  // O formulário continuará seu envio normalmente após este código rodar.
  // Não precisamos mais do e.preventDefault() aqui.
});