import Container from '../common/Container'

const benefits = [
  {
    title: 'Experienced Staff',
    icon: 'user',
    iconStyle: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Affordable Charges',
    icon: 'money',
    iconStyle: 'bg-rose-100 text-rose-500',
  },
  {
    title: 'Fast & Reliable',
    icon: 'bolt',
    iconStyle: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Secure & Genuine',
    icon: 'shield',
    iconStyle: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'One Stop Solution',
    icon: 'services',
    iconStyle: 'bg-sky-100 text-sky-600',
  },
  {
    title: 'Customer Support',
    icon: 'support',
    iconStyle: 'bg-indigo-100 text-indigo-600',
  },
]

function BenefitIcon({ name }) {
  const commonProps = {
    viewBox: '0 0 24 24',
    className: 'size-7',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  }

  if (name === 'user') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="8" r="3.25" />
        <path d="M6.5 20v-2.25A5.5 5.5 0 0 1 12 12.25a5.5 5.5 0 0 1 5.5 5.5V20Z" />
      </svg>
    )
  }

  if (name === 'money') {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M14.25 8.5c-.55-.65-1.35-1-2.3-1-1.25 0-2.2.65-2.2 1.7 0 2.7 4.5 1.3 4.5 4 0 1.05-.95 1.75-2.35 1.75-1.05 0-2-.4-2.65-1.15M12 5.75v12.5" />
      </svg>
    )
  }

  if (name === 'bolt') {
    return (
      <svg {...commonProps}>
        <path d="m13.5 2.75-7 10h5l-1 8.5 7-11h-5Z" />
      </svg>
    )
  }

  if (name === 'shield') {
    return (
      <svg {...commonProps}>
        <path d="M12 2.75 19 5.5v5.25c0 4.5-2.75 8-7 10.5-4.25-2.5-7-6-7-10.5V5.5Z" />
        <path d="m8.75 11.75 2.1 2.1 4.4-4.45" />
      </svg>
    )
  }

  if (name === 'services') {
    return (
      <svg {...commonProps}>
        <path d="M5 8.25h14v11H5Z" />
        <path d="M8 8.25V5.5h8v2.75M5 12h14" />
      </svg>
    )
  }

  return (
    <svg {...commonProps}>
      <path d="M4.5 13.5v-3a7.5 7.5 0 0 1 15 0v3" />
      <path d="M4.5 12H3.25v5H6v-5ZM19.5 12h1.25v5H18v-5ZM19.5 17c0 2-1.75 3.25-4.25 3.25H13" />
      <path d="m8.5 8.25 7 7M15.5 8.25l-7 7" />
    </svg>
  )
}

function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="scroll-mt-[72px] bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl">
            Why Choose Afroz Digital Seva?
          </h2>

          <p className="mt-2 text-base text-brand-muted sm:text-lg">
            Because Your Time, Trust and Satisfaction Matters
          </p>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-brand-blue" />
        </div>

        {/* Benefit cards */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 lg:gap-5">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group flex min-h-32 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 px-3 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg"
            >
              <div
                className={`grid size-12 place-items-center rounded-full transition-transform duration-300 group-hover:scale-110 ${benefit.iconStyle}`}
              >
                <BenefitIcon name={benefit.icon} />
              </div>

              <h3 className="mt-4 text-sm font-bold leading-5 text-brand-text">
                {benefit.title}
              </h3>
            </article>
          ))}
        </div>

        {/* Call-to-action banner */}
        <div className="mt-12 overflow-hidden rounded-2xl bg-linear-to-r from-blue-900 via-brand-navy to-brand-blue px-6 py-9 text-white shadow-xl sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="max-w-3xl text-center lg:text-left">
            <p className="font-['Caveat'] text-3xl font-bold text-amber-400 sm:text-4xl">
              Digital Seva, Digital Bihar
            </p>

            <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Digital India – Aapke Saath Hamesha
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-100 sm:text-base">
              Muzaffarpur aur aas-paas ke sabhi nagrikon ke liye
              vishwasniya cyber cafe evam digital seva kendra.
            </p>
          </div>

          <div className="mt-7 flex justify-center lg:mt-0 lg:shrink-0">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-amber-400 px-7 py-3 text-base font-bold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-amber-300 focus:outline-none focus:ring-4 focus:ring-amber-300/40"
            >
              Visit Us Today
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyChooseUs