import axios from "axios";
import { useEffect, useState } from "react"
import { Link} from "react-router-dom"


function Products() {
const [products,setProducts] = useState([]);
const [isLoading,setLoading] = useState(false);



useEffect(()=>{
loadData();
},[])

let loadData = async () =>{
setLoading(true)
let productData = await axios.get('https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/products')
setProducts(productData.data)
setLoading(false)
}

let deletePro = async (id)=>{
try {
  await axios.delete(`https://62d7f5d59c8b5185c77fdad4.mockapi.io/api/try1/products/${id}`);
  loadData();
} catch (error) {
  
}
}


  return (
    <>
      <div className='container-fluid'>
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Products</h1>
          <Link to="/Portal/AddProduct" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">Add product</Link>

        </div>
        {
          isLoading ? (<div class="mx-auto" style={{width: "200px"}}>
          <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      </div>
      ) :<div className="card shadow mb-4">
      <div className="card-header py-3">
        <h6 className="m-0 font-weight-bold text-primary">Product updates</h6>

      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
            <thead>
              <tr>
                <th>#id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Units sold</th>
                <th>Price</th>
                <th>Exp.date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>#id</th>
                <th>Name</th>
                <th>Category</th>
                <th>Units sold</th>
                <th>Price</th>
                <th>Exp.date</th>
                <th>Action</th>
              </tr>
            </tfoot>
            <tbody>
            {
              products.map((item,index)=>{

                return <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.category}</td>
                  <td>{item.unitsold}</td>
                  <td>$ {item.price}</td>
                  <td>{item.expdate}</td>
                  <td>
                    <Link to={`/Portal/AddProduct/view/${item.id}`} className="btn btn-sm btn-warning mr-2">View</Link>
                    <Link to={`/Portal/AddProduct/edit/${item.id}`} className="btn btn-sm btn-info mr-2">Edit</Link>
                    <button onClick={()=>{deletePro(item.id)}} className="btn btn-sm btn-danger mr-2">Delete</button>
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
    </>
  )
}

export default Products