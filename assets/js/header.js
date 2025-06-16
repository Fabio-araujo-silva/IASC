// Injects the site header on pages
const headerHTML = `
<header>
  <nav>
    <a href="#biblioteca">BIBLIOTECA</a>
    <a href="#graduacao">GRADUAÇÃO</a>
    <a href="#pos">PÓS</a>
    <a href="noticias.html">NOTÍCIAS</a>
    <a href="#sobre">SOBRE</a>
  </nav>
</header>
<div class="logo">
  <a href="https://www.usp.br" target="_blank">
    <img src="assets/images/logo.webp" alt="Logo USP">
  </a>
</div>`;

function loadHeader() {
  const container = document.getElementById('header-placeholder');
  if (container) {
    container.innerHTML = headerHTML;
  }
}

document.addEventListener('DOMContentLoaded', loadHeader);
