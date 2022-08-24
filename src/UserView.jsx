import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';



function UserView() {

  

    const params = useParams()
    

    const [userData,setUserData] = useState({})


    useEffect(()=>{
      loadUser();
          
          },[])

    let loadUser= async ()=>{
      try{
let user = await axios.get(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/data/${params.userId}`)
setUserData(user.data)

      }
      catch(error){
console.log(error)
      }
    }

    
   
  return (
    
    <div className='container'><h2>UserView</h2>
      <h3>Id: {userData.id}</h3>
        <h4 style={{color:"red"}}>Name: {userData.userName}</h4>
        <h4>Position: {userData.position}</h4>
        <h4>Office: {userData.office}</h4>
        <h4>Age: {userData.age}</h4>
        <h4>Salary: {userData.salary}</h4>
        
        <h4>Start date: {userData.startDate}</h4>
        
    </div>
  
  )
}

export default UserView;