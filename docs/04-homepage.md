# Afroz Digital Seva — Homepage Documentation

## 1. Overview

The homepage of Afroz Digital Seva introduces the business, highlights major digital services, explains the service process and helps customers contact the service centre.

The homepage is developed with:

- React
- JavaScript
- Tailwind CSS
- Vite
- Reusable React components
- Responsive web design
- Semantic HTML
- Git and GitHub

---

## 2. Homepage Objectives

The homepage is designed to:

- Introduce Afroz Digital Seva
- Build trust with visitors
- Display important digital services
- Separate Bihar and Central Government services
- Explain the application process
- Show business benefits
- Display customer feedback
- Provide contact and application options
- Work correctly on mobile, tablet and desktop screens

---

## 3. Homepage Component Structure

```text
client/
└── src/
    ├── components/
    │   ├── common/
    │   │   └── Container.jsx
    │   │
    │   ├── home/
    │   │   ├── HeroSection.jsx
    │   │   ├── PopularServices.jsx
    │   │   ├── BiharGovernmentServices.jsx
    │   │   ├── CentralGovernmentServices.jsx
    │   │   ├── HowItWorks.jsx
    │   │   ├── WhyChooseUs.jsx
    │   │   ├── Testimonials.jsx
    │   │   └── Footer.jsx
    │   │
    │   └── layout/
    │       └── Navbar.jsx
    │
    ├── App.jsx
    ├── index.css
    └── main.jsx