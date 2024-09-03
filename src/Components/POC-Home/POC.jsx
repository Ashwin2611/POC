import { useEffect, useState } from "react";
import Card from "../Card/Card";
import style from "./POC.module.css";
import Table from "../Table/Table";
import AddItem from "../AddItem/AddItem";
import Button from "../Button/Button";
import { data } from "./../../Reportdata";
import { useDispatch } from "react-redux";
import ItemStore from "../features/ItemStore";
import { addItem } from "../features/Store";
import AddNewItem from "../AddNewItem/AddNewItem";
export default function POC() {
  const [products, setProducts] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [newBill,setNewBill]=useState(false)
  const [isNewItem,setIsNewItem]=useState(false);
  const dispatch=useDispatch()

  const FetchHandler = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const res = await response.json();
    if (response.ok) {
      setProducts(res.categories);
    }
  };

  useEffect(() => {
    FetchHandler();
  }, []);

  const ItemHandler = (item) => {
    let value; 
    if(item.price==null){
      value = Math.ceil(Math.random() * (300 - 100) + 100);
    }else{
      value=item.price;
    }
    const val = selectedItems.map((e) => e);
    const obj = {
      ...item,
      price: value,
      total: value,
    };
    if (!val.length) {
      val.push(obj);
    } else {
      const ht = val.filter((e, i) => {
        if (e.idCategory == item.idCategory) {
          const tol = (e.quantity + item.quantity) * e.price;
          const obj2 = {
            ...e,
            quantity: e.quantity + item.quantity,
            total: tol,
          };
          return (val[i] = obj2);
        }
      });
      if (!ht.length) {
        val.push(obj);
      }
    }
    setSelectedItems(val);
    // console.log(val)
    dispatch((addItem(val)))
    console.log(ItemStore.getState())
  };

  const RemovedItem = (item) => {
    setSelectedItems(item);
  };

  const SavedItem = (list, name) => {
    if (!list.length) {
      localStorage.setItem(name, JSON.stringify(selectedItems));
    } else {
      localStorage.setItem(name, JSON.stringify(list));
    }
  };

  const NewBill=(val)=>{
    console.log(val)
    console.log("hello")
    // console.log(newBill)
    setNewBill(val)
    // console.log(val)
  }

  const Billed=(val,prods)=>{
    setSelectedItems(prods)
    console.log("haaaa")
    console.log(val)
    // console.log(newBill)
    setNewBill(val)
    console.log(prods)
  }
  
  const AddItemHandler=(e)=>{
    setIsNewItem((e)=>!e);
    // console.log("hey ashinw")
  }

  const NewProduct=(item)=>{
    const filt=products.filter((e)=>item.strCategory==e.strCategory);
    console.log(filt.length)
    if(filt.length==0){
      const obj={
        ...item,
        idCategory:(products.length+1)+''
      }
      products.push(obj);
      setProducts(products);
      console.log(products)
      setIsNewItem(false)
    }
  }

  return (
    <>
      {isNewItem && <AddNewItem setIsNewItem={AddItemHandler} itemsAdded={NewProduct}/>}
      <div className={style.ProductContainer}>
        <div className={style.Prod}>
          <Table
            items={selectedItems}
            RemoveItem={RemovedItem}
            SaveItem={SavedItem}
            setNewBill={newBill}
            result={Billed}
          />
          {products.length && (
            <AddItem product={products} setSelectedItems={ItemHandler} />
          )}
        </div>
        <div className={style.List}>
          <Button datas={data} setNewBill={NewBill}/>
        </div>
        <div className={style.products}>
          {products.length &&
            products.map((e) => (
              <Card product={e} key={e.id} setSelectedItems={ItemHandler} />
            ))}
            <div className={style.AddItemicon} onClick={AddItemHandler}>
              <img src="https://cdn2.iconfinder.com/data/icons/iconika-productivity-kit-vol-3/512/Add_item_positive-512.png" height={90} width={90}/>
            </div>
        </div>
      </div>
    </>
  );
}
