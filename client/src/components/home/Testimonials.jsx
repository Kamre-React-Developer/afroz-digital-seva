import Container from '../common/Container'

const testimonials = [
  {
    id: 1,
    initials: 'RK',
    name: 'Rohit Kumar',
    location: 'Muzaffarpur, Bihar',
    review:
      'Bahut accha experience raha. Mera caste certificate bahut jaldi ban gaya. Staff bhi bahut helpful hai.',
    service: 'RTPS Service',
    avatarStyle: 'bg-blue-600',
  },
  {
    id: 2,
    initials: 'NS',
    name: 'Neha Singh',
    location: 'Chhapra, Bihar',
    review:
      'Online form bharne mein madad kiya aur sahi guidance diya. Highly recommended for cyber cafe needs!',
    service: 'Exam Form',
    avatarStyle: 'bg-purple-600',
  },
  {
    id: 3,
    initials: 'AK',
    name: 'Amit Kumar',
    location: 'Patna, Bihar',
    review:
      'Fast service, genuine charges aur professional behaviour. Best digital seva kendra in our area.',
    service: 'Land Record',
    avatarStyle: 'bg-emerald-600',
  },
]

function StarRating() {
  return (
    <div
      className="flex items-center gap-0.5 text-lg text-amber-400"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          viewBox="0 0 24 24"
          className="size-4 fill-current sm:size-[18px]"
          aria-hidden="true"
        >
          <path d="m12 2.5 2.88 5.84 6.45.94-4.67 4.55 1.1 6.43L12 17.23l-5.76 3.03 1.1-6.43-4.67-4.55 6.45-.94L12 2.5Z" />
        </svg>
      ))}
    </div>
  )
}

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-[72px] bg-brand-navy py-16 text-white sm:py-20 lg:py-24"
    >
      <Container>
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            What Our Customers Say
          </h2>

          <p className="mt-2 text-base text-blue-200 sm:text-lg">
            Trusted by Thousands of Happy Customers
          </p>

          <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-brand-blue" />
        </div>

        {/* Testimonial cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group flex min-h-64 flex-col rounded-2xl border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand-blue/50 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-blue-950/30 sm:p-7"
            >
              {/* Customer information */}
              <div className="flex items-center gap-4">
                <div
                  className={`grid size-12 shrink-0 place-items-center rounded-full text-base font-bold text-white ${testimonial.avatarStyle}`}
                >
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {testimonial.name}
                  </h3>

                  <p className="mt-0.5 text-sm text-blue-200">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="mt-5">
                <StarRating />
              </div>

              {/* Review */}
              <blockquote className="mt-4 flex-1 text-sm italic leading-7 text-slate-200 sm:text-[15px]">
                “{testimonial.review}”
              </blockquote>

              {/* Service information */}
              <div className="mt-5 border-t border-white/10 pt-4">
                <p className="text-xs font-medium text-sky-400 sm:text-sm">
                  Verified Customer
                  <span className="mx-1.5 text-slate-500">•</span>
                  {testimonial.service}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Slider indicators — currently decorative */}
        <div
          className="mt-8 flex items-center justify-center gap-2"
          aria-hidden="true"
        >
          <span className="size-3 rounded-full bg-brand-blue" />
          <span className="size-3 rounded-full bg-slate-600" />
          <span className="size-3 rounded-full bg-slate-600" />
        </div>
      </Container>
    </section>
  )
}

export default Testimonials