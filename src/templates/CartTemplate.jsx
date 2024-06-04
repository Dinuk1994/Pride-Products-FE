import ComponentFooter from "../common/ComponentFooter"
import ComponentNavbar from "../common/ComponentNavbar"
import Cart from "../organism/Cart"

const CartTemplate = () => {
  return (
    <div>
        <ComponentNavbar/>
        <Cart/>
        <ComponentFooter/>
    </div>
  )
}

export default CartTemplate