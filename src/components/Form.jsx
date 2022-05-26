import React, { useState, useEffect, useRef } from 'react';

export default function Form() {

   const [form, setForm] = useState({});

   const handleOnChange = (e)=> {
       let {name,type,checked,value,files} = e.target;

       if(type=="checkbox")
       {
         setForm({
           ...form,
           [name]:checked,
         });
       }
       else if(type==="file")
       {
         setForm({
           ...form,
           [name]:files
         })
       }
       else{
         setForm({
           ...form,
           [name]:value,
         })
       }
   } ;

   const handleSubmit = (e) => {
     e.preventDefault();
     console.log(form)
     confirm("Are You Really Wanna Register!\n If Not,Cancel.")
     {confirm ? alert("Register Succeed") : alert("Failed") }
   }



  return (

    <div>Form


   <form onSubmit={handleSubmit}>
     <input type="text"
     className="input"
     placeholder="Enter Name"
     name="name"
     value={form.name}
     onChange={handleOnChange}
     /> <br/><br/>
   
   <input type="number"
   placeholder="Enter Age"
   name="age"
   value={form.age}
   onChange={handleOnChange}
   /> <br/> <br/>

   <input type="text"
   placeholder="Enter Your Address"
   name="address"
   value={form.address}
   onChange={handleOnChange}
   /> <br/> <br/>

   <input type="number"
   className="input"
   placeholder="Enter Salary"
   name="salary"
   value={form.salary}
   onChange={handleOnChange}
   /> <br/> <br/>

    <div className="married">
    <input type="checkbox"
   name="married"
   checked={form.married}
   onChange={handleOnChange}
   /> <label>Marrital Status</label><br/> <br/>
    </div>


   <select name="department"
   value={form.department}
   onChange={handleOnChange}
    >
      <option value="Not Selected">Select Department</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select> <br/><br/>

   <label>Profile-Picture :</label>
    <input type="file"
    className="input"
    name="profilepicture"
    files={form.profilepicture}
    onChange={handleOnChange}
    /> <br/> <br/>

    <input type="submit" className="button"/>
 

   </form>

   <table>
     
     <tbody>
       <tr> Name :
         <td> {form.name}</td>
       </tr>
       <tr> Age :
         <td>{form.age}</td>
       </tr>
       <tr>Address :
         <td>{form.address}</td>
       </tr>
         
         <tr>Salary :
           <td>{form.salary}</td>
         </tr>

       <tr> Married
         <td>{form.married}</td>
       </tr>
       <tr> Department
         <td>
               {form.department}
         </td>
       </tr>
       <tr>Picture
         <td><img src={form.profilepicture} alt=""/></td>
       </tr>
     </tbody>
   </table>

    </div>

  
  )

  
}