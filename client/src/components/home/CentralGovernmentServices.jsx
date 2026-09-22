import Container from '../common/Container'

const centralGovernmentServices = [
  {
    id: 1,
    title: 'Ayushman Bharat Card',
    description: 'Health Cover Scheme',
    icon: 'heart',
    iconBackground: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 2,
    title: 'PM-KISAN Yojana',
    description: 'e-KYC & Registration',
    icon: 'farmer',
    iconBackground: 'bg-green-50',
    iconColor: 'text-green-700',
  },
  {
    id: 3,
    title: 'e-Shram Card',
    description: 'Worker Registration',
    icon: 'identity',
    iconBackground: 'bg-cyan-50',
    iconColor: 'text-cyan-700',
  },
  {
    id: 4,
    title: 'EPFO / UAN Services',
    description: 'PF Claim & Passbook',
    icon: 'shield',
    iconBackground: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 5,
    title: 'Passport Seva',
    description: 'Appointment & Form',
    icon: 'passport',
    iconBackground: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    id: 6,
    title: 'Driving Licence',
    description: 'Sarathi Parivahan',
    icon: 'vehicle',
    iconBackground: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    id: 7,
    title: 'PM Awas Yojana',
    description: 'Housing Scheme',
    icon: 'home',
    iconBackground: 'bg-orange-50',
    iconColor: 'text-orange-600',
  },
  {
    id: 8,
    title: 'PM Vishwakarma',
    description: 'Artisan Support Scheme',
    icon: 'tools',
    iconBackground: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 9,
    title: 'Sukanya Samriddhi',
    description: 'Savings Scheme',
    icon: 'savings',
    iconBackground: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
]

function CentralServiceIcon({ name }) {
  const iconPaths = {
    heart: (
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
    ),

    farmer: (
      <>
        <path d="M12 21v-9" />
        <path d="M12 15c-4 0-6-2-6-5 4 0 6 2 6 5Z" />
        <path d="M12 12c0-4 2-6 5-6 0 4-2 6-5 6Z" />
        <path d="M7 4c2 0 4 1 5 3" />
      </>
    ),

    identity: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <circle cx="9" cy="11" r="2.5" />
        <path d="M5.5 17a3.5 3.5 0 0 1 7 0" />
        <path d="M15 10h3M15 14h3" />
      </>
    ),

    shield: (
      <>
        <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    passport: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <circle cx="12" cy="11" r="4" />
        <path d="M8 11h8M12 7c1 1 1.5 2.5 1.5 4S13 14 12 15M12 7c-1 1-1.5 2.5-1.5 4S11 14 12 15" />
      </>
    ),

    vehicle: (
      <>
        <path d="M3 17V7h11v10" />
        <path d="M14 10h4l3 3v4h-7" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </>
    ),

    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10" />
        <path d="M9 21v-7h6v7" />
      </>
    ),

    tools: (
      <>
        <path d="m14 6 4-4 4 4-4 4" />
        <path d="M13 7 3 17a2.1 2.1 0 0 0 3 3L16 10" />
        <path d="m5 5 14 14" />
      </>
    ),

    savings: (
      <>
        <path d="M5 11c0-4 3-7 7-7s7 3 7 7v7H5z" />
        <path d="M8 18v3M16 18v3M5 14H3M19 10h2" />
        <circle cx="15" cy="9" r="1" fill="currentColor" stroke="none" />
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
      className="size-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  )
}

function CentralGovernmentServices() {
  return (
    <section
      id="central-government"
      className="scroll-mt-[72px] border-b border-slate-200 bg-white py-16 sm:py-20"
    >
      <Container>
        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-amber-500 font-display text-lg font-bold text-white shadow-lg shadow-amber-500/20">
              IN
            </span>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-text sm:text-3xl">
                Central Government Schemes
              </h2>

              <p className="mt-1 text-sm text-brand-muted sm:text-base">
                Explore major services provided by Government of India
              </p>
            </div>
          </div>

          <a
            href="#all-central-services"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-brand-blue shadow-sm transition-all duration-200 hover:border-brand-blue hover:bg-brand-blue hover:text-white"
          >
            View All Central Services
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Central services grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {centralGovernmentServices.map((service) => (
            <a
              key={service.id}
              href="#central-government"
              className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lg sm:p-5"
            >
              <span
                className={`grid size-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${service.iconBackground} ${service.iconColor}`}
              >
                <CentralServiceIcon name={service.icon} />
              </span>

              <h3 className="mt-3 text-xs font-bold leading-5 text-brand-text sm:text-sm">
                {service.title}
              </h3>

              <p className="mt-1 text-[11px] leading-4 text-slate-400 sm:text-xs">
                {service.description}
              </p>
            </a>
          ))}

          {/* View more card */}
          <a
            href="#all-central-services"
            className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:bg-white hover:shadow-lg sm:p-5"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-slate-100 text-slate-500 transition-transform duration-300 group-hover:scale-110">
              <CentralServiceIcon name="more" />
            </span>

            <h3 className="mt-3 text-xs font-bold leading-5 text-brand-text sm:text-sm">
              And Many More
            </h3>

            <span className="mt-1 text-[11px] font-semibold text-amber-600 sm:text-xs">
              Explore All →
            </span>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default CentralGovernmentServices