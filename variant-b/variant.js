(function CF_Template() {
  console.log('Welcome to Coframe!');

  // For static pages, you don't necessarily need MutationObserver
  // but you can use it if you want to.
  const selector = '#hero-section > div > div > div > div.grid.gap-10.lg\\:grid-cols-2 > div > h1';
  let tries = 0;
  const maxTries = 40; // ~10s at 250ms
  let headingApplied = false;
  let sectionApplied = false;
  const maybeMarkRendered = () => {
    if (!window.__cfVariantRendered && headingApplied && sectionApplied) {
      window.CFQ = window.CFQ || [];
      window.CFQ.push({ emit: 'variantRendered' });
      window.__cfVariantRendered = true;
    }
  };
  const applyChange = (el) => {
    el.textContent = 'Coframe is the Next Big Thing';
    console.log('Hero heading updated to new copy');
    headingApplied = true;
    maybeMarkRendered();
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

  // Insert "How it works" section directly after the hero container (#hero-section > div)
  const containerSelector = '#hero-section > div';
  let containerTries = 0;
  const maxContainerTries = 40; // ~10s at 250ms
  const insertHowItWorks = (container) => {
    // Remove any existing section to avoid duplicates
    const existing = document.getElementById('cf-how-it-works');
    if (existing) existing.remove();

    // Inject scoped styles once
    if (!document.getElementById('cf-hiw-styles')) {
      const style = document.createElement('style');
      style.id = 'cf-hiw-styles';
      style.textContent = `
        #cf-how-it-works .cf-title { text-align: center; font-size: 28px; line-height: 1.2; margin: 0 0 8px; color: inherit; }
        #cf-how-it-works .cf-subtitle { text-align: center; margin: 0 auto 24px; max-width: 720px; color: rgba(0,0,0,0.6); }
        #cf-how-it-works .cf-grid { display: grid; grid-template-columns: 1fr; gap: 16px; align-items: stretch; }
        #cf-how-it-works .cf-card { background: #F4F2F0; border: 1px solid rgba(33,33,33,0.1); border-radius: 12px; padding: 16px; }
        #cf-how-it-works .cf-phase { font-size: 12px; color: rgba(0,0,0,0.6); margin-bottom: 6px; }
        #cf-how-it-works .cf-card-title { font-size: 20px; line-height: 1.3; margin-bottom: 10px; }
        #cf-how-it-works .cf-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; }
        #cf-how-it-works .cf-list li { display: flex; align-items: center; gap: 10px; border-top: 1px solid rgba(33,33,33,0.1); padding-top: 10px; }
        #cf-how-it-works .cf-list li:first-child { border-top: none; padding-top: 0; }
        #cf-how-it-works .cf-dot { width: 16px; height: 16px; border-radius: 4px; background: #F6FAB2; flex: none; box-shadow: inset 0 0 2px rgba(255,255,255,0.6); }
        #cf-how-it-works .cf-dot.purple { background: #6b21a8; }
        @media (min-width: 640px) { #cf-how-it-works .cf-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; } }
        @media (min-width: 1024px) {
          #cf-how-it-works .cf-title { font-size: 40px; }
          #cf-how-it-works .cf-card { padding: 20px; }
          #cf-how-it-works .cf-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; }
        }
      `;
      document.head.appendChild(style);
    }

    const section = document.createElement('section');
    section.id = 'cf-how-it-works';
    section.className = 'bg-white spacer-p-t-l';
    section.style.marginBottom = '60px';
    section.setAttribute('role', 'region');
    section.setAttribute('aria-labelledby', 'cf-hiw-title');
    section.innerHTML = `
      <div class="cf-wrapper mx-auto w-full max-w-screen-2xl px-4 md:px-8 lg:px-12 xl:px-16">
        <h2 id="cf-hiw-title" class="cf-title">Start your next project with proper research.</h2>
        <p class="cf-subtitle">We follow three phases: Discover, Analyze, and Prototype.</p>
        <div class="cf-grid">
          <div class="cf-card">
            <div class="cf-phase">Phase 1</div>
            <div class="cf-card-title">Discover</div>
            <ul class="cf-list">
              <li><span class="cf-dot"></span>Stakeholder Interview</li>
              <li><span class="cf-dot"></span>User Interview</li>
              <li><span class="cf-dot"></span>Competitor Analysis</li>
            </ul>
          </div>
          <div class="cf-card">
            <div class="cf-phase">Phase 2</div>
            <div class="cf-card-title">Analyze</div>
            <ul class="cf-list">
              <li><span class="cf-dot"></span>Problem Valuation</li>
              <li><span class="cf-dot"></span>Solution Valuation</li>
              <li><span class="cf-dot"></span>Personas</li>
              <li><span class="cf-dot"></span>Flows</li>
            </ul>
          </div>
          <div class="cf-card">
            <div class="cf-phase">Phase 3</div>
            <div class="cf-card-title">Prototype</div>
            <ul class="cf-list">
              <li><span class="cf-dot purple"></span>Paper Prototype</li>
              <li><span class="cf-dot purple"></span>Interactive Prototype</li>
            </ul>
          </div>
        </div>
      </div>`;

    // Insert after the hero container
    const parent = container.parentElement;
    if (parent) parent.insertBefore(section, container.nextSibling);
    else container.appendChild(section);

    sectionApplied = true;
    console.log('Inserted How it works section');
    maybeMarkRendered();
  };
  const attemptInsert = () => {
    const container = document.querySelector(containerSelector);
    if (container) {
      insertHowItWorks(container);
      return true;
    }
    return false;
  };
  if (!attemptInsert()) {
    const interval2 = setInterval(() => {
      containerTries++;
      if (attemptInsert() || containerTries >= maxContainerTries) {
        if (containerTries >= maxContainerTries) console.warn('Hero container not found; skipping How it works section');
        clearInterval(interval2);
      }
    }, 250);
  }
})()
