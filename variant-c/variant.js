(function CF_Template() {
  console.log('Welcome to Coframe!');

  // For static pages, you don't necessarily need MutationObserver
  // but you can use it if you want to.
  const emailInput = document.querySelector('#email');
  if (emailInput) {
    // Update the placeholder text as requested
    emailInput.setAttribute('placeholder', 'kashif00124563@gmail.com');
    console.log('Updated #email placeholder to kashif00124563@gmail.com');

    // Only after successfully applying all of the desired changes,
    // emit the variantRendered event
    window.CFQ = window.CFQ || [];
    window.CFQ.push({ emit: 'variantRendered' });
  } else {
    console.error('#email input not found');
  }
})()
