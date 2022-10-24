import { React } from "react";

/** components */
import FormCreateEmployee from "../components/FormCreateEmployee";
import Navbar from "../components/Navbar";

/** styles */
import "../style/createemployee.css";

export default function CreateEmployee() {
 
  return (
    <div className="home">
      <Navbar/>
      <FormCreateEmployee/>
    </div>
  );
}
