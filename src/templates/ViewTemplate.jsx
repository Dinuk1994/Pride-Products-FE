import ComponentFooter from "../common/ComponentFooter"
import ComponentNavbar from "../common/ComponentNavbar"
import ViewCard from "../molecules/ViewCard"


const ViewTemplate = () => {
    return (
        <div>
            <ComponentNavbar/>
            <ViewCard/>
            <ComponentFooter/>
        </div>
    )
}

export default ViewTemplate