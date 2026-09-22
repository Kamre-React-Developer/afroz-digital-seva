import Container from '../common/Container'

const trustPoints = [
  'Trusted Digital Services',
  'Transparent Service Charges',
  'Fast Application Support',
]

function HeroSection() {
  return (
    <section
  id="home"
  className="relative scroll-mt-18 overflow-hidden bg-brand-surface py-16 sm:py-20 lg:py-24"
>
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="absolute -left-32 top-10 size-72 rounded-full bg-brand-blue/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-32 bottom-0 size-80 rounded-full bg-brand-green/10 blur-3xl"
      />

      <Container>
        <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-brand-blue/10 px-4 py-2 text-sm font-semibold text-brand-blue">
              <span className="size-2 rounded-full bg-brand-green" />
              Your Trusted Digital Seva Partner
            </span>

            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-brand-text sm:text-5xl lg:text-6xl">
              Government and Digital Services{' '}
              <span className="text-brand-blue">Made Simple</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg lg:mx-0">
              Apply for government schemes, certificates, online forms and
              essential digital services with reliable assistance from Afroz
              Digital Seva.
            </p>

            {/* Search box */}
            <form
              className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-200/60 sm:flex-row lg:mx-0"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="service-search" className="sr-only">
                Search for a service
              </label>

              <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-5 shrink-0 text-brand-muted"
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
                  placeholder="Search services, schemes or certificates"
                  className="min-w-0 flex-1 bg-transparent py-3 text-sm text-brand-text outline-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-md shadow-blue-500/20 transition-all duration-200 hover:bg-blue-600 active:scale-95"
              >
                Search Service
              </button>
            </form>

            {/* Trust points */}
            <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm font-medium text-brand-muted"
                >
                  <span className="grid size-5 place-items-center rounded-full bg-brand-green/10 text-brand-green">
                    ✓
                  </span>
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right service card */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-4xl bg-linear-to-br from-brand-blue/20 to-brand-green/20 blur-2xl" />

            <div className="relative overflow-hidden rounded-4xl bg-brand-navy p-6 text-white shadow-2xl sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    Digital Service Centre
                  </p>

                  <h2 className="mt-1 font-display text-2xl font-bold">
                    How can we help?
                  </h2>
                </div>

                <span className="grid size-12 place-items-center rounded-2xl bg-linear-to-br from-brand-blue to-brand-green text-xl font-bold">
                  A
                </span>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  ['Certificates', 'Birth, caste and income'],
                  ['Government Forms', 'State and central forms'],
                  ['Online Services', 'PAN, Aadhaar and more'],
                  ['Print & Scan', 'Document assistance'],
                ].map(([title, description]) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors duration-200 hover:bg-white/10"
                  >
                    <span className="mb-4 block size-2 rounded-full bg-brand-green" />

                    <h3 className="text-sm font-semibold">{title}</h3>

                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {description}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between rounded-2xl bg-white/10 p-4">
                <div>
                  <p className="text-xs text-slate-400">Support available</p>
                  <p className="mt-1 text-sm font-semibold">
                    Visit or contact our centre
                  </p>
                </div>

                <span className="flex items-center gap-2 text-sm font-semibold text-brand-green">
                  <span className="size-2 rounded-full bg-brand-green" />
                  Open
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection