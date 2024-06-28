import {useState, useEffect} from "react";
import {ProgressBar} from "react-bootstrap"

const ScrollIndicator=()=>{
    const [scrollPercentage, setScrollPercentage]=useState(0);

    const handleScroll=()=>{
        const scrollTop=document.documentElement.scrollTop;
        const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
        const scroll=(scrollTop/scrollHeight)*100;
        setScrollPercentage(scroll);
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    },[]);

    return(
        <>
            <ProgressBar
                now={scrollPercentage}
                style={{height:"5px", position:"fixed", top:0, left:0, right:0, zIndex:1031}}
                animated
                variant="info"
            />
            <div style={{ height: '2000px', padding: '20px' }}>
                <h1>Scroll Down to See the Scroll Indicator</h1>
                <p>Some content...</p>
                <p>Use the sliding window technique to maintain a window of characters without repeating any character.</p>
                <p>Use a set or dictionary to track the characters in the current window.</p>
                <p>Expand the window by moving the right pointer and contract the window by moving the left pointer when a duplicate character is found</p>
                
            </div>
      </>
    )
}
export default ScrollIndicator;