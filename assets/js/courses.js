async function loadCourses() {
  const container = document.getElementById('course-cards');
  if (!container) return;
  try {
    const res = await fetch('assets/content.json');
    const data = await res.json();
    container.innerHTML = '';
    data.courses.forEach(course => {
      const link = document.createElement('a');
      link.href = `course.html?id=${course.id}`;
      const card = document.createElement('div');
      card.className = 'course-card';
      const img = document.createElement('img');
      img.src = course.image;
      img.alt = course.title;
      const h = document.createElement('h1');
      h.textContent = course.title;
      const p = document.createElement('p');
      p.textContent = course.summary;
      card.append(img, h, p);
      link.appendChild(card);
      container.appendChild(link);
    });
  } catch (err) {
    console.error('Falha ao carregar cursos', err);
  }
}

document.addEventListener('DOMContentLoaded', loadCourses);
