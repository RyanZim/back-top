export default function backTop (opts = {}) {
  opts.offset = opts.offset || '1rem'

  const backTop = document.createElement('a');
  backTop.href = '#top';
  backTop.innerHTML = opts.innerHTML || 'Back to Top';
  backTop.id = opts.id || '';
  backTop.className = opts.className || '';

  backTop.style.position = 'fixed';
  backTop.style.right = opts.offset;
  backTop.style.bottom = '-100px';
  backTop.style.transition = `bottom 800ms`;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset < 100) backTop.style.bottom = '-100px';
    else backTop.style.bottom = opts.offset;
  });

  backTop.addEventListener('click', e => {
    window.scroll(0, 0);
    // Remove hash from URL:
    history.pushState(
      "", document.title,
      window.location.pathname + window.location.search,
    );
    e.preventDefault();
  });

  document.body.appendChild(backTop);
};
