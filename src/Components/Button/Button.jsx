import { useRef, useState } from "react";
import style from "./Button.module.css";
import { useNavigate } from "react-router-dom";
export default function Button({ datas,setNewBill }) {

    const [scrolled, setScrolled] = useState(0);
    const navigate=useNavigate()

    const scrollElementRef = useRef(null);
    const scrollStep = 300;
  
    const handleScrollUp = () => {
      const newScrolled = Math.max(scrolled - scrollStep, 0);
      setScrolled(newScrolled);
      scrollElementRef.current.scrollTo({
        top: newScrolled,
        behavior: 'smooth'
      });
    };
  
    const handleScrollDown = () => {
      if (scrollElementRef.current) {
        const maxScroll = scrollElementRef.current.scrollHeight - scrollElementRef.current.clientHeight;
        const newScrolled = Math.min(scrolled + scrollStep, maxScroll);
        setScrolled(newScrolled);
        scrollElementRef.current.scrollTo({
          top: newScrolled,
          behavior: 'smooth'
        });
      }
    };

    const dataHandler=(e)=>{
        console.log(e.target.value)
        if(e.target.value=='Report'){
            navigate('/BillList')
        }
        if(e.target.value=='New Bill'){
          setNewBill(true)
        }
    }

  return (
    <div className={style.btnFor}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2/2486.png"
        height={60}
        width={78}
        className={style.upArrow}
        onClick={handleScrollUp}
        
      />
    <div className={style.btncontainer} ref={scrollElementRef}>
      {datas.map((e, i) => (
        <button key={i} className={style.btn} value={e} onClick={dataHandler}>{e}</button>
      ))}
    </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2/2486.png"
        height={60}
        width={78}
        className={style.downArrow}
        onClick={handleScrollDown}
      />
    </div>
  );
}
