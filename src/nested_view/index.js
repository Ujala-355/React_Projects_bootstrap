import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

const TreeNode = ({ node }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ListGroup.Item action onClick={() => setOpen(!open)}>
        {node.name}
      </ListGroup.Item>
      {open && node.children && (
        <div style={{ marginLeft: '20px' }}>
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} />
          ))}
        </div>
      )}
    </>
  );
};

const TreeView = ({ data }) => {
  return (
    <ListGroup>
      {data.map((node) => (
        <TreeNode key={node.name} node={node} />
      ))}
    </ListGroup>
  );
};

export default TreeView;
