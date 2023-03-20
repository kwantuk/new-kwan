import Transaction from "./component/Transaction"
import FormComponent from "./component/FormComponent";
import './App.css'
import { useState,useEffect } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./component/ReportComponet";
import { BrowserRouter as Router,Route,Link,Routes} from "react-router-dom";



function App() {
  const design={color:"red",textAlign:"center",forntZixe:'1.5rem'}
  
  const initData = [
    {id:1,title:"กินข้าว",amount:- 666},
    {id:2,title:"ดูหนัง",amount:- 200},
    {id:2,title:"เงินเดือน",amount:20000},
    {id:2,title:"ค่าไฟ",amount:- 500}
   
  ]
  
  const [items,setItems] = useState(initData)
  const [reportIncome,setReportIncome] =useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  // const [items,setItems] = useState([])


  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,newItem,newItem,newItem,newItem,...prevItem]
    }
    )
  }
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income=amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense=((amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1)
    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense]  )

  

  return(
<DataContext.Provider value={{income : reportIncome,expense :reportExpense}
}>
<div className="container">
      <h1 style={design}> โปรแกรมรายรับรายจ่าย </h1>
    <Router>  
      <div>
        <ul className="horizontal-menu">
          <li>
           <Link to="/" extent >ข้อมูลบัญชี</Link>
          </li>
          <li>
          <Link to="/insert">บันทึกข้อมูล</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" exact element={<ReportComponent/>}/>
          <Route path='/insert' element={ <Transaction items={items}/>}></Route>
        </Routes>
      </div>
      </Router>
     
   </div>
</DataContext.Provider>

  )
}

export default App;
