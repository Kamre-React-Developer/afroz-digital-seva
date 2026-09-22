import { useState } from 'react'
import Container from '../common/Container'

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Bihar Government', href: '#bihar-government'},
  { label: 'Central Government', href: '#central-government' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen((currentValue) => !currentValue)
  }

  function handleMobileNavigation(event, href) {
  event.preventDefault()
  setIsMenuOpen(false)

  window.setTimeout(() => {
    const targetSection = document.querySelector(href)

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })

      window.history.replaceState(null, '', href)
    }
  }, 300)
}

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy text-white shadow-lg">
      <Container>
        <div className="flex min-h-18 items-center justify-between gap-4">
          {/* Brand */}
          <a href="#home" className="flex shrink-0 items-center gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-linear-to-br from-brand-blue to-brand-green shadow-lg shadow-blue-500/20">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="13" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
            </span>

            <span>
              <strong className="block font-display text-sm leading-tight sm:text-base">
                Afroz Digital Seva
              </strong>

              <small className="block text-[9px] font-medium tracking-wide text-sky-300 sm:text-[10px]">
                Your Trusted Cyber Cafe
              </small>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Desktop navigation"
            className="hidden items-center gap-5 xl:flex"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium text-slate-300 transition-colors duration-200 hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <a
              href="#track-application"
              className="hidden rounded-lg border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold transition-colors hover:bg-white/15 sm:inline-flex"
            >
              Track Application
            </a>

            <a
              href="#online-apply"
              className="inline-flex rounded-lg bg-brand-blue px-3 py-2 text-xs font-bold shadow-lg shadow-blue-500/20 transition-colors hover:bg-blue-600 sm:px-4"
            >
              Online Apply
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              className="grid size-10 place-items-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white xl:hidden"
            >
              {isMenuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
 
       {/* Mobile navigation */}
<div
  className={`grid transition-all duration-300 ease-in-out xl:hidden ${
    isMenuOpen
      ? 'grid-rows-[1fr] opacity-100'
      : 'grid-rows-[0fr] opacity-0'
  }`}
>
  <div className="overflow-hidden">
    <nav
      aria-label="Mobile navigation"
      className="border-t border-white/10 py-4"
    >
      <div className="flex flex-col gap-1">
        {navigationLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(event) => handleMobileNavigation(event, link.href)}
            className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition-colors duration-200 hover:bg-white/10 hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  </div>
</div>
      </Container>
    </header>
  )
}

export default Navbar