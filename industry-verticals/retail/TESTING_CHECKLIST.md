# DwyerOmega Rebranding - Testing Checklist

**Date:** February 20, 2026  
**Purpose:** Test navigation and color system updates

---

## 🚀 Quick Start

1. **Start Dev Server:**

   ```bash
   cd industry-verticals/retail
   npm run dev
   ```

2. **Open Browser:**
   - Navigate to `http://localhost:3000` (or the port shown in terminal)

3. **Test Navigation:**
   - Check navigation links use brand blue color
   - Hover over links to see darker blue
   - Test dropdown menus
   - Test mobile menu (resize browser or use DevTools)

---

## ✅ Navigation Component Tests

### Desktop Navigation

- [ ] **Link Colors:**
  - [ ] Navigation links display in primary brand blue (#003d82)
  - [ ] Links are clearly visible and readable
  - [ ] Color matches DwyerOmega brand

- [ ] **Hover States:**
  - [ ] Hovering over links shows darker blue (#002d5f)
  - [ ] Transition is smooth
  - [ ] No flickering or glitches

- [ ] **Active States:**
  - [ ] Active/current page link is distinguishable
  - [ ] Visual feedback is clear

- [ ] **Dropdown Menus:**
  - [ ] Dropdown appears on hover/click
  - [ ] Dropdown has border and shadow
  - [ ] Dropdown background is white
  - [ ] Dropdown links use brand colors

- [ ] **Borders:**
  - [ ] Navigation has bottom border
  - [ ] Border color is subtle gray
  - [ ] Border is visible but not distracting

### Mobile Navigation

- [ ] **Hamburger Menu:**
  - [ ] Hamburger icon is visible
  - [ ] Icon uses brand colors
  - [ ] Menu opens/closes smoothly

- [ ] **Mobile Menu:**
  - [ ] Full-screen menu displays correctly
  - [ ] Links are readable and properly spaced
  - [ ] Close button works
  - [ ] Menu closes when link is clicked

### Navigation Icons

- [ ] **Icon Colors:**
  - [ ] Search icon uses brand blue
  - [ ] User/Account icon uses brand blue
  - [ ] Cart icon uses brand blue
  - [ ] Wishlist icon uses brand blue

- [ ] **Icon Hover:**
  - [ ] Icons change to darker blue on hover
  - [ ] Transitions are smooth
  - [ ] Icons are clearly visible

---

## 🎨 Color System Tests

### Primary Colors

- [ ] **Brand Blue:**
  - [ ] Primary blue (#003d82) appears correctly
  - [ ] Used consistently across navigation
  - [ ] Matches DwyerOmega brand

- [ ] **Brand Red:**
  - [ ] Accent red (#c8102e) appears where used
  - [ ] Used appropriately (not overused)

### Text Colors

- [ ] **Foreground:**
  - [ ] Primary text is dark and readable (#1a1a1a)
  - [ ] Secondary text is appropriately muted (#4a4a4a)
  - [ ] Text has good contrast on white background

### Background Colors

- [ ] **Backgrounds:**
  - [ ] Main background is clean white
  - [ ] Light gray backgrounds appear where appropriate
  - [ ] Colors are consistent

---

## 📱 Responsive Tests

### Breakpoints

- [ ] **Desktop (1024px+):**
  - [ ] Navigation displays horizontally
  - [ ] All links visible
  - [ ] Dropdowns work correctly

- [ ] **Tablet (768px - 1023px):**
  - [ ] Navigation adapts appropriately
  - [ ] Layout is readable
  - [ ] Touch targets are adequate

- [ ] **Mobile (< 768px):**
  - [ ] Hamburger menu appears
  - [ ] Mobile menu works correctly
  - [ ] All functionality accessible

---

## ♿ Accessibility Tests

### Keyboard Navigation

- [ ] **Tab Navigation:**
  - [ ] Can tab through all navigation links
  - [ ] Focus indicators are visible
  - [ ] Focus uses brand colors or high contrast

- [ ] **Keyboard Shortcuts:**
  - [ ] Enter/Space activates links
  - [ ] Escape closes dropdowns/menus
  - [ ] Arrow keys work in dropdowns (if applicable)

### Screen Reader

- [ ] **ARIA Labels:**
  - [ ] Navigation has proper ARIA labels
  - [ ] Dropdowns announce state
  - [ ] Icons have descriptive labels

### Color Contrast

- [ ] **WCAG Compliance:**
  - [ ] Text meets WCAG AA contrast (4.5:1)
  - [ ] Links meet contrast requirements
  - [ ] Focus indicators are visible

---

## 🐛 Bug Checklist

### Visual Issues

- [ ] No layout shifts on load
- [ ] No overlapping elements
- [ ] No cut-off text
- [ ] Borders display correctly
- [ ] Shadows appear correctly

### Functional Issues

- [ ] All links work
- [ ] Dropdowns open/close correctly
- [ ] Mobile menu works
- [ ] No console errors
- [ ] No broken images

### Performance

- [ ] Page loads quickly
- [ ] Fonts load correctly
- [ ] No layout shift (CLS)
- [ ] Smooth animations

---

## 📊 Comparison with DwyerOmega Site

### Visual Comparison

- [ ] **Navigation Colors:**
  - [ ] Link colors match DwyerOmega site
  - [ ] Hover states match
  - [ ] Overall appearance is similar

- [ ] **Typography:**
  - [ ] Fonts appear similar (may need verification)
  - [ ] Font sizes are appropriate
  - [ ] Font weights are correct

- [ ] **Spacing:**
  - [ ] Navigation spacing matches
  - [ ] Padding is appropriate
  - [ ] Gaps between items are correct

---

## 🔍 Browser Testing

Test in multiple browsers:

- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if available)
- [ ] Mobile browsers

---

## 📝 Notes

### Issues Found

- [ ] Document any issues here
- [ ] Note browser-specific problems
- [ ] Note color mismatches
- [ ] Note functionality problems

### Improvements Needed

- [ ] List any improvements needed
- [ ] Note any adjustments required

---

## ✅ Sign-off

- [ ] All navigation tests passed
- [ ] Colors match DwyerOmega brand
- [ ] No critical bugs found
- [ ] Ready for next phase

**Tester:** ********\_********  
**Date:** ********\_********  
**Notes:** ********\_********

---

## 🚀 Next Steps After Testing

1. **If Issues Found:**
   - Document issues in this checklist
   - Fix issues before proceeding
   - Re-test after fixes

2. **If All Tests Pass:**
   - Proceed to Phase 4.2: Hero/Banner components
   - Continue with remaining components
   - Update progress in rebranding plan

---

**Happy Testing! 🎉**
