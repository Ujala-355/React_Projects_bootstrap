import React, {useRef} from "react";
import {Container,Navbar, Nav ,Button} from "react-bootstrap";

const ScrollParticularSection=()=>{
    const section1Ref=useRef(null);
    const section2Ref=useRef(null);
    const section3Ref=useRef(null);

    const scrollToSection=(sectionRef)=>{
        window.scrollTo({
            top:sectionRef.current.offsetTop,
            behavior:"smooth",
        });
    };
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand href="#">Scroll App</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link as="div">
                            <Button variant="link" onClick={()=>scrollToSection(section1Ref)}>Section 1</Button>
                        </Nav.Link>
                        <Nav.Link as="div">
                            <Button variant="link" onClick={()=>scrollToSection(section2Ref)}>Section 2</Button>
                        </Nav.Link>
                        <Nav.Link as="div">
                            <Button variant="link" onClick={()=>scrollToSection(section3Ref)}>Section 3</Button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Container style={{marginTop:"80px"}}>
                <div ref={section1Ref} style={{padding:"200px 0", border:"1px solid #ccc"}}>
                    <h2>Section 1</h2>
                    <p>Content for section 1...</p>
                </div>
                <div ref={section2Ref} style={{padding:"200px 0", border:"1px solid #ccc"}}>
                    <h2>Section 2</h2>
                    <p>Content for section 2 ...</p>
                </div>
                <div ref={section3Ref} style={{padding:"200px 0", border:"1px solid #ccc"}}>
                    <h2>Section 3</h2>
                    <p>Content for section 3...</p>
                </div>
            </Container>
        </div>
    )
} 
export default ScrollParticularSection;