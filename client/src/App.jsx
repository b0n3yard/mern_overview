import axios from 'axios'
import { useEffect, useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import viteLogo from '/vite.svg'
import Components from './components/index'
import {Landing,Auth,NotFound} from './pages/index'


function App() {
  const [user, setuser] = useState(null)

  // useEffect(()=>{
//   const fetch = async () =>{
//     try{ 
     

//    const people =  await axios.get(baseurl +'/people')
//    // const data = await people.json()
//      console.log(people.data)
//      setdata(people.data.results)
//    }catch(err){
//      console.log(err)
//    } finally{
//      setisloading(false)
     
//  }
//  }
//  fetch()
// },[])
  useEffect(()=>{
    const fetch = async ()=>{
      
      const res = await axios.get('/auth/authenticate')
      console.log(res.data)
      // const stuff = await res.json()
      setuser(res.data.user)
      // setisloading(false)
    }
    fetch()
  },[])

  return (
    <>
    
    <Components.Header setuser={setuser} user={user}/>
      
      <Container>
        <Routes>
          <Route path="/" element={<Landing user={user}/>} />
          <Route path='/register' element={<Auth islogin={false} setuser={setuser}/>}/>
          <Route path='/login' element={<Auth islogin={true} setuser={setuser}/>}/>


          
          {/* catch all 404, must be at the bottom */}
          <Route path='*' element={<NotFound/>}/>
        </Routes>

      </Container>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        </div>
        
    </>
  )
}

export default App
