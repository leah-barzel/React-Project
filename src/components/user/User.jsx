import { Outlet } from "react-router-dom"
import BusinessData from "../BusinessData"
import { observer } from "mobx-react"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import MyDatePicker from "../MyDatePicker"

const User = (observer(() => {
    return (
        <>
            <BusinessData />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MyDatePicker />
            </LocalizationProvider>
        </>
    )
}))

export default User



/*
npm install react-router-dom localforage match-sorter sort-by
npm i mobx mobx-react
*/
