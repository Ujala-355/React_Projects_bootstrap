import React from "react";
import {Button} from "react-bootstrap";

const ScrollToTop=()=>{
    const scrollToTop=()=>{
        window.scrollTo({top:0, behavior:"smooth"});
    }
    return(
        <Button variant="primary" onClick={scrollToTop} className="scroll-button">Scroll to Top</Button>
    )
}
const ScrollToBottom=()=>{
    const scrollToBottom=()=>{
        window.scrollTo({top:document.documentElement.scrollHeight, behavior:"smooth"});
    }

    return(
        <Button variant="secondary" onClick={scrollToBottom} className="scroll-button">
            Scroll to Bottom
        </Button>
    )
}
export {ScrollToTop, ScrollToBottom};