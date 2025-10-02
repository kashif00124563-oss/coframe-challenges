(function CF_Template() {
  console.log('Welcome to Coframe!');

  // Target all image elements with the lp-element lp-pom-image class
  const imageElements = document.querySelectorAll('.lp-element.lp-pom-image');

  if (imageElements.length > 0) {
    console.log(`Found ${imageElements.length} image elements`);

    imageElements.forEach((element, index) => {
      // Set position to static
      element.style.position = 'static';

      // Apply flex-center styling
      element.style.display = 'flex';
      element.style.justifyContent = 'center';
      element.style.alignItems = 'center';

      console.log(`Styled image element ${index + 1}`);
    });
  } else {
    console.error('No image elements found');
  }

  // Target the #lp-pom-box-417 element
  const targetBox = document.querySelector("#lp-pom-box-417");

  if (targetBox) {
    console.log('Found #lp-pom-box-417 element');

    // Set position to static on the target element
    targetBox.style.position = 'static';

    // Create Hero-wrapper div
    const heroWrapper = document.createElement('div');
    heroWrapper.className = 'Flex-Horizontal';
    heroWrapper.style.display = 'flex';
    heroWrapper.style.flexWrap = 'wrap';
    heroWrapper.style.flexDirection = 'row';
    heroWrapper.style.marginTop = '48px';
    heroWrapper.style.marginLeft = '24px';
    heroWrapper.style.marginRight = '24px';
    heroWrapper.style.gap = '32px';

    // Insert the Hero-wrapper before the target element
    targetBox.parentNode.insertBefore(heroWrapper, targetBox);

    // Move the target element into the Hero-wrapper (first child)
    heroWrapper.appendChild(targetBox);
    
    // Apply mobile-specific styling to #lp-pom-box-417
    targetBox.style.width = '100%';
    targetBox.style.maxWidth = '100%';
    
    // Make the image inside responsive
    const boxImage = targetBox.querySelector('.lp-pom-image-container img');
    if (boxImage) {
      boxImage.style.width = '100%';
      boxImage.style.height = 'auto';
      boxImage.style.maxWidth = '100%';
    }

    // Create Hero-text-wrapper as a child (second child after targetBox)
    const heroTextWrapper = document.createElement('div');
    heroTextWrapper.className = 'Hero-text-wrapper';
    heroWrapper.appendChild(heroTextWrapper);

    // Move three elements into Hero-text-wrapper and set position to static
    const text421 = document.querySelector("#lp-pom-text-421");
    const text422 = document.querySelector("#lp-pom-text-422");
    const button423 = document.querySelector("#lp-pom-button-423");

    if (text421) {
      text421.style.position = 'static';
      heroTextWrapper.appendChild(text421);
      console.log('Moved #lp-pom-text-421 into Hero-text-wrapper');
    }

    if (text422) {
      text422.style.position = 'static';
      heroTextWrapper.appendChild(text422);
      console.log('Moved #lp-pom-text-422 into Hero-text-wrapper');
    }

    if (button423) {
      button423.style.position = 'static';
      button423.style.textAlign = 'center';
      button423.style.display = 'flex';
      button423.style.justifyContent = 'center';
      button423.style.alignItems = 'center';
      heroTextWrapper.appendChild(button423);

      // Set position static on the span inside button423
      const button423Span = button423.querySelector('span');
      if (button423Span) {
        button423Span.style.position = 'static';
        button423Span.style.textAlign = 'center';
        button423Span.style.display = 'block';
        button423Span.style.width = '100%';
      }

      // Add "Buy Now" text to the button with white color
      const buttonLabel = button423.querySelector('.label');
      if (buttonLabel) {
        buttonLabel.textContent = 'Buy Now';
        buttonLabel.style.color = 'white';
        buttonLabel.style.textAlign = 'center';
        buttonLabel.style.display = 'block';
        buttonLabel.style.width = '100%';
      } else {
        button423.textContent = 'Buy Now';
        button423.style.color = 'white';
      }

      console.log('Moved #lp-pom-button-423 into Hero-text-wrapper');
    }

    // Create benefits-content div with key benefit bullets
    const benefitsContent = document.createElement('div');
    benefitsContent.className = 'benefits-content';
    benefitsContent.style.position = 'static';

    // Create benefit bullets with icons
    const benefits = [
      { icon: '✓', text: 'Improve memory up to 300%' },
      { icon: '✓', text: 'Drug‑free, no side effects' },
      { icon: '✓', text: 'Works while you sleep' }
    ];

    const benefitsList = document.createElement('ul');
    benefitsList.style.listStyle = 'none';
    benefitsList.style.padding = '0';
    benefitsList.style.margin = '0';

    benefits.forEach(benefit => {
      const li = document.createElement('li');
      li.style.display = 'flex';
      li.style.alignItems = 'center';
      li.style.marginBottom = '12px';

      const icon = document.createElement('span');
      icon.textContent = benefit.icon;
      icon.style.marginRight = '8px';
      icon.style.color = '#4CAF50';
      icon.style.fontWeight = 'bold';
      icon.style.fontSize = '18px';

      const text = document.createElement('span');
      text.textContent = benefit.text;

      li.appendChild(icon);
      li.appendChild(text);
      benefitsList.appendChild(li);
    });

    benefitsContent.appendChild(benefitsList);

    // Insert benefits-content after button423 in hero-text-wrapper
    heroTextWrapper.appendChild(benefitsContent);
    console.log('Added benefits-content to Hero-text-wrapper');

    // Add responsive behavior - change to vertical on smaller screens
    const updateFlexDirection = () => {
      if (window.innerWidth < 768) {
        heroWrapper.style.flexDirection = 'column';
        heroWrapper.style.className = 'Flex-Horizontal Flex-Vertical';
        heroWrapper.style.marginLeft = '16px';
        heroWrapper.style.marginRight = '16px';
        heroWrapper.style.marginTop = '24px';
        
        // Ensure targetBox (image container) is responsive
        targetBox.style.height = 'auto';
        targetBox.style.minHeight = 'auto';
        targetBox.style.width = '100%';
        
        // Ensure hero text wrapper is properly styled for mobile
        heroTextWrapper.style.display = 'flex';
        heroTextWrapper.style.flexDirection = 'column';
        heroTextWrapper.style.gap = '16px';
        heroTextWrapper.style.width = '100%';
      } else {
        heroWrapper.style.flexDirection = 'row';
        heroWrapper.className = 'Flex-Horizontal';
        heroWrapper.style.marginLeft = '24px';
        heroWrapper.style.marginRight = '24px';
        heroWrapper.style.marginTop = '48px';
        
        targetBox.style.height = '';
        targetBox.style.minHeight = '';
        targetBox.style.width = '';
      }
    };

    // Initial check
    updateFlexDirection();

    // Listen for window resize
    window.addEventListener('resize', updateFlexDirection);

    console.log('Hero-wrapper created and #lp-pom-box-417 wrapped successfully');
  } else {
    console.error('#lp-pom-box-417 element not found');
  }

  // Target the span inside #lp-pom-button-115 and set position to static
  const button115Span = document.querySelector("#lp-pom-button-115 > span");

  if (button115Span) {
    button115Span.style.position = 'static';
    console.log('Set #lp-pom-button-115 > span to position static');
  } else {
    console.error('#lp-pom-button-115 > span not found');
  }

  // Target #lp-pom-box-116 and set position to static
  const box116 = document.querySelector("#lp-pom-box-116");
  
  if (box116) {
    box116.style.position = 'static';
    console.log('Set #lp-pom-box-116 to position static');
  } else {
    console.error('#lp-pom-box-116 not found');
  }

  // Target #lp-pom-box-415 > div.Flex-Horizontal > div.Hero-text-wrapper and add benefit bullets
  let heroTextWrapper415 = document.querySelector("#lp-pom-box-415 > div.Flex-Horizontal > div.Hero-text-wrapper");

  if (!heroTextWrapper415) {
    const container415 = document.querySelector('#lp-pom-box-415');
    if (container415) {
      console.log('Creating Flex-Horizontal + Hero-text-wrapper inside #lp-pom-box-415');
      // Ensure flex container exists
      let flexContainer415 = container415.querySelector(':scope > .Flex-Horizontal');
      if (!flexContainer415) {
        flexContainer415 = document.createElement('div');
        flexContainer415.className = 'Flex-Horizontal';
        flexContainer415.style.display = 'flex';
        flexContainer415.style.flexWrap = 'wrap';
        flexContainer415.style.gap = '24px';
        flexContainer415.style.alignItems = 'flex-start';
        container415.appendChild(flexContainer415);
      }
      // Ensure hero text wrapper exists
      heroTextWrapper415 = flexContainer415.querySelector(':scope > .Hero-text-wrapper');
      if (!heroTextWrapper415) {
        heroTextWrapper415 = document.createElement('div');
        heroTextWrapper415.className = 'Hero-text-wrapper';
        flexContainer415.appendChild(heroTextWrapper415);
      }
      // Optionally move key texts and CTA into the wrapper for layout coherence
      const t421 = document.querySelector('#lp-pom-text-421');
      const t422 = document.querySelector('#lp-pom-text-422');
      const btn423 = document.querySelector('#lp-pom-button-423');
      [t421, t422, btn423].forEach(el => {
        if (el && el.parentElement !== heroTextWrapper415) {
          el.style.position = 'static';
          heroTextWrapper415.appendChild(el);
        }
      });
    } else {
      console.error('#lp-pom-box-415 not found');
    }
  }

  if (heroTextWrapper415) {
    // Apply vertical flex layout and gap
    heroTextWrapper415.style.display = 'flex';
    heroTextWrapper415.style.flexDirection = 'column';
    heroTextWrapper415.style.gap = '16px';
    if (heroTextWrapper415.classList) {
      heroTextWrapper415.classList.add('Flex-Vertical');
    } else {
      heroTextWrapper415.className += ' Flex-Vertical';
    }

    // Apply mobile-responsive styling to the Flex-Horizontal container
    const flexContainer415 = document.querySelector('#lp-pom-box-415 > .Flex-Horizontal');
    if (flexContainer415) {
      flexContainer415.style.position = 'static';
      
      // Function to update mobile styles
      const updateMobileStyles = () => {
        if (window.innerWidth < 768) {
          flexContainer415.style.height = 'auto';
          flexContainer415.style.minHeight = 'auto';
          flexContainer415.style.flexDirection = 'column';
          flexContainer415.style.padding = '16px';
        } else {
          flexContainer415.style.height = '';
          flexContainer415.style.minHeight = '';
          flexContainer415.style.flexDirection = 'row';
          flexContainer415.style.padding = '';
        }
      };
      
      // Initial check
      updateMobileStyles();
      
      // Listen for window resize
      window.addEventListener('resize', updateMobileStyles);
      
      console.log('Applied mobile-responsive styling to Flex-Horizontal container');
    }

    // Avoid duplicate insertion
    if (!heroTextWrapper415.querySelector('.benefits-content') && !heroTextWrapper415.querySelector('#ma-key-bullets')) {
      console.log('Appending benefits into Hero-text-wrapper within #lp-pom-box-415');

      // Prefer reusing existing key bullets if present elsewhere
      let existingBullets = document.querySelector('#ma-key-bullets');
      if (existingBullets) {
        existingBullets.style.listStyle = 'none';
        existingBullets.style.padding = '0';
        existingBullets.style.margin = '16px 0 0 0';
        heroTextWrapper415.appendChild(existingBullets);
      } else {
        const benefitsContent = document.createElement('div');
        benefitsContent.className = 'benefits-content';
        benefitsContent.style.position = 'static';
        benefitsContent.style.marginTop = '16px';

        const benefits = [
          { icon: '✓', text: 'Improve memory up to 300%' },
          { icon: '✓', text: 'Drug‑free, no side effects' },
          { icon: '✓', text: 'Works while you sleep' }
        ];

        const benefitsList = document.createElement('ul');
        benefitsList.style.listStyle = 'none';
        benefitsList.style.padding = '0';
        benefitsList.style.margin = '0';

        benefits.forEach(benefit => {
          const li = document.createElement('li');
          li.style.display = 'flex';
          li.style.alignItems = 'center';
          li.style.marginBottom = '12px';

          const icon = document.createElement('span');
          icon.textContent = benefit.icon;
          icon.style.marginRight = '8px';
          icon.style.color = '#4CAF50';
          icon.style.fontWeight = 'bold';
          icon.style.fontSize = '18px';

          const text = document.createElement('span');
          text.textContent = benefit.text;

          li.appendChild(icon);
          li.appendChild(text);
          benefitsList.appendChild(li);
        });

        benefitsContent.appendChild(benefitsList);
        heroTextWrapper415.appendChild(benefitsContent);
      }
    } else {
      console.log('Benefits already present; skipping duplicate insertion');
    }

    // Ensure benefits-content is directly below #lp-pom-text-422
    const text422_415 = heroTextWrapper415.querySelector('#lp-pom-text-422');
    let benefitsContainer415 = heroTextWrapper415.querySelector(':scope > div.benefits-content');

    // If only #ma-key-bullets exists, wrap it into a benefits-content container
    if (!benefitsContainer415) {
      const bullets415 = heroTextWrapper415.querySelector(':scope > #ma-key-bullets');
      if (bullets415) {
        benefitsContainer415 = document.createElement('div');
        benefitsContainer415.className = 'benefits-content';
        benefitsContainer415.style.position = 'static';
        benefitsContainer415.style.marginTop = '16px';
        heroTextWrapper415.insertBefore(benefitsContainer415, bullets415);
        benefitsContainer415.appendChild(bullets415);
      }
    }

    if (text422_415 && benefitsContainer415 && text422_415.nextSibling !== benefitsContainer415) {
      heroTextWrapper415.insertBefore(benefitsContainer415, text422_415.nextSibling);
      console.log('Reordered benefits-content below #lp-pom-text-422 inside #lp-pom-box-415 wrapper');
    }
  } else {
    console.error('Unable to locate or create Hero-text-wrapper inside #lp-pom-box-415');
  }

  // Emit variantRendered event after successfully applying changes
  window.CFQ = window.CFQ || [];
  window.CFQ.push({ emit: 'variantRendered' });
})()

