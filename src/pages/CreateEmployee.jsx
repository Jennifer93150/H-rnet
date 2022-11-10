import { React } from "react";

/** components */
import FormCreateEmployee from "../components/FormCreateEmployee";
import Navbar from "../components/Navbar";

/** styles */
import "../style/createEmployee.css";
import "../style/datePicker.css";

export default function CreateEmployee() {
  
  return (
    <main>
      <div className="home">
        <Navbar/>
        <FormCreateEmployee/>
      </div>
    </main>
  );
}


