import React, {useState, useEffect} from "react";
import {Button} from "react-bootstrap";

const LightDarkModeToggle=()=>{
    const [darkMode, setDarkMode]=useState(false);

    useEffect(()=>{
        if(darkMode){
            document.body.classList.add('bg-dark',"text-light");
        }
        else{
            document.body.classList.remove("bg-dark","text-light");
        }
    },[darkMode]);

    const toggleDarkMode=()=>{
        setDarkMode(!darkMode);
    }

    return(
        <div className="text-center mt-5">
            <Button variant={darkMode ? "light" : "dark"} onClick={toggleDarkMode}>
                Toggle to {darkMode ? "Light" : "Dark"} Mode
            </Button>
        </div>
    )
}
export default LightDarkModeToggle;