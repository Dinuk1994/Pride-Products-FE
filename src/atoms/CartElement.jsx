import { FaCartArrowDown } from "react-icons/fa";
import { useNavigate} from 'react-router-dom'
const CartElement = () => {
    const navigate = useNavigate();
  
    const goToCart = () => {
      navigate("/cart");
    };
  return (
    <div className="flex pl-10 absolute top-10 right-[200px]">
        <button onClick={goToCart}><FaCartArrowDown className="size-8 text-yellow-300"/></button>
        <label htmlFor="" className="absolute text-white font-bold ml-8 -mt-2 ">0</label>
    </div>
  )
}

export default CartElement