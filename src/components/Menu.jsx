import React from "react";
import { Menu,Container } from 'semantic-ui-react';



const MenuComponent = ()=>(   
    <Container>
        <Menu>
        <Menu.Item
          name='browse'
        //   onClick={this.handleItemClick}
        >
          Book Store
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item
            name='signup'
            
            // onClick={this.handleItemClick}
          >
            Total: &nbsp; <b>0</b>$
          </Menu.Item>

          <Menu.Item
            name='help'
            
            // onClick={this.handleItemClick}
          >
            Cart (<b>0</b>)
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
    
   );
    


export default MenuComponent;