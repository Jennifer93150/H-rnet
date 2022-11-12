import React, { useState } from "react";

/** styles */
import 'react-dropdown/style.css';

/** npm module */
import Dropdown from 'react-dropdown';
import { DatePicker } from "my-datepicker-test";

/** components */
import Modale from "./Modale";

/** styles */
import "../style/form.css";

export default function Form(){
 
    const [modalIsOpen, setIsOpen] = useState(false);

    Storage.prototype.getArray = function(arrayName) {
      var thisArray = [];
      var fetchArrayObject = this.getItem(arrayName);
      if (typeof fetchArrayObject !== 'undefined') {
        if (fetchArrayObject !== null) { thisArray = JSON.parse(fetchArrayObject); }
      }
      return thisArray;
    }
    
    Storage.prototype.pushArrayItem = function(arrayName,arrayItem) {
      var existingArray = this.getArray(arrayName);
      existingArray.push(arrayItem);
      this.setItem(arrayName,JSON.stringify(existingArray));
    }

    const [employee, setEmployee]= useState({
        firstName: '',
        lastName: '',
        dateBirth: '',
        startDate: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
        department: '',
      });

      function handleClickOnADate(field, value) {
        employee[field] = value.toLocaleDateString();
        setEmployee(employee)
      }
      
      function handleEmployeeChange(field, value) {
        employee[field] = value;
        setEmployee(employee)
      }
      

    function reset() { 
        const form = document.getElementById("createEmployee");
        form.reset()
    }
  
    const handleSubmit = (event)=>{
        if(employee.dateBirth === ''){
            employee['dateBirth'] = document.getElementById('dateBirth').value;
        }
        if(employee.startDate === ''){
            employee['startDate'] = document.getElementById('startDate').value;
        }
      event.preventDefault();
      localStorage.pushArrayItem('root', employee)
      openModal();
    }

    const openModal = () => {
        setIsOpen(true);
        reset();
    }

    const options = [
        'Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'
    ];
    
    return (
        <div className="container">
            <h1>Create Employee</h1>
            <form action="#" id="createEmployee" onSubmit={handleSubmit}>
                <div >
                    <label htmlFor="firstname" >First Name</label>
                    <input type="text" 
                    id="firstname" name="firstname" placeholder="Lucie" 
                     onChange={(e)=>{handleEmployeeChange('firstName', e.target.value)}} required/>
                </div>
                <div >
                    <label htmlFor="lastname" >Last Name</label>
                    <input type="text" id="lastname" name="lastname" placeholder="Dupont" 
                     onChange={(e)=>{handleEmployeeChange('lastName', e.target.value)}} required/>
                    
                </div>
                <div >
                    <label htmlFor="dateBirth" >Date of birth</label>
                    <DatePicker id="dateBirth" class="input-dateBirth"
                    onChange={(value)=>{handleEmployeeChange('dateBirth', value)}} 
                    onClick={(value)=>{handleClickOnADate('dateBirth', value)}}/>
                </div>
                <div >
                    <label htmlFor="startDate" >Start date</label>
                    <DatePicker id="startDate" class="input-startDate"
                    onChange={(value)=>{handleEmployeeChange('startDate', value)}} 
                    onClick={(value)=>{handleClickOnADate('startDate', value)}}/>
                </div>   
                    <div >
                        <label htmlFor="street" >Street</label>
                        <input type="text" id="street" name="street" 
                        placeholder="1 av de la République" 
                         onChange={(e)=>{handleEmployeeChange('street', e.target.value)}} required/>
                    </div>
                    <div >
                        <label htmlFor="city" >City</label>
                        <input type="text" id="city" name="city" 
                        placeholder="Paris" 
                         onChange={(e)=>{handleEmployeeChange('city', e.target.value)}} required/>
                    </div>
                    <div >
                        <label htmlFor="state" >State</label>
                        <input type="text" id="state" name="state" 
                        placeholder="France" 
                         onChange={(e)=>{handleEmployeeChange('state', e.target.value)}} required/>
                    </div>
                    <div >
                        <label htmlFor="zipCode" >Zip Code</label>
                        <input type="number" id="zipCode" name="zipCode" 
                        placeholder="75000" 
                         onChange={(e)=>{handleEmployeeChange('zipCode', e.target.value)}} required/>
                    </div>
                <div >
                    <label  htmlFor="department">Department</label>
                    <Dropdown onChange={(value)=>{handleEmployeeChange('department', value.value)}} options={options} placeholder="Selectionnez votre département ..." />
                </div>
                <div >
                    <button className="submit" type="submit" >Save</button>
                </div>
            </form>
            <Modale modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}