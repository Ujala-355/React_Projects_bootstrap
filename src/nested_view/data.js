import React from "react";
import {Container} from "react-bootstrap";
import TreeView from "./index";
const treeData = [
    {
      name: 'Home',
      children: [
        {
          name: 'Home 1-1',
          children: [
            { name: 'baki sab thik' },
            { name: 'ha sb chal raha hai' },
          ],
        },
        { name: 'Home 1-2' ,
        children: [
            { name: 'baki sab thik' },
            { name: 'ha sb chal raha hai' },
          ],
        },
      ],
    },
    {
      name: 'Contact',
      children: [
        { name: 'Child 2-1' },
        {
          name: 'Child 2-2',
          children: [
            { name: 'Grandchild 2-2-1' },
            { name: 'Grandchild 2-2-2' },
          ],
        },
      ],
    },
    {
        name: 'Product',
        children: [
          { name: 'Child 3-1' },
          {
            name: 'Child 3-2',
            children: [
              { name: 'Grandchild 3-1-1' },
              { name: 'Grandchild 3-2-2' },
            ],
          },
        ],
      },
  ];
  
const DataView=()=>{
    return(
        <Container>
            <h1>React Tree View</h1>
            <TreeView data={treeData}/>
        </Container>
    )
}
export default DataView;