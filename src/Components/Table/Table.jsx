import { useEffect, useState } from "react";
import style from "./Table.module.css";
export default function Table({ items, RemoveItem ,SaveItem,setNewBill,result}) {

  const [listItem,setListItem]=useState(items)
  const [total,setTotal]=useState(0)

  const Item = (val) => {
    const filt = items.filter((e) => e.idCategory !== items[val].idCategory);
    console.log(filt);
    totalHandler(filt)
    setListItem(filt)
    RemoveItem(filt);
  };

  const minus = (val) => {
    console.log("object"+val)
    const filt = items.find((e) => e.idCategory === items[val].idCategory);
    console.log(filt)
    if (filt.quantity > 1) {
      const tol = (filt.quantity - 1) * filt.price;
      const obj = {
        ...filt,
        quantity: filt.quantity - 1,
        total: tol,
      };
      // console.log(obj)
      // console.log(items)
      // items[val] = obj;
      const it=items.map((e,i)=>{
        if(e.idCategory*1==obj.idCategory*1){
          return obj;
        }else{
          return e;
        }
      })
      console.log(it)
      // const it=items.map((e)=>e)
      // // console.log(items);
      totalHandler(it)
      setListItem(it)
      RemoveItem(it);
    }
  };

  const SaveHandler=()=>{
    const name=prompt("name")
    console.log(items)
    console.log(listItem)
    SaveItem(listItem,name)
  }

  const plus = (val) => {
    console.log("plus")
    const filt = items.find((e) => e.idCategory === items[val].idCategory);
    console.log(filt);
    const tol = (filt.quantity + 1) * filt.price;
    const obj = {
      ...filt,
      quantity: filt.quantity + 1,
      total: tol,
    };
    // items[val] = obj;
    // console.log(items[val]);
    const it=items.map((e,i)=>{
      if(e.idCategory*1==obj.idCategory*1){
        return obj;
      }else{
        return e;
      }
    })
    console.log(it)
    totalHandler(it)
    setListItem(it)
    RemoveItem(it);
  };

  const totalHandler=()=>{
    console.log('amount')
    const amount=items.reduce((acc,e)=>acc+e.total,0)
    setTotal(amount)
  }

  useEffect(()=>{
    console.log(setNewBill)
    if(setNewBill){
      // console.log()
      // const arr=listItem.map((e,i)=>{
      //   listItem.splice(i,1)
      // })
      listItem.splice(0,listItem.length)
      console.log(listItem)
      result(false,listItem)
    }else{
      totalHandler()
    }
    console.log("j")
  },[items,setNewBill,listItem])

  return (
    <div className={style.tablecontainer}>
      <h1 className={style.total}>Total: <span>{total}</span></h1>
      <table border={1} className={style.table}>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Cancel Item</th>
          <th>Quantity</th>
        </tr>
        {items.map((e, i) => (
          <tr key={i}>
            {console.log(e)}
            <td>{e.strCategory}</td>
            <td>{e.price}</td>
            <td>{e.quantity}</td>
            <td>{e.total}</td>
            <td>
              <button onClick={() => Item(i)} className={style.cancelbtn}>
                Cancel
              </button>
            </td>
            <td>
              <button className={style.quanbtn} onClick={() => minus(i)}>
                -
              </button>
              {e.quantity}
              <button className={style.quanbtn} onClick={() => plus(i)}>
                +
              </button>
            </td>
          </tr>
        ))}
      </table>
      <button className={style.savebtn} onClick={SaveHandler}>Save</button>
    </div>
  );
}
