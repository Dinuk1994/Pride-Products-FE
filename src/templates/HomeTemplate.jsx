
import Navbar from '../common/ComponentNavbar'
import ComponentCarousel from '../atoms/Carousel'
import SearchBar from '../organism/SearchBar'
const HomeTemplate = () => {
  return (
    <div className='bg-slate-600'>
      <Navbar />
      <ComponentCarousel />
      <SearchBar/>
    </div>
  )
}

export default HomeTemplate