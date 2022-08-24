import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Users() {
 const [users,setUsers] = useState([]);

 const [isLoading,setLoading] = useState(false)

useEffect(()=>{
  loadData();
},[])

let loadData= async ()=>{
  setLoading(true)
let users = await axios.get('https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/data')
console.log(users)
setUsers(users.data)
setLoading(false)
}

let userDelete =async(id)=>{
try {
  await axios.delete(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/data/${id}`)
  loadData();
} catch (error) {
  
}

}


  return (
    <div className='container-fluid'>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 className="h3 mb-0 text-gray-800">User</h1>
                        <Link to="/Portal/Create-Users" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"> Create user</Link>
                        
                    </div>
                    {
                          isLoading ?(<div class="mx-auto" style={{width: "200px"}}>
                            <div className="spinner-border text-primary" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                        </div>
                        ): <div className="card shadow mb-4">
                          <div className="card-header py-3">
                              <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                             
                          </div>
                           <div className="card-body">
                          <div className="table-responsive">
                              <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                  <thead>
                                      <tr>
                                      <th>#id</th>
                                          <th>Name</th>
                                          <th>Position</th>
                                          <th>Office</th>
                                          <th>Age</th>
                                          <th>Start date</th>
                                          <th>Salary</th>
                                          <th>Action</th>
                                      </tr>
                                  </thead>
                                  <tfoot>
                                      <tr>
                                      <th>#id</th>
                                          <th>Name</th>
                                          <th>Position</th>
                                          <th>Office</th>
                                          <th>Age</th>
                                          <th>Start date</th>
                                          <th>Salary</th>
                                          <th>Action</th>
                                      </tr>
                                  </tfoot>
                                  <tbody>
                                     
                                      {
                                        users.map((value,index)=>{
                                          return   <tr key={index}>
                                            <td>{value.id}</td>
                                          <td>{value.userName}</td>
                                          <td>{value.position}</td>
                                          <td>{value.office}</td>
                                          <td>{value.age}</td>
                                          <td>{value.startDate}</td>
                                          <td>${value.salary}</td>
                                          <td>
                                            <Link to={`/Portal/Users/${value.id}`} className='btn btn-sm btn-warning mr-2'>View</Link>
                                            <Link to={`/Portal/User/edit/${value.id}`} className='btn btn-sm btn-info mr-2'>Edit</Link>
                                            <button  onClick={()=>{userDelete(value.id)}} className='btn btn-sm btn-danger mr-2'>Delete</button>
                                          </td>
                                      </tr>
                                          
                                          
                                        })
                                      }
                                      
                                  </tbody>
                              </table>
                          </div>
                      </div>
                      </div>
                        }
                        
                    
                   
                    </div>
  )
}

export default Users