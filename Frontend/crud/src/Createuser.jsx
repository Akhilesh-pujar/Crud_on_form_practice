import  { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
function Createuser() {
    const [name , setname] = useState()
    const [email , setemail] = useState()
    const [age , setage] = useState()
    const navigate = useNavigate()

    const submit = (e) =>{
        e.preventDefault();
        axios.post("http://localhost:3001/createuser",{name,email,age})
        .then(res =>{

         console.log(res)
        navigate('/')
        })
        .catch(err => console.log(err))
    }


  return (
    <div>
        <div>
            <form onSubmit={submit}>
                <h2>Add user</h2>
                <div>
                    <input placeholder='Enter Name' type='text'
                     onChange={(e)=>setname(e.target.value)}/>
                </div>
                <div>
                    <input placeholder='Enter Mail' type='email'
                     onChange={(e)=>setemail(e.target.value)}/>
                </div>
                <div>
                    <input placeholder='Enter Age' type='number'
                     onChange={(e)=>setage(e.target.value)}/>
                </div>
                <button>Submit</button>
            </form>

        </div>
      
    </div>
  )
}

export default Createuser
