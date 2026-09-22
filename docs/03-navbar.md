# Afroz Digital Seva — Responsive Navbar Documentation

## 1. Overview

The Navbar is the main navigation component of the Afroz Digital Seva website.

It helps users:

- Identify the website brand
- Navigate between website sections
- Track an existing application
- Start a new online application
- Access navigation links on mobile devices

---

## 2. Component Information

Component name:

`Navbar`

Component location:

`client/src/components/layout/Navbar.jsx`

Used inside:

`client/src/App.jsx`

---

## 3. Navbar Sections

The Navbar contains the following parts:

### Brand Section

The brand section contains:

- Website icon
- Afroz Digital Seva
- Your Trusted Cyber Cafe

The brand links to the homepage using:

`href="#home"`

### Desktop Navigation

The desktop navigation contains:

- Home
- Services
- Bihar Government
- Central Government
- How It Works
- Contact

Desktop navigation is visible on extra-large screens using the Tailwind class:

`xl:flex`

It remains hidden on smaller screens using:

`hidden`

### Action Buttons

The Navbar contains two action buttons:

- Track Application
- Online Apply

These buttons will be connected to their respective pages or sections later.

### Mobile Navigation

On smaller screens, the desktop navigation is replaced by a hamburger button.

Clicking the hamburger button opens or closes the mobile navigation menu.

---

## 4. Navigation Data

Navigation links are stored inside an array:

```jsx
const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Bihar Government', href: '#bihar-government' },
  { label: 'Central Government', href: '#central-government' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]