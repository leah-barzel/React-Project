import { useState } from "react"
import AppStore from "../store/AppStore"
import { observer } from "mobx-react"

const BusinessData = (observer(() => {
    const [editForm, setEditForm] = useState(false)

    return (
        <>
            {editForm ? <div>edit business data</div> : <div>business data to view</div>}

            {AppStore.isLogin && <button onClick={() => setEditForm(!editForm)}>edit toggle</button>}
        </>
    )
}))

export default BusinessData
