import style from "./Card.module.css"
export default function Card({product,setSelectedItems}){
    console.log(product)
    const {strCategoryThumb,strCategory,idCategory}=product

    const ItemHandler=()=>{
        // console.log(product)
        const obj={
            ...product,
            quantity:1
        }
        setSelectedItems(obj)
    }

    return(
        <div className={style.Card} onClick={ItemHandler} id={strCategory}>
            <img src={strCategoryThumb} height={68} width={68} alt={strCategory}/>
            <p className={style.productName}>{strCategory}</p>
        </div>
    )
}