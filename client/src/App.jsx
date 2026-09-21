import Container from './components/common/Container'

function App() {
  return (
    <main className="min-h-screen bg-brand-surface py-20">
      <Container>
        <div className="rounded-2xl bg-brand-navy p-10 text-center text-white">
          <h1 className="font-display text-4xl font-bold text-brand-blue">
            Afroz Digital Seva
          </h1>

          <p className="mt-3 text-slate-300">
            All Government and Online Services Under One Roof
          </p>

          <p className="mt-5 font-handwriting text-3xl text-amber-300">
            Aapka Kaam Hamari Zimmedari
          </p>
        </div>
      </Container>
    </main>
  )
}

export default App