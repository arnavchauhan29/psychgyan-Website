/**
 * PsychGyan Official Website - Frontend Logic & Interactivity
 * Pure Vanilla JavaScript - Zero External Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
  // Console confirmation for developer inspection
  console.log('PsychGyan website loaded successfully. Domain: psychgyan.in');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ------------------------------------------------------------------------
     1. Sticky Header Shadow on Scroll
     ------------------------------------------------------------------------ */
  const siteHeader = document.getElementById('site-header');
  if (siteHeader) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        siteHeader.classList.add('is-scrolled');
      } else {
        siteHeader.classList.remove('is-scrolled');
      }
    }, { passive: true });
  }

  /* ------------------------------------------------------------------------
     2. Mobile Navigation Toggle & Drawer Control
     ------------------------------------------------------------------------ */
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileNavMenu = document.getElementById('mobile-nav-menu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (mobileToggleBtn && mobileNavMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      const isExpanded = mobileToggleBtn.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      mobileToggleBtn.setAttribute('aria-expanded', String(newState));
      if (newState) {
        mobileNavMenu.removeAttribute('hidden');
        mobileNavMenu.classList.add('is-open');
        mobileToggleBtn.setAttribute('aria-label', 'Close navigation menu');
      } else {
        mobileNavMenu.setAttribute('hidden', '');
        mobileNavMenu.classList.remove('is-open');
        mobileToggleBtn.setAttribute('aria-label', 'Open navigation menu');
      }
    });

    // Close mobile drawer when any link is clicked
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
        mobileNavMenu.setAttribute('hidden', '');
        mobileNavMenu.classList.remove('is-open');
        mobileToggleBtn.setAttribute('aria-label', 'Open navigation menu');
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. Accessible Smooth Anchor Scrolling
     ------------------------------------------------------------------------ */
  const internalAnchors = document.querySelectorAll('a[href^="#"]');

  internalAnchors.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      const targetId = anchor.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          event.preventDefault();

          // If clicking a hero pathway card with a tab target, activate that tab first
          const tabTarget = anchor.getAttribute('data-tab-target');
          if (tabTarget === 'tab-coaching') {
            activateAudienceTab('coaching');
          } else if (tabTarget === 'tab-schools') {
            activateAudienceTab('schools');
          }

          targetElement.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
          });

          // Move focus to target for screen readers without breaking scroll
          targetElement.setAttribute('tabindex', '-1');
          targetElement.focus({ preventScroll: true });
        }
      }
    });
  });

  /* ------------------------------------------------------------------------
     4. Interactive Audience Pathways Tabs (Coaching vs Schools)
     ------------------------------------------------------------------------ */
  const tabBtnCoaching = document.getElementById('tab-btn-coaching');
  const tabBtnSchools = document.getElementById('tab-btn-schools');
  const paneCoaching = document.getElementById('pane-coaching');
  const paneSchools = document.getElementById('pane-schools');

  function activateAudienceTab(audience) {
    if (audience === 'coaching') {
      if (tabBtnCoaching) {
        tabBtnCoaching.classList.add('is-active');
        tabBtnCoaching.setAttribute('aria-selected', 'true');
      }
      if (tabBtnSchools) {
        tabBtnSchools.classList.remove('is-active');
        tabBtnSchools.setAttribute('aria-selected', 'false');
      }
      if (paneCoaching) paneCoaching.classList.add('is-active');
      if (paneSchools) paneSchools.classList.remove('is-active');
    } else {
      if (tabBtnSchools) {
        tabBtnSchools.classList.add('is-active');
        tabBtnSchools.setAttribute('aria-selected', 'true');
      }
      if (tabBtnCoaching) {
        tabBtnCoaching.classList.remove('is-active');
        tabBtnCoaching.setAttribute('aria-selected', 'false');
      }
      if (paneSchools) paneSchools.classList.add('is-active');
      if (paneCoaching) paneCoaching.classList.remove('is-active');
    }
  }

  if (tabBtnCoaching) {
    tabBtnCoaching.addEventListener('click', () => activateAudienceTab('coaching'));
  }
  if (tabBtnSchools) {
    tabBtnSchools.addEventListener('click', () => activateAudienceTab('schools'));
  }

  /* ------------------------------------------------------------------------
     5. Interactive 5 PMT Pillars Explorer
     ------------------------------------------------------------------------ */
  const pillarData = [
    {
      title: 'Pillar 01: Academic Stress & Exam Resilience',
      body: 'Explores test anxiety patterns, psychological recovery following unsatisfactory test results, and cognitive stamina during extended exam preparation. Helps directors identify when student performance dips are caused by stress rather than lack of subject knowledge.'
    },
    {
      title: 'Pillar 02: Learning Approaches',
      body: 'Assesses self-directed study methods, active recall versus passive reading, conceptual consolidation, and deep comprehension techniques. Reveals whether students possess effective techniques to digest high-volume syllabi.'
    },
    {
      title: 'Pillar 03: Daily Execution & Time Management',
      body: 'Evaluates daily study planning, consistency between intentions and execution, distraction handling, and procrastination triggers during independent preparation hours.'
    },
    {
      title: 'Pillar 04: Motivational Stamina & Engagement',
      body: 'Examines internal academic drive, curiosity, goal clarity, and stamina to endure repetitive weekly testing cycles without experiencing cynicism or apathy.'
    },
    {
      title: 'Pillar 05: Classroom Climate & Psychological Safety',
      body: 'Explores peer dynamics, freedom to ask clarifying questions in batch lectures, perceived teacher support, and psychological safety within competitive groups.'
    }
  ];

  const pillarBtns = document.querySelectorAll('.pillar-tab-btn');
  const pDisplayTitle = document.getElementById('p-display-title');
  const pDisplayBody = document.getElementById('p-display-body');

  pillarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-pillar-idx'), 10);
      if (!isNaN(idx) && pillarData[idx]) {
        // Update active button state
        pillarBtns.forEach(b => {
          b.classList.remove('is-active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('is-active');
        btn.setAttribute('aria-selected', 'true');

        // Update display text
        if (pDisplayTitle) pDisplayTitle.textContent = pillarData[idx].title;
        if (pDisplayBody) pDisplayBody.textContent = pillarData[idx].body;
      }
    });
  });

  /* ------------------------------------------------------------------------
     6. Expandable FAQ Accordion
     ------------------------------------------------------------------------ */
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    if (trigger) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // Close any other open item for clean accordion flow
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('is-open');
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('is-open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('is-open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  /* ------------------------------------------------------------------------
     7. Public Verified Testimonials Section
     ------------------------------------------------------------------------ */
  // All four testimonials are displayed publicly with verified quotes and illustrative portraits.

  /* ------------------------------------------------------------------------
     8. Institutional Enquiry Form (Web3Forms Live Delivery Handler)
     ------------------------------------------------------------------------ */
  const enquiryForm = document.getElementById('institutional-enquiry-form');
  const resultBox = document.getElementById('enquiry-result');
  const successView = document.getElementById('enquiry-success-view');
  const errorView = document.getElementById('enquiry-error-view');
  const successText = document.getElementById('enquiry-success-text');
  const errorText = document.getElementById('enquiry-error-text');
  const submitBtn = document.getElementById('enquiry-submit-btn');
  const retryBtn = document.getElementById('enquiry-retry-btn');
  const accessKeyInput = document.getElementById('web3forms-access-key');

  if (enquiryForm && resultBox) {
    enquiryForm.addEventListener('submit', async (event) => {
      event.preventDefault();

      const name = document.getElementById('contact-name').value.trim();
      const role = document.getElementById('contact-role').value;
      const email = document.getElementById('contact-email').value.trim();
      const phone = document.getElementById('contact-phone').value.trim();
      const institution = document.getElementById('institution-name').value.trim();
      const type = document.getElementById('institution-type').value;
      const accessKey = accessKeyInput ? accessKeyInput.value.trim() : '';

      // Validation for required fields
      if (!name || !role || !email || !institution || !type) {
        alert('Please complete all required fields: Name, Role, Work Email, Institution Name, and Institution Type.');
        return;
      }

      // Check if access key has been configured by the user
      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY_HERE') {
        resultBox.classList.add('is-visible');
        if (successView) successView.style.display = 'none';
        if (errorView) {
          errorView.style.display = 'block';
          if (errorText) {
            errorText.innerHTML = 'Web3Forms Access Key is not yet configured. Please enter your valid Access Key in <code>index.html</code> (line 1028: <code>value="YOUR_ACCESS_KEY_HERE"</code>) to enable live email delivery.';
          }
        }
        resultBox.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'nearest'
        });
        return;
      }

      // Set submission pending state
      const originalBtnText = submitBtn ? submitBtn.textContent : 'Submit Partnership Enquiry';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending Enquiry...';
      }

      // Hide previous status views
      if (successView) successView.style.display = 'none';
      if (errorView) errorView.style.display = 'none';
      resultBox.classList.remove('is-visible');

      const formData = new FormData(enquiryForm);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        let json = null;
        try {
          json = await response.json();
        } catch (jsonErr) {
          json = null;
        }

        if (response.ok && json && json.success) {
          // Success: Show confirmation and reset form
          resultBox.classList.add('is-visible');
          if (errorView) errorView.style.display = 'none';
          if (successView) {
            successView.style.display = 'block';
            if (successText) {
              successText.textContent = `Thank you, ${name}. Your partnership enquiry for ${institution} has been delivered directly to PsychGyan. Our academic team will review your batch context and reach out to ${email} shortly.`;
            }
          }
          enquiryForm.reset();
        } else {
          // Unsuccessful response from Web3Forms: Preserve entered data
          resultBox.classList.add('is-visible');
          if (successView) successView.style.display = 'none';
          if (errorView) {
            errorView.style.display = 'block';
            if (errorText) {
              if (json && json.message) {
                errorText.textContent = json.message;
              } else if (response.status === 403) {
                errorText.textContent = 'Submission blocked by origin security filter (HTTP 403). If testing locally via file://, browser security restricts cross-origin delivery requests. Please test via a local HTTP server or live web host.';
              } else {
                errorText.textContent = `Submission was not accepted (Status: ${response.status || 'Unknown'}). Please verify your connection or access key and try again.`;
              }
            }
          }
        }
      } catch (err) {
        // Network or fetch error: Preserve entered data
        resultBox.classList.add('is-visible');
        if (successView) successView.style.display = 'none';
        if (errorView) {
          errorView.style.display = 'block';
          if (errorText) {
            const isLocal = window.location.protocol === 'file:';
            if (isLocal) {
              errorText.textContent = 'Local browser restriction: Browsers block network API requests when opening HTML files directly from disk (file:// protocol). To test live email delivery, please view the page through a local HTTP server (such as Python or Node) or a web host.';
            } else {
              errorText.textContent = 'Unable to connect to the delivery service. Please check your internet connection and try again.';
            }
          }
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = originalBtnText;
        }
        resultBox.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'nearest'
        });
      }
    });

    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        if (submitBtn) submitBtn.click();
      });
    }

    enquiryForm.addEventListener('reset', () => {
      resultBox.classList.remove('is-visible');
      if (successView) successView.style.display = 'none';
      if (errorView) errorView.style.display = 'none';
    });
  }

  /* ------------------------------------------------------------------------
     9. Legal Dialog Modals (Privacy Policy & Terms of Service)
     ------------------------------------------------------------------------ */
  const privacyModal = document.getElementById('privacy-modal');
  const termsModal = document.getElementById('terms-modal');

  const openPrivacyBtns = [
    document.getElementById('open-privacy-btn'),
    document.getElementById('open-privacy-btn-sub')
  ];

  const openTermsBtns = [
    document.getElementById('open-terms-btn'),
    document.getElementById('open-terms-btn-sub')
  ];

  const closePrivacyBtn = document.getElementById('close-privacy-btn');
  const closeTermsBtn = document.getElementById('close-terms-btn');

  // Open Privacy Modal
  openPrivacyBtns.forEach(btn => {
    if (btn && privacyModal) {
      btn.addEventListener('click', () => {
        if (typeof privacyModal.showModal === 'function') {
          privacyModal.showModal();
        } else {
          privacyModal.setAttribute('open', '');
        }
      });
    }
  });

  // Open Terms Modal
  openTermsBtns.forEach(btn => {
    if (btn && termsModal) {
      btn.addEventListener('click', () => {
        if (typeof termsModal.showModal === 'function') {
          termsModal.showModal();
        } else {
          termsModal.setAttribute('open', '');
        }
      });
    }
  });

  // Close buttons
  if (closePrivacyBtn && privacyModal) {
    closePrivacyBtn.addEventListener('click', () => {
      if (typeof privacyModal.close === 'function') {
        privacyModal.close();
      } else {
        privacyModal.removeAttribute('open');
      }
    });
  }

  if (closeTermsBtn && termsModal) {
    closeTermsBtn.addEventListener('click', () => {
      if (typeof termsModal.close === 'function') {
        termsModal.close();
      } else {
        termsModal.removeAttribute('open');
      }
    });
  }

  // Close modals when clicking on the backdrop
  [privacyModal, termsModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (event) => {
        const rect = modal.getBoundingClientRect();
        const isInDialog = (
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width
        );
        if (!isInDialog) {
          if (typeof modal.close === 'function') {
            modal.close();
          } else {
            modal.removeAttribute('open');
          }
        }
      });
    }
  });

  /* ------------------------------------------------------------------------
     10. Scroll-Reveal Observer (Lightweight, Respects Reduced Motion)
     ------------------------------------------------------------------------ */
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    // If reduced motion is preferred or observer unsupported, reveal all immediately
    revealElements.forEach(el => el.classList.add('is-revealed'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  }
});
