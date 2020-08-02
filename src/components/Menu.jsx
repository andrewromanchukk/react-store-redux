import React from "react";
import { Menu, Container } from 'semantic-ui-react';
import './Menu.css';


const MenuComponent = ()=>(   
    <Container>
        <Menu id='menu'>
        <Menu.Item
          name='browse'
        >
          Book Store
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
          >
            Total: &nbsp; <b>0</b>$
          </Menu.Item>

          <Menu.Item
            name='help'
          >
            Cart (<b>0</b>)
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    </Container>
    
   );

export default MenuComponent;