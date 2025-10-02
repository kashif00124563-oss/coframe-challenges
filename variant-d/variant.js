(function CF_Template() {
  console.log('Coframe variant started - Replacing background image');

  const newImageUrl = 'https://cdn.prod.website-files.com/5c6f0fe189c3683ca571d70a/65abee9a61c88173f64e2b59_BigCommerce.svg';

  // Find all elements and check their background images
  const allElements = document.querySelectorAll('*');
  let replacementCount = 0;

  allElements.forEach(element => {
    const computedStyle = window.getComputedStyle(element);
    const bgImage = computedStyle.backgroundImage;
    
    // Check for the specific image or any memoryair CDN images
    if (bgImage && (bgImage.includes('5izbin-memoryair2-night-02') || bgImage.includes('d9hhrg4mnvzow.cloudfront.net'))) {
      console.log('Found element with target background:', element);
      element.style.setProperty('background-image', `url(${newImageUrl})`, 'important');
      replacementCount++;
    }
  });

  // Also add a mutation observer to catch dynamically loaded content
  const observer = new MutationObserver(() => {
    document.querySelectorAll('*').forEach(element => {
      const computedStyle = window.getComputedStyle(element);
      const bgImage = computedStyle.backgroundImage;
      
      if (bgImage && (bgImage.includes('5izbin-memoryair2-night-02') || bgImage.includes('d9hhrg4mnvzow.cloudfront.net'))) {
        element.style.setProperty('background-image', `url(${newImageUrl})`, 'important');
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['style', 'class'] });

  console.log(`Successfully replaced ${replacementCount} background image(s)`);
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
})()
