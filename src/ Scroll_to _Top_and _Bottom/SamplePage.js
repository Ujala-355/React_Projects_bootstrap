import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {ScrollToTop, ScrollToBottom} from "./ScrollButtons";
import "./styles.css"
const SamplePage=()=>{
    return(
        <Container>
            <Row className="mt-4">
                <Col>
                    <h1>Scroll to Top and Bottom Example</h1>
                    {[... Array(50)].map((_,i)=>(
                        <p key={i}>This is some sample content to demonstrate scrolling . Line {i+1}</p>
                    ))}
                </Col>
            </Row>
            <div className="scroll-buttons-container">
                <ScrollToTop/>
                <ScrollToBottom/>
            </div>
        </Container>
    )
}
export default SamplePage;