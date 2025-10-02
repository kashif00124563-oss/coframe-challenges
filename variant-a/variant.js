(function CF_Template() {
  console.log('Welcome to Coframe!');

  // For static pages, you don't necessarily need MutationObserver
  // but you can use it if you want to.
  const selector = '#hero-section > div > div > div > div.grid.gap-10.lg\\:grid-cols-2 > div > h1';
  let tries = 0;
  const maxTries = 40; // ~10s at 250ms
  const applyChange = (el) => {
    el.textContent = 'Coframe is the Next Big Thing';
    console.log('Hero heading updated to new copy');
    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
  };
  const attempt = () => {
    const heroHeading = document.querySelector(selector);
    if (heroHeading) {
      applyChange(heroHeading);
      return true;
    }
    return false;
  };
  if (!attempt()) {
    const interval = setInterval(() => {
      tries++;
      if (attempt() || tries >= maxTries) {
        if (tries >= maxTries) console.warn('Hero heading not found; giving up after timeout');
        clearInterval(interval);
      }
    }, 250);
  }
})()
