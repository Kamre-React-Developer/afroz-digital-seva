import Container from '../common/Container'

const trendingServices = [
  'Aadhaar',
  'PAN Card',
  'Voter ID',
  'Bihar Bhumi',
  'Caste Certificate',
]

const mainServices = [
  'Online Form Fill-up',
  'Document Color Print & Xerox',
  'Urgent Passport Photo & Lamination',
  'Govt Exam & Admit Card Download',
  'Electricity & Utility Bill Payment',
]

const trustFeatures = [
  'Fast Processing',
  'Genuine & Secure',
  'Affordable Charges',
  'Expert Support',
]

const serviceStats = [
  {
    id: 1,
    value: '50+',
    label: 'Online Services',
    color: 'bg-blue-50 text-blue-600',
    icon: (
      <>
        <path d="M4 19V9l8-5 8 5v10" />
        <path d="M9 22v-7h6v7" />
        <path d="M2 22h20" />
      </>
    ),
  },
  {
    id: 2,
    value: 'Secure',
    label: 'Data Handling',
    color: 'bg-emerald-50 text-emerald-600',
    icon: (
      <>
        <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
  {
    id: 3,
    value: 'Clear',
    label: 'Service Charges',
    color: 'bg-amber-50 text-amber-600',
    icon: (
      <>
        <path d="M7 10v12" />
        <path d="M15 5.5 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h3l3-7a3 3 0 0 1 3 3v3.5" />
      </>
    ),
  },
  {
    id: 4,
    value: 'Quick',
    label: 'Customer Assistance',
    color: 'bg-purple-50 text-purple-600',
    icon: (
      <>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M18 19c0 1.7-1.3 3-3 3h-3" />
        <path d="M4 13v4a2 2 0 0 0 2 2h1v-8H6a2 2 0 0 0-2 2Z" />
        <path d="M20 13v4a2 2 0 0 1-2 2h-1v-8h1a2 2 0 0 1 2 2Z" />
      </>
    ),
  },
]

function HeroSection() {
  function handleSearch(event) {
    event.preventDefault()
  }

  return (
    <section
      id="home"
      className="relative mb-28 scroll-mt-10 overflow-visible bg-[#041d36] text-white sm:mb-24"
    >
      {/* Dotted background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(14, 165, 233, 0.35) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      {/* Decorative background glow */}
      <div
        aria-hidden="true"
        className="absolute -left-40 top-24 size-96 rounded-full bg-brand-blue/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-40 bottom-0 size-96 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <Container>
        <div className="relative">
          {/* Main Hero content */}
          <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-center lg:gap-16 lg:py-20 xl:grid-cols-[minmax(0,1fr)_430px]">
            {/* Left content */}
            <div>
              {/* Top badge */}
              <div className="flex justify-center lg:justify-start">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-4 py-2 text-xs font-medium text-cyan-300 backdrop-blur-sm sm:text-sm">
                  <span className="size-2 rounded-full bg-emerald-400" />
                  Digital Seva • Sarkari Kaam • Aapke Saath Hamesha
                </span>
              </div>

              {/* Main heading */}
              <h1 className="mt-6 text-center font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-left lg:text-6xl xl:text-7xl">
                Sarkari <span className="text-amber-400">Seva</span>
                <br />
                Ab Aur Bhi Aasaan
              </h1>

              <p className="mt-5 text-center text-lg text-slate-200 sm:text-xl lg:text-left">
                All Government &amp; Online Services Under One Roof
              </p>

              {/* Hero qualities */}
              <div className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm font-semibold text-cyan-400 lg:justify-start">
                <span>Fast</span>
                <span className="text-slate-600">|</span>

                <span>Reliable</span>
                <span className="text-slate-600">|</span>

                <span>Affordable</span>
                <span className="text-slate-600">|</span>

                <span>Expert Support</span>
              </div>

              {/* Search form */}
              <form
                onSubmit={handleSearch}
                className="mt-8 flex flex-col gap-3 rounded-2xl bg-white p-2 shadow-2xl shadow-black/20 sm:flex-row"
              >
                <label htmlFor="service-search" className="sr-only">
                  Search services
                </label>

                <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-6 shrink-0 text-slate-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>

                  <input
                    id="service-search"
                    type="search"
                    placeholder="Search your service (e.g. Aadhaar, Caste Certificate, Bihar Bhumi...)"
                    className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-brand-blue px-8 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-200 hover:bg-blue-600 active:scale-95"
                >
                  Search
                </button>
              </form>

              {/* Trending services */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <span className="mr-1 text-sm text-slate-400">Trending:</span>

                {trendingServices.map((service) => (
                  <a
                    key={service}
                    href="#services"
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-slate-200 transition-colors duration-200 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300"
                  >
                    {service}
                  </a>
                ))}
              </div>

              {/* Trust features */}
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-5 sm:grid-cols-4">
                {trustFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-xs font-medium text-slate-300 sm:text-sm"
                  >
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
                      ✓
                    </span>

                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right information card */}
            <div className="relative mx-auto w-full max-w-[400px] lg:mx-0 lg:ml-auto xl:max-w-[430px]">
              <span className="absolute -right-1 -top-4 z-10 rounded-full bg-amber-400 px-4 py-2 text-[11px] font-bold uppercase tracking-wide text-slate-950 shadow-lg sm:right-3 sm:text-xs">
                2026 Verified
              </span>

              <div className="rounded-3xl border border-cyan-400/25 bg-[#07172d]/95 p-5 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-6">
                {/* Quote */}
                <div className="border-b border-white/10 pb-5 text-center">
                  <blockquote className="font-['Caveat'] text-3xl font-bold leading-tight text-amber-300 sm:text-4xl">
                    <span className="block">“Aapka Kaam Hamari</span>
                    <span className="block">Zimmedari”</span>
                  </blockquote>

                  <p className="mt-2 text-xs text-slate-400 sm:text-sm">
                    Digital India • Digital Bihar • Digital You
                  </p>
                </div>

                {/* Services list */}
                <ul className="mt-5 space-y-3">
                  {mainServices.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-sm font-semibold leading-5 text-slate-200"
                    >
                      <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
                        ✓
                      </span>

                      {service}
                    </li>
                  ))}

                  <li className="flex items-start gap-3 text-sm font-bold leading-5 text-amber-300">
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
                      ✓
                    </span>

                    And Many More Cyber Services...
                  </li>
                </ul>

                {/* Card footer */}
                <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-amber-400/20 text-xs font-bold text-amber-400">
                      DI
                    </span>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white sm:text-sm">
                        Digital India
                      </p>

                      <p className="text-[11px] text-slate-400 sm:text-xs">
                        Power to Empower
                      </p>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-cyan-400 transition-colors hover:text-cyan-300 sm:text-sm"
                  >
                    Visit Center
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics cards */}
          <div className="relative z-10 grid translate-y-1/2 grid-cols-2 gap-3 xl:grid-cols-4 xl:gap-4">
            {serviceStats.map((stat) => (
              <article
                key={stat.id}
                className="flex min-w-0 items-center gap-3 rounded-2xl bg-white p-3 text-slate-900 shadow-xl shadow-slate-900/10 sm:p-5"
              >
                <span
                  className={`grid size-10 shrink-0 place-items-center rounded-xl sm:size-14 sm:rounded-2xl ${stat.color}`}
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-5 sm:size-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {stat.icon}
                  </svg>
                </span>

                <div className="min-w-0">
                  <p className="font-display text-base font-bold sm:text-2xl">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-[10px] font-semibold leading-tight text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection