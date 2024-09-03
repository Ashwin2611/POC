import { useState } from "react"
import style from "./AddItem.module.css"

export default function AddItem({product,setSelectedItems}){

    const [item,setItem]=useState("")
    const [quantity,setQuantity]=useState("")

    const ItemHandler=()=>{
        console.log(quantity)
        if(quantity){
            const getItem=product.find((e)=>(e.strCategory==item))
            const obj={
                ...getItem,
                quantity:quantity*1
            }
            console.log(obj)
            setSelectedItems(obj)
        }
    }

    return(
        <div className={style.calculate}>
           <div className={style.Items}>
                <select className={style.selectItembtn} onClick={(e)=>setItem(e.target.value)}> 
                <option>Select Items</option>
                {product.map((e,i)=><option key={e.idCategory} value={e.strCategory}>{e.strCategory}</option>)}
                </select>
                <input type="text" placeholder="Quantity" className={style.quantitybtn} onChange={(e)=>setQuantity(e.target.value)}/>
                <button className={style.addbtn} onClick={ItemHandler}>Add</button>
           </div> 
           <div>
            <div className={style.tableId}>
                <input type="text" placeholder="Table No." className={style.tableNo}/>
                <input type="text" placeholder="item" className={style.tableNo}/>
            </div>
           </div>
        </div>
    )
}