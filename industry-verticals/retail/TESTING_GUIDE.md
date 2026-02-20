# DwyerOmega Rebranding - Testing Guide

**Date:** February 20, 2026  
**Purpose:** Comprehensive testing checklist for the DwyerOmega rebranding

---

## 🧪 Testing Checklist

### 1. Visual Testing

#### Brand Colors

- [ ] Verify primary brand blue (#003d82) is used consistently
- [ ] Check hover states use darker blue (#002d5f)
- [ ] Verify focus states use brand blue
- [ ] Check all links use brand blue
- [ ] Verify buttons use brand blue
- [ ] Check icons use brand blue
- [ ] Verify accent lines use brand blue

#### Typography

- [ ] Verify Barlow font is used for headings
- [ ] Verify Source Sans 3 font is used for body text
- [ ] Check font weights are appropriate
- [ ] Verify line heights are readable
- [ ] Check letter spacing is consistent

#### Components

- [ ] Navigation - Links and icons use brand blue
- [ ] Hero/Banner - CTAs use brand blue
- [ ] Products - Cards, ratings, buttons use brand blue
- [ ] Articles - Cards, categories use brand blue
- [ ] Forms - Inputs, buttons use brand blue
- [ ] Footer - Links and titles use brand blue
- [ ] Breadcrumb - Links use brand blue
- [ ] Pagination - Active states use brand blue
- [ ] Search - Facets and pagination use brand blue

---

### 2. Cross-Browser Testing

#### Desktop Browsers

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

#### Mobile Browsers

- [ ] iOS Safari
- [ ] Chrome Mobile (Android)
- [ ] Samsung Internet

#### Test Points

- [ ] Colors display correctly
- [ ] Fonts load properly
- [ ] Layouts are consistent
- [ ] Interactive elements work
- [ ] Hover states function
- [ ] Focus states visible

---

### 3. Responsive Testing

#### Breakpoints

- [ ] Mobile (320px - 640px)
- [ ] Tablet (641px - 1023px)
- [ ] Desktop (1024px+)
- [ ] Large Desktop (1280px+)
- [ ] Extra Large (1536px+)

#### Test Points

- [ ] Navigation adapts correctly
- [ ] Grid layouts stack properly
- [ ] Images scale appropriately
- [ ] Text remains readable
- [ ] Buttons are touch-friendly
- [ ] Spacing is appropriate

---

### 4. Accessibility Testing

#### Color Contrast

- [ ] Text meets WCAG AA standards (4.5:1)
- [ ] Large text meets WCAG AA standards (3:1)
- [ ] Interactive elements have sufficient contrast
- [ ] Focus indicators are visible

#### Keyboard Navigation

- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] Skip links work (if present)

#### Screen Readers

- [ ] ARIA labels are present where needed
- [ ] Semantic HTML is used
- [ ] Alt text is provided for images
- [ ] Form labels are associated

#### Focus States

- [ ] All interactive elements have visible focus
- [ ] Focus uses brand blue
- [ ] Focus is clearly visible
- [ ] Focus order is logical

---

### 5. Interactive Elements Testing

#### Buttons

- [ ] Primary buttons use brand blue
- [ ] Hover states work correctly
- [ ] Focus states are visible
- [ ] Disabled states are clear
- [ ] Click states work

#### Links

- [ ] Links use brand blue
- [ ] Hover states work
- [ ] Visited states (if styled)
- [ ] External links (if indicated)
- [ ] Focus states visible

#### Forms

- [ ] Input focus uses brand blue
- [ ] Checkboxes use brand blue when checked
- [ ] Radio buttons use brand blue when selected
- [ ] Select dropdowns work
- [ ] Form validation states

#### Cards

- [ ] Hover effects work
- [ ] Borders use brand colors
- [ ] Shadows are appropriate
- [ ] Focus states visible

---

### 6. Performance Testing

#### Font Loading

- [ ] Fonts load efficiently
- [ ] No layout shift during font load
- [ ] Fallback fonts display correctly
- [ ] Font display strategy is appropriate

#### CSS

- [ ] CSS bundle size is reasonable
- [ ] No unused CSS
- [ ] CSS variables work correctly
- [ ] Transitions are smooth

#### Images

- [ ] Images load efficiently
- [ ] Lazy loading works
- [ ] Image optimization is applied
- [ ] No layout shift

#### Page Load

- [ ] First Contentful Paint (FCP) is good
- [ ] Largest Contentful Paint (LCP) is good
- [ ] Cumulative Layout Shift (CLS) is minimal
- [ ] Time to Interactive (TTI) is acceptable

---

### 7. Visual Regression Testing

#### Component Comparison

- [ ] Compare before/after screenshots
- [ ] Verify brand colors are applied
- [ ] Check spacing is consistent
- [ ] Verify typography is correct

#### Page Comparison

- [ ] Homepage
- [ ] Product listing page
- [ ] Product detail page
- [ ] Article listing page
- [ ] Article detail page
- [ ] Contact page
- [ ] Search results page

---

### 8. Functional Testing

#### Navigation

- [ ] Navigation links work
- [ ] Dropdown menus function
- [ ] Mobile menu works
- [ ] Search functionality works

#### Product Features

- [ ] Product listing displays correctly
- [ ] Product filters work
- [ ] Product sorting works
- [ ] Product detail page displays
- [ ] Add to cart works (if functional)

#### Article Features

- [ ] Article listing displays
- [ ] Article categories work
- [ ] Article detail page displays
- [ ] Related articles display

#### Forms

- [ ] Contact form works
- [ ] Subscribe form works
- [ ] Form validation works
- [ ] Form submission works

---

### 9. Edge Cases

#### Content Scenarios

- [ ] Empty states display correctly
- [ ] Loading states display correctly
- [ ] Error states display correctly
- [ ] Long content displays correctly
- [ ] Short content displays correctly

#### User Scenarios

- [ ] First-time visitor experience
- [ ] Returning visitor experience
- [ ] Mobile user experience
- [ ] Desktop user experience
- [ ] Accessibility user experience

---

### 10. Brand Consistency

#### Visual Consistency

- [ ] Colors are consistent across pages
- [ ] Typography is consistent
- [ ] Spacing is consistent
- [ ] Component styling is consistent

#### Interactive Consistency

- [ ] Hover states are consistent
- [ ] Focus states are consistent
- [ ] Transitions are consistent
- [ ] Button styles are consistent

---

## 📋 Testing Tools

### Recommended Tools

- **Browser DevTools:** Chrome, Firefox, Safari, Edge
- **Accessibility:** WAVE, axe DevTools, Lighthouse
- **Performance:** Lighthouse, WebPageTest
- **Visual Regression:** Percy, Chromatic, BackstopJS
- **Cross-Browser:** BrowserStack, Sauce Labs

### Manual Testing

- Test on actual devices
- Test with keyboard navigation
- Test with screen readers
- Test with different user preferences

---

## 🐛 Known Issues

### To Verify

- [ ] Check for any remaining accent red colors
- [ ] Verify all transitions are smooth
- [ ] Check for any layout shifts
- [ ] Verify all images load correctly

---

## ✅ Sign-Off

### Testing Completed By

- Name: ******\_\_\_\_******
- Date: ******\_\_\_\_******
- Browser/Device: ******\_\_\_\_******

### Issues Found

- Issue 1: ******\_\_\_\_******
- Issue 2: ******\_\_\_\_******
- Issue 3: ******\_\_\_\_******

### Resolution

- Issue 1: ******\_\_\_\_******
- Issue 2: ******\_\_\_\_******
- Issue 3: ******\_\_\_\_******

---

## 📝 Notes

- Test in both light and dark modes (if applicable)
- Test with different font sizes
- Test with different zoom levels
- Test with slow network connections
- Test with JavaScript disabled (if applicable)

---

**Testing Status:** Ready for Testing  
**Next Steps:** Execute testing checklist and document findings
