
import Hero from './components/view/hero/page'
import Newsletter from './components/view/newsletter/page'
import ProductCarousel from './components/view/productcarousel/page'


export default function Home() {
  return (
    <div >
      <Hero />
      <ProductCarousel />
      <Newsletter />
    </div>
  )
}
