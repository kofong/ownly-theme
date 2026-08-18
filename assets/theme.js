/**
 * Ownly Theme — Main JavaScript
 * Handles header scroll, mobile menu, and animations
 */

(function() {
  'use strict';

  // Header scroll effect
  const header = document.getElementById('site-header');
  if (header) {
    let ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          header.classList.toggle('scrolled', window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(function(section) {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
  });

  // CSS class for animated-in state
  var style = document.createElement('style');
  style.textContent = '.animate-in { opacity: 1 !important; transform: translateY(0) !important; }';
  document.head.appendChild(style);

  // Mobile menu toggle
  const menuBtn = document.querySelector('.site-header__menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      const nav = document.querySelector('.site-header__nav');
      if (nav) {
        const isVisible = nav.style.display === 'flex';
        nav.style.display = isVisible ? 'none' : 'flex';
        nav.style.flexDirection = 'column';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.right = '0';
        nav.style.background = '#fff';
        nav.style.padding = '1rem 1.5rem';
        nav.style.borderBottom = '1px solid #E5E7EB';
        nav.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
      }
    });
  }

  // Cart count update (AJAX)
  function updateCartCount() {
    fetch('/cart.js')
      .then(function(res) { return res.json(); })
      .then(function(cart) {
        var countEl = document.getElementById('cart-count');
        if (countEl) countEl.textContent = cart.item_count;
      })
      .catch(function() {});
  }

  // Update cart count on page load
  updateCartCount();

  // Listen for cart updates
  document.addEventListener('shopify:cart:update', updateCartCount);

})();
