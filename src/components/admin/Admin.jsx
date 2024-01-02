import { observer } from "mobx-react"
import AppStore from "../../store/AppStore"
import Login from "../Login"
import BusinessAdmin from "../BusinessAdmin"

const Admin = (observer(() => {

    return (
        <>
            {!AppStore.isLogin ?
                <Login /> :
                <BusinessAdmin />
            }
        </>
    )
}))

export default Admin
