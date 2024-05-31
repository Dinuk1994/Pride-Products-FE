
import Navbar from '../common/ComponentNavbar'
import ComponentCarousel from '../atoms/Carousel'
import SearchBar from '../organism/SearchBar'
import ComponentFooter from '../common/ComponentFooter'
import CardCollection from '../organism/CardCollection'
const HomeTemplate = () => {
  return (
    <div className='bg-slate-600'>
      <Navbar />
      <ComponentCarousel />
      <SearchBar/>
      <CardCollection/>
      <ComponentFooter/>
    </div>
  )
}

export default HomeTemplate