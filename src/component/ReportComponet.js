
import DataContext from "../data/DataContext"
import { useContext } from "react"
import './ReportComponent.css'
const ReportComponent=()=>{
    const {income,expense} = useContext(DataContext)
    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return(
<div>
<h4>ยอดคงเหลือ</h4>
    <h1>{formatNumber((income - expense))}</h1>
    <div className="report-container">
    <div>
        <h4>ยอดรายรับ</h4>
        <p className="report plus">{income}</p>
    </div>
    <div>
        <h4>ยอดรายจ่าย</h4>
        <p className="report minus">{expense}</p>
    </div>
    </div>
</div>
   
    )

}
export default ReportComponent