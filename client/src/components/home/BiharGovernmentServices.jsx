import Container from '../common/Container'

const biharGovernmentServices = [
  {
    id: 1,
    title: 'Bihar Bhumi',
    description: 'Dakhil Kharij, LPC',
    icon: 'home',
    iconBackground: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    id: 2,
    title: 'RTPS Other Services',
    description: 'Bihar Online Portal',
    icon: 'document',
    iconBackground: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    id: 3,
    title: 'Jati Praman Patra',
    description: 'Caste Certificate',
    icon: 'user',
    iconBackground: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
  },
  {
    id: 4,
    title: 'Aay Praman Patra',
    description: 'Income Certificate',
    icon: 'money',
    iconBackground: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    id: 5,
    title: 'Nivas Praman Patra',
    description: 'Residence Certificate',
    icon: 'house',
    iconBackground: 'bg-purple-50',
    iconColor: 'text-purple-600',
  },
  {
    id: 6,
    title: 'EWS Certificate',
    description: 'General Category',
    icon: 'verified',
    iconBackground: 'bg-pink-50',
    iconColor: 'text-pink-600',
  },
  {
    id: 7,
    title: 'Bihar Scholarship',
    description: 'Post Matric / PMS',
    icon: 'education',
    iconBackground: 'bg-sky-50',
    iconColor: 'text-sky-600',
  },
  {
    id: 8,
    title: 'Bihar Labour Card',
    description: 'BOCW Scheme',
    icon: 'identity',
    iconBackground: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    id: 9,
    title: 'Bihar Ration Card',
    description: 'New & Correction',
    icon: 'cart',
    iconBackground: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
]

function BiharServiceIcon({ name }) {
  const iconPaths = {
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10" />
        <path d="M9 21v-7h6v7" />
      </>
    ),

    document: (
      <>
        <path d="M6 2h8l4 4v16H6z" />
        <path d="M14 2v5h5" />
        <path d="M9 12h6M9 16h6" />
      </>
    ),

    user: (
      <>
        <circle cx="12" cy="7" r="4" />
        <path d="M5 21a7 7 0 0 1 14 0" />
      </>
    ),

    money: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15 8.5c-.6-.5-1.5-.8-2.5-.8-1.5 0-2.5.8-2.5 1.8 0 1.2 1 1.7 2.5 2 1.5.4 2.5.9 2.5 2.1 0 1.1-1 1.9-2.5 1.9-1 0-2-.3-2.8-1" />
        <path d="M12.5 6v12" />
      </>
    ),

    house: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10" />
        <path d="M10 21v-6h4v6" />
      </>
    ),

    verified: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),

    education: (
      <>
        <path d="m2 9 10-5 10 5-10 5z" />
        <path d="M6 11v5c3 3 9 3 12 0v-5" />
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

    cart: (
      <>
        <path d="M3 4h2l2 11h10l2-7H6" />
        <circle cx="9" cy="20" r="1.5" />
        <circle cx="17" cy="20" r="1.5" />
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

function BiharGovernmentServices() {
  return (
    <section
      id="bihar-government"
      className="scroll-mt-[72px] border-y border-blue-100 bg-linear-to-r from-blue-50/70 via-white to-blue-50/70 py-16 sm:py-20"
    >
      <Container>
        {/* Section header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-blue font-display text-lg font-bold text-white shadow-lg shadow-blue-500/20">
              BR
            </span>

            <div>
              <h2 className="font-display text-2xl font-bold text-brand-text sm:text-3xl">
                Bihar Government Schemes
              </h2>

              <p className="mt-1 text-sm text-brand-muted sm:text-base">
                Explore major services provided by Government of Bihar
              </p>
            </div>
          </div>

          <a
            href="#all-bihar-services"
            className="inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-blue-200 bg-white px-5 py-3 text-sm font-semibold text-brand-blue shadow-sm transition-all duration-200 hover:border-brand-blue hover:bg-brand-blue hover:text-white"
          >
            View All Bihar Services
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Bihar services grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-5">
          {biharGovernmentServices.map((service) => (
            <a
              key={service.id}
              href="#bihar-government"
              className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg sm:min-h-36 sm:p-5"
            >
              <span
                className={`grid size-11 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${service.iconBackground} ${service.iconColor}`}
              >
                <BiharServiceIcon name={service.icon} />
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
            href="#all-bihar-services"
            className="group flex min-h-36 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-lg sm:min-h-36 sm:p-5"
          >
            <span className="grid size-11 place-items-center rounded-xl bg-slate-100 text-slate-500 transition-transform duration-300 group-hover:scale-110">
              <BiharServiceIcon name="more" />
            </span>

            <h3 className="mt-3 text-xs font-bold leading-5 text-brand-text sm:text-sm">
              And Many More
            </h3>

            <span className="mt-1 text-[11px] font-semibold text-brand-blue sm:text-xs">
              View All →
            </span>
          </a>
        </div>
      </Container>
    </section>
  )
}

export default BiharGovernmentServices