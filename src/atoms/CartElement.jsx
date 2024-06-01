import { FaCartArrowDown } from "react-icons/fa";
const CartElement = () => {
  return (
    <div className="flex pl-10 absolute top-10 right-[200px]">
        <FaCartArrowDown className="size-8 text-yellow-300"/>
        <label htmlFor="" className="absolute text-white font-bold ml-8 -mt-2 ">0</label>
    </div>
  )
}

export default CartElement