import React from "react";
import {Container, Row, Col ,Card} from "react-bootstrap";
import useResponsive from "./useResponsive";

const ResponsiveCom=()=>{
    const {isMobile, isTablet, isDesktop}=useResponsive();

    return(
        <Container>
            <Row className="mt-4">
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>Responsive Layout</Card.Title>
                        </Card.Body>
                        {isMobile && "you are using a mobile device."}
                        {isTablet && "You are using a tablet."}
                        {isDesktop && "You are using a desktop or larger device."}
                    </Card>
                </Col>
            </Row>
        </Container>
    )   
}
export default ResponsiveCom;