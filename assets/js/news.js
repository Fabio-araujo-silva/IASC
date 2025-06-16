async function loadNews() {
  const container = document.getElementById('news-cards');
  if (!container) return;
  try {
    const res = await fetch('assets/content.json');
    const data = await res.json();
    container.innerHTML = '';
    data.news.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.alt || '';
      const p = document.createElement('p');
      p.textContent = item.text;
      card.appendChild(img);
      card.appendChild(p);
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Falha ao carregar noticias', err);
  }
}

document.addEventListener('DOMContentLoaded', loadNews);
