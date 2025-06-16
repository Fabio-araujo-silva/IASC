(function() {
  const head = document.head;
  const defaultTitle = 'Instituto de Alquimia de São Carlos';

  if (!document.querySelector('meta[charset]')) {
    const metaCharset = document.createElement('meta');
    metaCharset.setAttribute('charset', 'UTF-8');
    head.appendChild(metaCharset);
  }

  if (!document.querySelector('meta[name="viewport"]')) {
    const metaViewport = document.createElement('meta');
    metaViewport.name = 'viewport';
    metaViewport.content = 'width=device-width, initial-scale=1.0';
    head.appendChild(metaViewport);
  }

  if (!document.querySelector('link[rel="stylesheet"][href="assets/css/style.css"]')) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'assets/css/style.css';
    head.appendChild(link);
  }

  if (!document.title) {
    document.title = defaultTitle;
  }
})();
