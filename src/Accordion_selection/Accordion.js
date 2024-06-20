import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';

const AccordionItem = ({ item, isOpen, onClick }) => (
    <Card className="mb-2 accordion-item">
        <Card.Header className="p-0">
          <Button variant="link" onClick={onClick} className="w-100 text-start btn-accordion">
              {item.title}
              <span className="float-end">{isOpen ? '-' : '+'}</span>
              <Collapse in={isOpen}>
                  <Card.Body className="accordion-body">{item.content}</Card.Body>
              </Collapse>
          </Button>
        </Card.Header>
    </Card>
);

const Accordion = ({ items, multiSelect }) => {
    const [openItems, setOpenItems] = useState([]);

    const handleClick = (index) => {
        if (multiSelect) {
            setOpenItems((prevOpenItems) =>
                prevOpenItems.includes(index)
                    ? prevOpenItems.filter((itemIndex) => itemIndex !== index)
                    : [...prevOpenItems, index]
            );
        } else {
            setOpenItems((prevOpenItems) =>
                prevOpenItems.includes(index) ? [] : [index]
            );
      }
    };

  return (
      <div>
          {items.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openItems.includes(index)}
                onClick={() => handleClick(index)}
              />
          ))}
      </div>
  );
};

export default Accordion;
