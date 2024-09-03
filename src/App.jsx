import BillList from "./Components/BillList/BillList"
import POC from "./Components/POC-Home/POC"
import { createBrowserRouter,RouterProvider } from "react-router-dom"

const route=createBrowserRouter([
  {
    path:'/',
    children:[
      {
        index:true,
        element:<POC/>
      },
      {
        path:"BillList",
        element:<BillList/>
      }
    ]
  }
])

export default function App(){
  return(  
    <RouterProvider router={route}>
      
    </RouterProvider>
  )
}