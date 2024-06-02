import AdminNavbar from "../atoms/AdminNavbar"
import AdminContainer from "../molecules/AdminContainer"

const Admin = () => {
  return (
    <div className="bg-admin-background">
       <AdminNavbar/>
       <AdminContainer/>
    </div>
  )
}

export default Admin