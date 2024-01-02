import { observer } from "mobx-react"
import AppStore from "../store/AppStore"

const Login = (observer(()=> {

    return (
        <>
            <button onClick={()=>AppStore.setIsLogin(true)}>login</button>
        </>
    )
}))

export default Login
