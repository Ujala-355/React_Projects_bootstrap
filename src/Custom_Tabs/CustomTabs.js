import React, {useState} from "react";
import {Tab, Tabs} from "react-bootstrap";
import "./styles.css"
const CustomTabs=()=>{
    const [key, setKey]=useState("home");
    return(
        <>
            <Tabs
                id="custom-tabs"
                activekey={key}
                onSelect={(k)=>setKey(k)}
                className="md-3"
            >
                <Tab eventKey="home" title={<><i className="bi bi-house"></i>Home</>}>
                    <div>Content for Home tab</div>
                </Tab>
                <Tab eventKey="profile" title={<><i classname="bi bi-person"></i>Profile</>}>
                    <div>Content for Profile Tab</div>
                </Tab>
                <Tab eventKey="contact" title={<><i className="bi bi-person"></i>Contact</>}>
                    <div>Content for Contact tab</div>
                </Tab>
            </Tabs>
        </>
    )
    
}
export default CustomTabs;
