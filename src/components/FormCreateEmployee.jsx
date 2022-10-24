import React from "react";
import { useState } from "react";
import { 
    store, 
    saveFirstname, 
    saveLastname, 
    saveDateBirth, 
    saveStartDate, 
    saveZipCode, 
    saveState, 
    saveCity, 
    saveStreet, 
    saveDepartment, 
} from "../redux/store";

/** styles */
import 'react-dropdown/style.css';

/** npm module */
import Dropdown from 'react-dropdown';

/** components */
import DatePicker from "./DatePicker";
import Modale from "./Modale";

export default function FormCreateEmployee(){

    const [modalIsOpen, setIsOpen] = useState(false);

    const handleSubmit= (event)=>{
        event.preventDefault();
        store.dispatch(saveFirstname(event.target.firstname.value));
        store.dispatch(saveLastname(event.target.lastname.value));
        store.dispatch(saveDateBirth(event.target.dateBirth.value));
        store.dispatch(saveStartDate(event.target.startDate.value));
        store.dispatch(saveStreet(event.target.street.value));
        store.dispatch(saveCity(event.target.city.value));
        store.dispatch(saveState(event.target.pays.value));
        store.dispatch(saveZipCode(event.target.zipCode.value));
    }

    const onChangeDropDown = item => {
        const value = item.value;
        store.dispatch(saveDepartment(value));
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const options = [
        'Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'
    ];

    return (
        <div className="container">
            <h1>Create Employee</h1>
            <form className="row g-2" action="#" id="createEmployee" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="firstname" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="firstname" name="firstname" placeholder="Lucie" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastname" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Dupont" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="dateBirth" className="form-label">Date of birth</label>
                    <DatePicker id="dateBirth"/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="startDate" className="form-label">Start date</label>
                    <DatePicker id="startDate"/>
                </div>   
                <fieldset className="row g-2 address">
                    <legend>Address</legend>

                    <div className="col-md-6">
                        <label htmlFor="street" className="form-label">Street</label>
                        <input type="text" className="form-control" id="street" name="street" placeholder="1 av de la République" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text" className="form-control" id="city" name="city" placeholder="Paris" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="pays" className="form-label">State</label>
                        <input type="text" className="form-control" id="pays" name="pays" placeholder="France" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="zipCode" className="form-label">Zip Code</label>
                        <input type="number" className="form-control" id="zipCode" name="zipCode" placeholder="75000" />
                    </div>
                </fieldset>
                <div className="col-md-6 mb-3">
                    <label className="form-label" htmlFor="department">Department</label>
                    <Dropdown onChange={onChangeDropDown} options={options} placeholder="Selectionnez votre département ..." />
                </div>
                <div className="col-12">
                    <button onClick={openModal} className="btn btn-outline-light" type="submit" >Save</button>
                </div>
            </form>

            <Modale modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}