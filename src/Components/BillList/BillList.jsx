import { useEffect, useState } from "react";
import style from "./BillList.module.css";

export default function BillList() {
  const [datas, setDatas] = useState([]);

  const loadData = () => {
    const data = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = JSON.parse(localStorage.getItem(key));
      let amount = 0;
      const name = [];
      const quantity = [];
      const price = [];
      const total = [];

      value.forEach((e) => {
        name.push(e.strCategory);
        quantity.push(e.quantity);
        price.push(e.price);
        total.push(e.total);
        amount += e.total;
      });
      // value.forEach((e)=>)
      data.push({ key, name, price, quantity, total, amount });
    }
    setDatas(data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className={style.tablecontainer}>
      <table className={style.table}>
        <tr>
          <th>User</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>total</th>
          <th>amount</th>
          {/* <th></th> */}
        </tr>
        {datas.map((e) => (
          <tr key={e.key} id={e.key}>
            <td>{e.key}</td>
            <td>
              {e.name.map((e, i) => (
                <div key={i}>{e}</div>
              ))}
            </td>
            <td>
              {e.quantity.map((e, i) => (
                <div key={i}>{e}</div>
              ))}
            </td>
            <td>
              {e.price.map((e, i) => (
                <div key={i}>{e}</div>
              ))}
            </td>
            <td>
              {e.total.map((e, i) => (
                <div key={i}>{e}</div>
              ))}
            </td>
            <td>{e.amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
