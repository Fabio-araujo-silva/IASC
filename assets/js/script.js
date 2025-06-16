window.addEventListener('load', async () => {
  const scroller = document.getElementById('scroller');
  const container = scroller.parentElement;
  const speed = 1;
  let messages = [];
  try {
    const res = await fetch('assets/content.json');
    const data = await res.json();
    messages = data.hero.messages;
  } catch (err) {
    console.error('Falha ao carregar mensagens', err);
  }
  if (!messages.length) {
    messages = [''];
  }
  const sep = ' • ';
  let idx = 0;
  let pos;

  function nextMsg() {
    const curr = messages[idx];
    const next = messages[(idx + 1) % messages.length];
    scroller.textContent = curr + sep + next;
 
    pos = container.offsetWidth;
    scroller.style.left = pos + 'px';
    idx = (idx + 1) % messages.length;
  }

  nextMsg();
  function animate() {
    pos -= speed;
    scroller.style.left = pos + 'px';

    if (pos < - (scroller.offsetWidth - container.offsetWidth)) {
      nextMsg();
    }
    requestAnimationFrame(animate);
  }
  animate();
});
