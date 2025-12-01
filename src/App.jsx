import { useEffect, useState } from 'react'
import {useDispatch} from "react-redux"
import authService from "./appWrite/auth"
import './App.css'
import {login, logout} from "./store/authSlice"

function App() {
const [loading, setLoading]= useState(true);
const dispatch = useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if (userData) {dispatch(login({userData}))}
    else { dispatch(dispatch(logout()))}
  })
  .finally(()=> setLoading(false))
},[])

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
<div className='w-full block'>
  <Header />
  <main>
    {/* <Outlet /> */}
  </main>
  <Footer />
</div>
    </div>
  ) ()
}

export default App
