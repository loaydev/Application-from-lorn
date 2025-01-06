import "./Stayel.css";
import './App.css';
import Modal from "./Modal";
import { useState } from "react";

export default function FromLorn(){
    const [ermaseg, Setermaseg] = useState(null);
    const [showModel, SetshowNodel] = useState(false) ;
    const [LoanInpute, SetloanInpute] = useState({
        name: "",
        PhoneNumber: "",
        age: "",
        isTol: false,
        siraliRing: "",
    });
    
    function handFromLorn(event) {
        event.preventDefault();
        SetshowNodel(true);
        Setermaseg(null);
        const { age, PhoneNumber,  } = LoanInpute;
        if(age < 18 || age > 100 ) {
            Setermaseg("the age is not allowed")
        }else if (PhoneNumber.length < 10 || PhoneNumber.length > 12 ) {
            Setermaseg("Phone Number Fromat is Incorrect")
        } 
    }

    const btnDisibel =
        LoanInpute.name ===""||
        LoanInpute.PhoneNumber === "" ||
        LoanInpute.age === ""
    
    let btnclasses = ""
    if(btnDisibel){
        btnclasses = "dsibel"
    } else {
        btnclasses = ""
    }

    function hopalala() {
        if (showModel) {
            SetshowNodel(false);
        }
    }

    return(
        <div className="from" onClick={hopalala} > 
            <form id="center">
                <h1> Requesting a Loran from loay </h1>
                <hr></hr>
                
                <labe>Name: </labe>
                <input value={LoanInpute.name} onChange={(event) => {
                    SetloanInpute({...LoanInpute, name: event.target.value})
                }}
                />

                <labe>Phone Number: </labe>
                <input value={LoanInpute.PhoneNumber} onChange={(event) => {
                    SetloanInpute({...LoanInpute, PhoneNumber: event.target.value})
                }}
                />


                <labe>Age: </labe>
                <input value={LoanInpute.age} onChange={(event) => {
                    SetloanInpute({...LoanInpute, age: event.target.value})
                }}
                />


                <labe style={{marginTop: "30px"}}>Are you an employee?: </labe>
                <input type="checkbox" checked={LoanInpute.isTol}  
                onChange={(event) => {
                    SetloanInpute({...LoanInpute, isTol: event.target.checked})
                }} 
                />

                <label>Salary: </label> 
                <select value={LoanInpute.siraliRing} onChange={(event) => {
                    SetloanInpute({...LoanInpute, siraliRing: event.target.value})
                }}>
                    <option>Less than 700$ </option>
                    <option>Betweem 700$ and 2000$</option>
                    <option>Above 2000$</option>
                </select>

                <buttom onClick={handFromLorn}
                    disabled={btnDisibel}
                    id="submit-lorn"
                    className={btnclasses}
                >Submit</buttom>
            </form>
         
          <Modal prope={showModel} erroemaseg={ermaseg} /> 
        </div>
    )
}