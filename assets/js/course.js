function getCourseId() {
  const url = new URL(window.location.href);
  return url.searchParams.get('id');
}

async function loadCourse() {
  const container = document.getElementById('course-content');
  if (!container) return;
  const id = getCourseId();
  if (!id) return;
  try {
    const res = await fetch('assets/content.json');
    const data = await res.json();
    const course = data.courses.find(c => c.id === id);
    if (!course) return;
    container.innerHTML = '';
    const h = document.createElement('h1');
    h.textContent = course.title;
    container.appendChild(h);
    course.content.forEach(par => {
      const p = document.createElement('p');
      p.textContent = par;
      container.appendChild(p);
    });
  } catch (err) {
    console.error('Falha ao carregar curso', err);
  }
}

document.addEventListener('DOMContentLoaded', loadCourse);
