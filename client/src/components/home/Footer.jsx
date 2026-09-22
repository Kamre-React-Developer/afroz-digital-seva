import Container from '../common/Container'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Bihar Government', href: '#bihar-government' },
  { label: 'Central Government', href: '#central-government' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact Us', href: '#contact' },
]

const services = [
  'Aadhaar Services',
  'PAN Card Apply',
  'Voter ID Card',
  'RTPS Certificates',
  'Bihar Bhumi (LPC)',
  'Exam Forms',
]

const supportLinks = [
  'Track Application',
  'Help & FAQ',
  'Terms & Conditions',
  'Privacy Policy',
  'Refund Policy',
]

function BrandIcon() {
  return (
    <div className="grid size-10 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand-blue to-brand-green text-white shadow-lg">
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2a9.84 9.84 0 0 0-8.4 14.96L2 22l5.18-1.61A9.98 9.98 0 1 0 12.04 2Zm0 17.98a8.02 8.02 0 0 1-4.1-1.12l-.29-.17-3.07.95 1-2.99-.19-.31a7.84 7.84 0 1 1 6.65 3.64Zm4.42-5.87c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.59 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14 8h3V4.2c-.52-.07-2.31-.2-4.44-.2C8.12 4 7 6.35 7 9.3V12H4v4h3v8h4v-8h3.5l.5-4h-4V9.7c0-1.16.31-1.7 1.87-1.7H14Z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.5-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M21.58 7.19a2.71 2.71 0 0 0-1.91-1.92C17.98 4.82 12 4.82 12 4.82s-5.98 0-7.67.45a2.71 2.71 0 0 0-1.91 1.92A28.4 28.4 0 0 0 1.96 12a28.4 28.4 0 0 0 .46 4.81 2.71 2.71 0 0 0 1.91 1.92c1.69.45 7.67.45 7.67.45s5.98 0 7.67-.45a2.71 2.71 0 0 0 1.91-1.92A28.4 28.4 0 0 0 22.04 12a28.4 28.4 0 0 0-.46-4.81ZM10 15.12V8.88L15.2 12 10 15.12Z" />
    </svg>
  )
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      {/* Call-to-action section */}
      <section
        id="contact"
        className="scroll-mt-10 border-t border-slate-200 bg-white py-8"
      >
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-extrabold text-brand-text sm:text-3xl">
                Ready to Get Started?
              </h2>

              <p className="mt-1 text-sm text-brand-muted sm:text-base">
                Visit Our Cyber Cafe or Apply Online Now for Immediate
                Processing
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#services"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-blue px-7 py-3 font-bold text-white shadow-lg shadow-blue-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300/30 sm:w-auto"
              >
                Apply Online
              </a>

              <a
                href="tel:+919876543210"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-green px-7 py-3 font-bold text-white shadow-lg shadow-emerald-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300/30 sm:w-auto"
              >
                Contact Us
              </a>

              <div className="hidden h-10 w-px bg-slate-300 xl:block" />

              <p className="border-b-2 border-brand-green pb-1 text-center font-['Caveat'] text-2xl font-bold text-brand-text sm:text-3xl">
                Aapka Vishwas Hamari Taqat
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Main footer */}
      <footer className="bg-brand-navy text-white">
        <Container>
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 py-12 sm:gap-x-8 sm:py-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.15fr] lg:gap-8 lg:py-16">
            {/* Brand information — full width on mobile */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3">
                <BrandIcon />

                <div>
                  <h2 className="text-xl font-extrabold">
                    Afroz Digital Seva
                  </h2>

                  <p className="mt-0.5 text-xs font-semibold text-sky-400">
                    Your Trusted Cyber Cafe
                  </p>
                </div>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-6 text-blue-200">
                We provide government and online services under one roof.
                Fast, reliable and affordable service for everyone.
              </p>

              {/* Social links */}
              <div className="mt-6 flex items-center gap-3">
                <a
                  href="#whatsapp"
                  aria-label="WhatsApp"
                  className="grid size-10 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 transition duration-300 hover:-translate-y-1 hover:bg-emerald-500 hover:text-white"
                >
                  <WhatsAppIcon />
                </a>

                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="grid size-10 place-items-center rounded-full bg-blue-500/20 text-blue-400 transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
                >
                  <FacebookIcon />
                </a>

                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="grid size-10 place-items-center rounded-full bg-pink-500/20 text-pink-400 transition duration-300 hover:-translate-y-1 hover:bg-pink-600 hover:text-white"
                >
                  <InstagramIcon />
                </a>

                <a
                  href="#youtube"
                  aria-label="YouTube"
                  className="grid size-10 place-items-center rounded-full bg-red-500/20 text-red-400 transition duration-300 hover:-translate-y-1 hover:bg-red-600 hover:text-white"
                >
                  <YouTubeIcon />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="min-w-0">
              <h3 className="text-sm font-extrabold uppercase sm:text-base">
                Quick Links
              </h3>

              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs leading-5 text-blue-100 transition hover:text-sky-400 sm:text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="min-w-0">
              <h3 className="text-sm font-extrabold uppercase sm:text-base">
                Our Services
              </h3>

              <ul className="mt-5 space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-xs leading-5 text-blue-100 transition hover:text-sky-400 sm:text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="min-w-0">
              <h3 className="text-sm font-extrabold uppercase sm:text-base">
                Support
              </h3>

              <ul className="mt-5 space-y-3">
                {supportLinks.map((link) => (
                  <li key={link}>
                    <a
                      href="#contact"
                      className="text-xs leading-5 text-blue-100 transition hover:text-sky-400 sm:text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="min-w-0">
              <h3 className="text-sm font-extrabold uppercase sm:text-base">
                Contact Us
              </h3>

              <address className="mt-5 space-y-4 not-italic">
                <p className="flex min-w-0 items-start gap-2 text-xs leading-5 text-blue-100 sm:text-sm">
                  <span className="shrink-0" aria-hidden="true">
                    📍
                  </span>

                  <span className="min-w-0">
                    Muzaffarpur, Bihar – 842001
                  </span>
                </p>

                <a
                  href="tel:+919876543210"
                  className="flex min-w-0 items-start gap-2 text-xs leading-5 text-blue-100 transition hover:text-sky-400 sm:text-sm"
                >
                  <span className="shrink-0" aria-hidden="true">
                    ☎
                  </span>

                  <span className="min-w-0 wrap-break-word">
                    +91 98765 43210
                  </span>
                </a>

                <a
                  href="mailto:support@afrozdigitalseva.in"
                  className="flex min-w-0 items-start gap-2 text-xs leading-5 text-blue-100 transition hover:text-sky-400 sm:text-sm"
                >
                  <span className="shrink-0" aria-hidden="true">
                    ✉
                  </span>

                  <span className="min-w-0 break-all">
                    support@afrozdigitalseva.in
                  </span>
                </a>

                <p className="flex min-w-0 items-start gap-2 text-xs leading-5 text-blue-100 sm:text-sm">
                  <span className="shrink-0" aria-hidden="true">
                    ◷
                  </span>

                  <span className="min-w-0">
                    8:00 AM – 8:00 PM
                  </span>
                </p>
              </address>
            </div>
          </div>

          {/* Copyright section */}
          <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-center text-xs text-blue-300 lg:flex-row lg:items-center lg:justify-between lg:text-left">
            <p>
              © {currentYear} Afroz Digital Seva. All Rights Reserved.
            </p>

            <p className="leading-6">
              Digital Seva
              <span className="mx-2 text-slate-600">|</span>
              Digital Bihar
              <span className="mx-2 text-slate-600">|</span>
              Digital India
              <span className="mx-2 text-slate-600">|</span>
              Aapke Saath Hamesha
            </p>
          </div>
        </Container>
      </footer>
    </>
  )
}

export default Footer