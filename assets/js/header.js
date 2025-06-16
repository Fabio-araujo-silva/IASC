async function loadHeader() {
  const container = document.getElementById('header-placeholder');
  if (!container) return;
  try {
    const res = await fetch('assets/content.json');
    const data = await res.json();
    let html = '<header><nav>';
    data.header.nav.forEach(item => {
      html += `<a href="${item.href}">${item.text}</a>`;
    });
    html += '</nav></header>';
    const logo = data.header.logo;
    html += `<div class="logo"><a href="${logo.link}" target="_blank"><img src="${logo.src}" alt="${logo.alt}"></a></div>`;
    container.innerHTML = html;
  } catch (err) {
    console.error('Falha ao carregar cabe\u00e7alho', err);
  }
}

document.addEventListener('DOMContentLoaded', loadHeader);
