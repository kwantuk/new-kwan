import { useState,useEffect } from 'react'
import './FormComponent.css'
import { v4 as uuidv4 } from 'uuid';
import Transaction from './Transaction';



const FormComponent = (props)=>{
    const [title,setTitle]=useState('')
    const [amount,setAmount]=useState('')
    const [formValid,setFormValid]=useState(false)
    

    const [items,setItems] = useState(initData)
    const initData = [
        {id:1,title:"กินข้าว",amount:- 666},
        {id:2,title:"ดูหนัง",amount:- 200},
        {id:2,title:"เงินเดือน",amount:20000},
        {id:2,title:"ค่าไฟ",amount:- 500}
       
      ]



    const inputTitle = (event)=>{
        setTitle(event.target.value)    
        
    }

    const inputAmount = (event)=>{
       setAmount(event.target.value)
       
    }

    const saveItem = (event) =>{
        
  
        const itemData = {id:uuidv4(),title:title,amount:Number(amount)}
//event.preventdefault()
        props.onAddItem(itemData)
        event.preventdefault()
    }
    useEffect(()=>{
        const checkData =title.trim().length>0 && amount !== 0
            setFormValid(checkData)
    },[title,amount])

    return(
        <div>
            <form onSubmit={()=>saveItem}>
                <div className="form-control">
                    <label>ชื่อรายการ </label>
                    <input type="string" placeholder="กรอกรายการ" onChange={inputTitle} value={title}/>
                </div>
                <div className="form-control">
                    <label>จำนวนเงิน </label>
                    <input type="number" placeholder="(+รายรับ -รายจ่าย)" onChange={inputAmount} value={amount}/>
                </div>
                <div>
                    <button type="submit" disabled={!formValid}>เพิ่มข้อมูล</button>
                </div>
                
                
            </form>
        </div>

    )

}

export default FormComponent