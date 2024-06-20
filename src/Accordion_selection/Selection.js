import React, { useState } from 'react';
import Accordion from './Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import the custom styles

const Selection = () => {
    const [multiSelect, setMultiSelect] = useState(false);

    const items = [
        {
          title: 'What are accordion components?',
          content: 'Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.'
        },
        {
          title: 'What are they used for?',
          content: 'Accordions are used to condense content into expandable sections, allowing users to focus on specific areas while minimizing the need to scroll through long content.'
        },
        {
          title: 'Accordion as a musical instrument',
          content: 'An accordion is also a musical instrument played by expanding and compressing its bellows while pressing buttons or keys, producing a sound.'
        },
        {
          title: 'Can I create an accordion component with a different framework?',
          content: 'Yes, accordion components can be created with various frameworks including React, Angular, Vue, and plain JavaScript.'
        },
    ];

  return (
      <div className="box">
          <div className="container mt-4">
              <div className="center-button-container">
                <button
                    className="multi-select-button"
                    onClick={() => setMultiSelect(!multiSelect)}
                >
                    {multiSelect ? "Disable" : "Enable"} Multi Selection
                </button>
              </div>
              <Accordion items={items} multiSelect={multiSelect} />
          </div>
      </div>
  );
};

export default Selection;
