(function CF_Template() {
  console.log('Welcome to Coframe!');

  // Add conversion hypothesis to hero section
  function addHeroHypothesis() {
    // Target the main element
    const mainElement = document.querySelector('main');
    if (!mainElement) {
      console.error('Main element not found');
      return false;
    }

    // Check if hypothesis already exists
    if (document.getElementById('cf-hero-hypothesis')) {
      console.log('Hypothesis already exists');
      return true;
    }

    // Create the hypothesis banner
    const hypothesisBanner = document.createElement('div');
    hypothesisBanner.id = 'cf-hero-hypothesis';
    hypothesisBanner.style.cssText = `
      background: linear-gradient(135deg, oklch(0.9199 0.2009 113.99) 0%, oklch(0.95 0.15 113.99) 100%);
      padding: 48px 24px;
      text-align: center;
      position: relative;
      z-index: 10;
      border-bottom: 1px solid oklch(0.85 0.18 113.99);
    `;

    hypothesisBanner.innerHTML = `
      <div style="max-width: 960px; margin: 0 auto;">
        <h2 style="
          font-family: lausanne, 'lausanne Fallback', sans-serif;
          font-size: 32px;
          line-height: 1.2;
          font-weight: 600;
          color: oklch(0.1465 0.0057 69.2);
          margin: 0 0 16px 0;
          letter-spacing: -0.02em;
        ">
          Save 5% on expenses and close your books 75% faster—guaranteed.
        </h2>
        <p style="
          font-family: lausanne, 'lausanne Fallback', sans-serif;
          font-size: 18px;
          line-height: 1.5;
          color: oklch(0.1465 0.0057 69.2 / 0.8);
          margin: 0;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
        ">
          Join 45,000+ companies that modernized their finance operations with Ramp's all-in-one platform. Start saving time and money in under 30 days.
        </p>
      </div>
    `;

    // Insert at the beginning of main content
    const firstChild = mainElement.firstElementChild;
    if (firstChild) {
      mainElement.insertBefore(hypothesisBanner, firstChild);
    } else {
      mainElement.appendChild(hypothesisBanner);
    }

    console.log('Hero hypothesis added successfully');
    return true;
  }

  // Execute the modification
  if (addHeroHypothesis()) {
    // Emit variantRendered event
    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
  }
})()