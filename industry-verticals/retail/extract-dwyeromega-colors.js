/**
 * DwyerOmega Color & Typography Extraction Script
 *
 * Instructions:
 * 1. Navigate to https://www.dwyeromega.com/en-us/
 * 2. Open Browser DevTools (F12)
 * 3. Go to Console tab
 * 4. Paste this entire script and press Enter
 * 5. Copy the output JSON
 * 6. Update DWYEROMEGA_BRAND_FINDINGS.md with the extracted values
 */

(function () {
  'use strict';

  const results = {
    colors: {},
    typography: {},
    spacing: {},
    components: {},
    timestamp: new Date().toISOString(),
  };

  // Helper: Convert RGB/RGBA to Hex
  function rgbToHex(rgb) {
    if (!rgb || rgb === 'transparent' || rgb === 'rgba(0, 0, 0, 0)') return null;
    const match = rgb.match(/\d+/g);
    if (!match || match.length < 3) return null;
    const r = parseInt(match[0]).toString(16).padStart(2, '0');
    const g = parseInt(match[1]).toString(16).padStart(2, '0');
    const b = parseInt(match[2]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`.toUpperCase();
  }

  // Helper: Get computed style
  function getStyle(selector, property) {
    try {
      const el = document.querySelector(selector);
      if (!el) return null;
      return window.getComputedStyle(el)[property];
    } catch (e) {
      return null;
    }
  }

  // Helper: Get all matching elements
  function getAll(selector) {
    try {
      return Array.from(document.querySelectorAll(selector));
    } catch (e) {
      return [];
    }
  }

  console.log('🔍 Starting DwyerOmega Brand Extraction...\n');

  // ===== COLORS =====

  // Primary Brand Blue (from navigation links)
  const navLinks = getAll('nav a, .header__nav a, a[href*="/en-us/"]');
  if (navLinks.length > 0) {
    const color = window.getComputedStyle(navLinks[0]).color;
    results.colors.primaryBlue = {
      rgb: color,
      hex: rgbToHex(color),
      source: 'Navigation links',
    };
  }

  // Top bar background
  const topBar = document.querySelector('.header__top, [class*="top-bar"], [class*="header-top"]');
  if (topBar) {
    const bg = window.getComputedStyle(topBar).backgroundColor;
    results.colors.topBarBackground = {
      rgb: bg,
      hex: rgbToHex(bg),
      source: 'Top information bar',
    };
  }

  // Search bar background
  const searchInput = document.querySelector(
    'input[type="search"], input[placeholder*="Search"], input[placeholder*="search"]'
  );
  if (searchInput) {
    const bg = window.getComputedStyle(searchInput).backgroundColor;
    results.colors.searchBackground = {
      rgb: bg,
      hex: rgbToHex(bg),
      source: 'Search input field',
    };
    const border = window.getComputedStyle(searchInput).borderColor;
    results.colors.searchBorder = {
      rgb: border,
      hex: rgbToHex(border),
      source: 'Search input border',
    };
  }

  // Body text color
  if (document.body) {
    const color = window.getComputedStyle(document.body).color;
    results.colors.bodyText = {
      rgb: color,
      hex: rgbToHex(color),
      source: 'Body text',
    };
    const bg = window.getComputedStyle(document.body).backgroundColor;
    results.colors.bodyBackground = {
      rgb: bg,
      hex: rgbToHex(bg),
      source: 'Body background',
    };
  }

  // Heading colors
  const h1 = document.querySelector('h1');
  if (h1) {
    const color = window.getComputedStyle(h1).color;
    results.colors.heading1 = {
      rgb: color,
      hex: rgbToHex(color),
      source: 'H1 heading',
    };
  }

  const h2 = document.querySelector('h2');
  if (h2) {
    const color = window.getComputedStyle(h2).color;
    results.colors.heading2 = {
      rgb: color,
      hex: rgbToHex(color),
      source: 'H2 heading',
    };
  }

  // Navigation background
  const nav = document.querySelector('nav, .header__nav, .navigation, header');
  if (nav) {
    const bg = window.getComputedStyle(nav).backgroundColor;
    results.colors.navBackground = {
      rgb: bg,
      hex: rgbToHex(bg),
      source: 'Navigation background',
    };
  }

  // Button colors (if found)
  const buttons = getAll('button, .btn, [class*="button"]');
  if (buttons.length > 0) {
    const btn =
      buttons.find((b) => {
        const bg = window.getComputedStyle(b).backgroundColor;
        return bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent';
      }) || buttons[0];

    if (btn) {
      const bg = window.getComputedStyle(btn).backgroundColor;
      const color = window.getComputedStyle(btn).color;
      results.colors.buttonBackground = {
        rgb: bg,
        hex: rgbToHex(bg),
        source: 'Button background',
      };
      results.colors.buttonText = {
        rgb: color,
        hex: rgbToHex(color),
        source: 'Button text',
      };
    }
  }

  // Link colors
  const links = getAll('a');
  if (links.length > 0) {
    const link =
      links.find((l) => {
        const color = window.getComputedStyle(l).color;
        return color && color !== 'rgb(0, 0, 238)'; // Skip default blue
      }) || links[0];

    if (link) {
      const color = window.getComputedStyle(link).color;
      results.colors.linkColor = {
        rgb: color,
        hex: rgbToHex(color),
        source: 'Link color',
      };
    }
  }

  // ===== TYPOGRAPHY =====

  // Body font
  if (document.body) {
    const fontFamily = window.getComputedStyle(document.body).fontFamily;
    const fontSize = window.getComputedStyle(document.body).fontSize;
    const fontWeight = window.getComputedStyle(document.body).fontWeight;
    const lineHeight = window.getComputedStyle(document.body).lineHeight;

    results.typography.body = {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: fontWeight,
      lineHeight: lineHeight,
      source: 'Body element',
    };
  }

  // Heading fonts
  if (h1) {
    const fontFamily = window.getComputedStyle(h1).fontFamily;
    const fontSize = window.getComputedStyle(h1).fontSize;
    const fontWeight = window.getComputedStyle(h1).fontWeight;
    const lineHeight = window.getComputedStyle(h1).lineHeight;

    results.typography.heading1 = {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: fontWeight,
      lineHeight: lineHeight,
      source: 'H1 element',
    };
  }

  if (h2) {
    const fontFamily = window.getComputedStyle(h2).fontFamily;
    const fontSize = window.getComputedStyle(h2).fontSize;
    const fontWeight = window.getComputedStyle(h2).fontWeight;

    results.typography.heading2 = {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: fontWeight,
      source: 'H2 element',
    };
  }

  // Navigation font
  if (navLinks.length > 0) {
    const fontFamily = window.getComputedStyle(navLinks[0]).fontFamily;
    const fontSize = window.getComputedStyle(navLinks[0]).fontSize;
    const fontWeight = window.getComputedStyle(navLinks[0]).fontWeight;

    results.typography.navigation = {
      fontFamily: fontFamily,
      fontSize: fontSize,
      fontWeight: fontWeight,
      source: 'Navigation links',
    };
  }

  // ===== SPACING =====

  // Container width
  const container = document.querySelector('.container, [class*="container"], main');
  if (container) {
    const maxWidth = window.getComputedStyle(container).maxWidth;
    const width = window.getComputedStyle(container).width;
    const padding = window.getComputedStyle(container).padding;

    results.spacing.container = {
      maxWidth: maxWidth,
      width: width,
      padding: padding,
      source: 'Container element',
    };
  }

  // ===== COMPONENTS =====

  // Search bar
  if (searchInput) {
    const borderRadius = window.getComputedStyle(searchInput).borderRadius;
    const padding = window.getComputedStyle(searchInput).padding;
    const height = window.getComputedStyle(searchInput).height;

    results.components.searchBar = {
      borderRadius: borderRadius,
      padding: padding,
      height: height,
      source: 'Search input',
    };
  }

  // Button
  if (buttons.length > 0) {
    const btn = buttons[0];
    const borderRadius = window.getComputedStyle(btn).borderRadius;
    const padding = window.getComputedStyle(btn).padding;
    const border = window.getComputedStyle(btn).border;

    results.components.button = {
      borderRadius: borderRadius,
      padding: padding,
      border: border,
      source: 'Button element',
    };
  }

  // ===== OUTPUT =====

  console.log('✅ Extraction Complete!\n');
  console.log('=== COPY THE JSON BELOW ===\n');
  console.log(JSON.stringify(results, null, 2));
  console.log('\n=== END OF OUTPUT ===\n');
  console.log('📝 Next Steps:');
  console.log('1. Copy the JSON output above');
  console.log('2. Update DWYEROMEGA_BRAND_FINDINGS.md with these values');
  console.log('3. Proceed to Phase 2: Color System Update');

  // Also save to window for easy access
  window.dwyerOmegaBrandData = results;
  console.log('\n💡 Tip: Access the data anytime with: window.dwyerOmegaBrandData');

  return results;
})();
