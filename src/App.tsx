
import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'


function App() {
  return (
    <div className="flex flex-col max-w-[1000px mx-auto w-full]">
      <section className="min-h-screen flex flex-col">

        <Header />
        <Hero />

      </section>
      <Footer />
    </div>
  )
}

export default App
