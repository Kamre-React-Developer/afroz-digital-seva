import Container from '../common/Container'

const serviceCategories = [
  {
    id: 1,
    title: 'Aadhaar & Identity Services',
    icon: 'fingerprint',
    href: '#services',
    cardColor: 'bg-sky-50',
    borderColor: 'border-sky-200',
    iconBackground: 'bg-sky-100',
    iconColor: 'text-sky-700',
  },
  {
    id: 2,
    title: 'PAN & Tax Services',
    icon: 'card',
    href: '#services',
    cardColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    iconBackground: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  {
    id: 3,
    title: 'Voter & Election Services',
    icon: 'hand',
    href: '#services',
    cardColor: 'bg-violet-50',
    borderColor: 'border-violet-200',
    iconBackground: 'bg-violet-100',
    iconColor: 'text-violet-600',
  },
  {
    id: 4,
    title: 'Banking & Financial Services',
    icon: 'bank',
    href: '#services',
    cardColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    iconBackground: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  {
    id: 5,
    title: 'Utility Bill Payments',
    icon: 'bill',
    href: '#services',
    cardColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    iconBackground: 'bg-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    id: 6,
    title: 'Online Form Fill-up',
    icon: 'document',
    href: '#services',
    cardColor: 'bg-rose-50',
    borderColor: 'border-rose-200',
    iconBackground: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  {
    id: 7,
    title: 'Exam & Job Applications',
    icon: 'briefcase',
    href: '#services',
    cardColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    iconBackground: 'bg-yellow-100',
    iconColor: 'text-yellow-700',
  },
  {
    id: 8,
    title: 'Travel & Ticket Services',
    icon: 'travel',
    href: '#services',
    cardColor: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    iconBackground: 'bg-cyan-100',
    iconColor: 'text-cyan-700',
  },
  {
    id: 9,
    title: 'Print, Scan & Lamination',
    icon: 'file',
    href: '#services',
    cardColor: 'bg-green-50',
    borderColor: 'border-green-200',
    iconBackground: 'bg-green-100',
    iconColor: 'text-green-700',
  },
  {
    id: 10,
    title: 'Other Cyber Facilities',
    icon: 'more',
    href: '#services',
    cardColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    iconBackground: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
]

function CategoryIcon({ name }) {
  const commonProperties = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }

  const icons = {
    building: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="1" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M10 21v-5h4v5" />
      </>
    ),

    government: (
      <>
        <path d="m3 9 9-5 9 5" />
        <path d="M5 10h14M6 19h12M4 22h16" />
        <path d="M7 10v9M11 10v9M15 10v9M19 10v9" />
      </>
    ),

    fingerprint: (
      <>
        <path d="M12 11a2 2 0 0 1 2 2c0 3-1 5-2 7" />
        <path d="M8.5 18c.8-1.5 1.5-3.2 1.5-5a2 2 0 0 1 4 0" />
        <path d="M6 16c.5-1.2 1-2.5 1-4a5 5 0 0 1 10 0c0 3-1 6-2.5 8" />
        <path d="M4 13v-1a8 8 0 0 1 16 0c0 4-1 7-3 10" />
      </>
    ),

    card: (
      <>
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M3 10h18M7 14h3M14 14h3" />
      </>
    ),

    hand: (
      <>
        <path d="M8 11V6a1.5 1.5 0 0 1 3 0v4" />
        <path d="M11 10V4.5a1.5 1.5 0 0 1 3 0V10" />
        <path d="M14 10V6a1.5 1.5 0 0 1 3 0v6" />
        <path d="M8 9a1.5 1.5 0 0 0-3 0v4c0 5 3 8 7 8s7-3 7-8v-2a1.5 1.5 0 0 0-3 0" />
      </>
    ),

    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </>
    ),

    document: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5M9 12h6M9 16h6" />
      </>
    ),

    education: (
      <>
        <path d="m2 9 10-5 10 5-10 5z" />
        <path d="M6 11v5c3 3 9 3 12 0v-5M22 9v6" />
      </>
    ),

    briefcase: (
      <>
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V4h8v3M3 12h18M10 12v2h4v-2" />
      </>
    ),

    user: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M4 22a8 8 0 0 1 16 0" />
      </>
    ),

    bank: (
      <>
        <path d="m3 9 9-5 9 5" />
        <path d="M5 10h14M6 19h12M4 22h16" />
        <path d="M8 10v9M12 10v9M16 10v9" />
      </>
    ),

    bill: (
      <>
        <path d="M6 2h12v20l-3-2-3 2-3-2-3 2z" />
        <path d="M9 7h6M9 11h6M9 15h4" />
      </>
    ),

    travel: (
      <>
        <path d="M5 7h14M15 3l4 4-4 4" />
        <path d="M19 17H5M9 13l-4 4 4 4" />
      </>
    ),

    file: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5M9 12h6M9 16h6" />
      </>
    ),

    more: (
      <>
        <circle cx="5" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="19" cy="12" r="1.5" fill="currentColor" stroke="none" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-7"
      {...commonProperties}
    >
      {icons[name]}
    </svg>
  )
}

function PopularServices() {
  return (
    <section
      id="services"
      className="scroll-mt-10 bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-brand-text sm:text-4xl">
            Our Services
          </h2>

          <p className="mt-3 text-sm text-brand-muted sm:text-lg">
            Choose a Category to Explore All Services
          </p>

          <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-brand-blue" />
        </div>

        {/* Category cards */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
          {serviceCategories.map((service) => (
            <a
              key={service.id}
              href={service.href}
              className={`group flex min-h-36 flex-col items-center justify-center rounded-2xl border p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-40 sm:p-5 ${service.cardColor} ${service.borderColor}`}
            >
              <span
                className={`grid size-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 sm:size-14 ${service.iconBackground} ${service.iconColor}`}
              >
                <CategoryIcon name={service.icon} />
              </span>

              <h3 className="mt-4 text-xs font-bold leading-5 text-brand-text sm:text-sm lg:text-base">
                {service.title}
              </h3>
            </a>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default PopularServices