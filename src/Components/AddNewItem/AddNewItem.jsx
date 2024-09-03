import { useState } from "react"
import style from "./AddNewItem.module.css"
export default function AddNewItem({setIsNewItem,itemsAdded}){
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [comment,setComment]=useState("");
    const [imageLink,setImageLink]=useState("");
    const cancel=()=>{
        setIsNewItem(false)
    }
    const addItem=()=>{
        const obj={
            idCategory:0,
            strCategory:name,
            strCategoryThumb:imageLink,
            strCategoryDescription:comment,
            price:price*1
        }
        itemsAdded(obj)
    }
    return(
        <div className={style.FullScreen}>
            <div className={style.mainScreen}>
                <h2>Add New Item</h2>
                <input className={style.text} type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
                <input className={style.text} type="text" placeholder="Price" onChange={(e)=>setPrice(e.target.value)}/>
                <input className={style.text} type="text" placeholder="Comments" onChange={(e)=>setComment(e.target.value)}/>
                <input className={style.text} type="text" placeholder="ImageLink" onChange={(e)=>setImageLink(e.target.value)}/>
                <div className={style.btn}>
                    <button className={style.addbtn} onClick={addItem}>Add</button>
                    <button className={style.cancelbtn} onClick={cancel}>Cancel</button>
                </div>
            </div>
        </div>
    )
}