import AdminNavbar from "../atoms/AdminNavbar"
import ComponentFooter from "../common/ComponentFooter"
import AdminContainer from "../molecules/AdminContainer"

const Admin = () => {
  return (
    <div className="bg-admin-background">
       <AdminNavbar/>
       <AdminContainer/>
       <ComponentFooter/>
    </div>
  )
}

export default Admin