import React,{useState} from "react";
import {Container, Form ,Button,Row,Col} from "react-bootstrap";
import QRCode from "qrcode.react";

const QrCodeGenerator=()=>{
    const [inputValue ,setInputValue]=useState("");

    const handleInputChange=(event)=>{
        setInputValue(event.target.value)
    }
    return(
        <>
            <Container className="mt-5">
                <Row className="justify-content-md-center">
                    <Col md="6">
                        <h1 className="text-center">QR Code Generator</h1>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>ENter text or URL:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter text URL"
                                    value={inputValue}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Button variant="primary" className="mt-3" onClick={()=>{}}>
                                Generate QR Code
                            </Button>
                        </Form>
                        <div className="text-center mt-4">
                            {inputValue && <QRCode value={inputValue}/>}

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default QrCodeGenerator;