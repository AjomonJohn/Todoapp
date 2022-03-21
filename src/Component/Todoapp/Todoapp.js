import React, { useState } from 'react'
import "./Todoapp.css";
import asset from '../../asset/123.jpg'
function Todoapp() {
  // handleChange = () => {
  const [input, setInput] = useState("");
  const [submitValue, setSubmitValue]= useState([])
    
  const handleChange = (e) => {
  setInput(e.target.value)
}
  const handleSumbit = () => {
    setSubmitValue([...submitValue,input])
    setInput("")
  }
  const remove = (data) => {
    const removeValue = submitValue?.filter((clear) => clear !== data)
    setSubmitValue(removeValue)
  }


//   let cars  = [
//     {
//     "image":"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202002/lamborghini_660_140220101539.jpg",
//     "color": "purple",
//     "type": "minivan",
//     "registration": new Date('2017-01-03'),
//     "capacity": 7
//   },
//     {
//     "image":"https://www.kia.com/content/dam/kia2/in/en/images/our-vehicles/carens/MASTHEAD-CAR-LOGO-UNIT_CARENS_UPD.png",
//     "color": "red",
//     "type": "station wagon",
//     "registration": new Date('2018-03-03'),
//     "capacity": 5
//     },
//     {
//     "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxc0RcI4bXIi4p4o1euJiRaTc-HPQeGIP_g&usqp=CAU",
//     "color": "green",
//     "type": "xuv",
//     "registration": new Date('2018-03-08'),
//     "capacity": 9
//   },
// ]
  
  return (
    <div className='todo-container'>
       
      <div className='main-head'>
      <h1>Todoapp</h1>
     </div>

      <div className='input-section'>
        <input type="text" value={input}  onChange={handleChange } placeholder='Add Todo' />
        <button onClick={handleSumbit}>Add Todo</button>
      </div>
      <ul>
        {submitValue?.map((data) => (
          <li>
            {data} 
            <span onClick={() => remove(data)}><i class="fas fa-trash"></i></span>
        </li>
        ))}

       
      </ul>
 </div>
  )
}
export default Todoapp
{/* <div className='card-main'>
      {cars.map((tata)=>(
       
        <div className='card'>
        <div>
          <img className='card-img' src={tata.image} />
          
        </div>
        <div className='para'>
            <h4>color:{tata.color }</h4>
          <hr  style={{width:'100%', color: "black" }}></hr>
          <h4>type:{tata.type }</h4>
          <hr  style={{width:'100%', color: "black" }}></hr>
          <h4>registration:new Date('2017-01-03')</h4 >
          <hr  style={{width:'100%', color: "black" }}></hr>
            <h4>capacity:{tata.capacity }</h4>
        </div>
      </div> 
      ))}
      </div>
         */}
   