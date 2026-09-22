import Container from '../common/Container'

const steps = [
  {
    number: '1',
    title: 'Choose Service',
    description:
      'Select the service you need from our extensive categories.',
    color: 'blue',
    icon: 'search',
  },
  {
    number: '2',
    title: 'Provide Details',
    description:
      'Share required documents on WhatsApp or visit center.',
    color: 'green',
    icon: 'document',
  },
  {
    number: '3',
    title: 'Make Payment',
    description:
      'Pay nominal service charges securely via UPI or cash.',
    color: 'orange',
    icon: 'payment',
  },
  {
    number: '4',
    title: 'Get Updates',
    description:
      'Track application and receive final certificate smoothly.',
    color: 'purple',
    icon: 'complete',
  },
]

const colorStyles = {
  blue: {
    iconBox: 'bg-blue-50 text-blue-600',
    number: 'bg-blue-600',
    hover: 'hover:border-blue-200',
  },
  green: {
    iconBox: 'bg-emerald-50 text-emerald-600',
    number: 'bg-emerald-600',
    hover: 'hover:border-emerald-200',
  },
  orange: {
    iconBox: 'bg-orange-50 text-orange-500',
    number: 'bg-orange-500',
    hover: 'hover:border-orange-200',
  },
  purple: {
    iconBox: 'bg-purple-50 text-purple-600',
    number: 'bg-purple-600',
    hover: 'hover:border-purple-200',
  },
}

function StepIcon({ name }) {
  if (name === 'search') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5" />
      </svg>
    )
  }

  if (name === 'document') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M7 2.75h7l4 4V21.25H7a2 2 0 0 1-2-2V4.75a2 2 0 0 1 2-2Z" />
        <path d="M14 2.75v4h4M8.5 12h6M8.5 16h6" />
      </svg>
    )
  }

  if (name === 'payment') {
    return (
      <svg
        viewBox="0 0 24 24"
        className="size-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="8.5" />
        <path d="M14.5 8.5c-.6-.65-1.45-1-2.45-1-1.3 0-2.3.68-2.3 1.75 0 2.75 4.75 1.25 4.75 4 0 1.08-1 1.75-2.45 1.75-1.15 0-2.1-.42-2.75-1.2M12 5.75v12.5" />
      </svg>
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="size-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.5 12 2.25 2.25L15.8 9.2" />
    </svg>
  )
}

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-[72px] bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-text sm:text-4xl">
            How It Works?
          </h2>

          <p className="mt-2 text-base text-brand-muted sm:text-lg">
            Get Your Work Done in 4 Simple Steps
          </p>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-brand-blue" />
        </div>

        {/* Steps */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {steps.map((step) => {
            const styles = colorStyles[step.color]

            return (
              <article
                key={step.number}
                className={`group rounded-2xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${styles.hover}`}
              >
                <div className="relative mx-auto w-fit">
                  <div
                    className={`grid size-20 place-items-center rounded-full transition-transform duration-300 group-hover:scale-105 ${styles.iconBox}`}
                  >
                    <StepIcon name={step.icon} />
                  </div>

                  <span
                    className={`absolute -right-1 -top-1 grid size-8 place-items-center rounded-full text-sm font-bold text-white shadow-md ${styles.number}`}
                  >
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-brand-text">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-brand-muted">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default HowItWorks