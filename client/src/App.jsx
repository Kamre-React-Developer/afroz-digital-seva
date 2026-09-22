import Navbar from './components/layout/Navbar'

function App() {
  return (
    <>
      <Navbar />

      <main id="home" className="min-h-screen bg-brand-surface">
        <div className="grid min-h-[calc(100vh-72px)] place-content-center px-4 text-center">
          <h1 className="font-display text-4xl font-bold text-brand-blue">
            Afroz Digital Seva
          </h1>

          <p className="mt-3 text-brand-muted">
            Homepage Hero Section Coming Next
          </p>
        </div>
      </main>
    </>
  )
}

export default App