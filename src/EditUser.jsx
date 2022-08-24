import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
  const params = useParams();
  let navigate = useNavigate();
  useEffect(()=>{
    loadData();

   },[])

  
    const formik = useFormik ({
        initialValues:{
          userName:'',
          position:'',
          office:'',
          age:'',
          startDate:'',
          salary:''
        },
        validate:(values)=>{
    
         let errors = {};
          
         if(values.userName===""){
          errors.userName = "Enter user name*";
         }
         if(values.position===""){
          errors.position = "Enter Position*";
         }
         if(values.office===""){
          errors.office = "Enter office* ";
         }
         if(values.age===""){
          errors.age = "Enter a valid input* ";
         }
        
         if(values.startDate===""){
          errors.startDate = "Enter start date* ";
         }
         if(values.salary===""){
          errors.salary = "Enter salary*";
         }
    
          
    return errors;
        },
        onSubmit:async (values)=>{
       await axios.put(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/data/${params.userId}`,values)
       navigate("/Portal/Users")
        }
      })
     

     let loadData = async (values)=>{
      try{
        let user = await axios.get(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/data/${params.userId}`,values)
        formik.setValues({
          userName: user.data.userName,
          position:user.data.position,
          office:user.data.office,
          age:user.data.age,
          startDate:user.data.startDate,
          salary:user.data.salary
        })
      }
      catch(error){
console.log(error)
      }
     }

    
     
      return (
        <>
          <div>CreateUser</div>
          <div className="container">
          <form onSubmit={formik.handleSubmit}>
          <div className="row ">
              <div className="col-lg-6 p-2">
    
                <label for="name">User name</label>
                <input
                 className={`form-control ${formik.errors.userName ? `input-error` : ``}`}
                 id="name"
                  type={'text'}
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  name="userName"
                 
                  />
    <span style={{color:"red"}}>{formik.errors.userName}</span>
              </div>
              <div className="col-lg-6 p-2">
    
                <label for="posi">Position</label>
                <input className={`form-control ${formik.errors.position ? 'input-error' : ''}`} 
                id="posi" 
                type={"text"} 
                value={formik.values.position} 
                onChange={formik.handleChange}
                name="position"
                />
                <span style={{color:"red"}}>{formik.errors.position}</span>
    
              </div>
              <div className="col-lg-6 p-2">
    
                <label for="offi">Office</label>
                <input className={`form-control ${formik.errors.office ? 'input-error' : ''}`}
                id="offi" 
                type={"text"}
                value={formik.values.office}
                onChange={formik.handleChange}
                name="office"
                />
                <span style={{color:"red"}}>{formik.errors.office}</span>
    
              </div>
              <div className="col-lg-6 p-2">
    
                <label for="age">Age</label>
                <input className={`form-control ${formik.errors.age ? 'input-error' : ''}`}
                id="age" 
                type={"text"}
                value={formik.values.age}
                onChange={formik.handleChange}
                name="age"
                />
                <span style={{color:"red"}}>{formik.errors.age}</span>
    
              </div>
              <div className="col-lg-6 p-2">
    
                <label for="sdate">Start Date</label>
                <input className={`form-control ${formik.errors.startDate ? 'input-error' : ''}`}
                 id="sdate"
                  type={"text"}
                  value={formik.values.startDate}
                  onChange={formik.handleChange}
                  name="startDate"
                  
                  />
                  <span style={{color:"red"}}>{formik.errors.startDate}</span>
    
              </div>
              <div className="col-lg-6 p-2">
    
                <label for="salar">Salary</label>
                <input className={`form-control ${formik.errors.salary ? 'input-error' : ''}`} 
                id="salar" 
                type={"text"}
                value={formik.values.salary}
                onChange={formik.handleChange}
                name="salary"
                />
                <span style={{color:"red"}}>{formik.errors.salary}</span>
    
              </div>
    
              <div className="col-lg-6 p-2">
    
    
    <input className='btn btn-primary' disabled={!formik.isValid}  type={'submit'} value="Submit"/>
    
    </div>
    
    
            </div>
          </form>
    
          </div>
        </>
      )
}

export default EditUser;