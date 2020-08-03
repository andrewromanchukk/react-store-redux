import React from "react";
import { Menu, Container, Popup, List, Button, Image} from 'semantic-ui-react';
import './Menu.css';
import { removeFromCart } from "../actions/cart";
import books from "../reducers/books";

const CartComponent = ({title, id, image, removeFromCart}) =>(
  <List divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button color='red' onClick={removeFromCart.bind(this, id)}>Remove</Button>
      </List.Content>
      <Image avatar src={image} />
<List.Content>{title}</List.Content>
    </List.Item>
    
  </List>
);

const MenuComponent = ({totalPrice, count, items})=>(   
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
            Total: &nbsp; <b>{totalPrice}</b>$
          </Menu.Item>

          
          <Popup trigger={
            <Menu.Item name='help' >
            Cart (<b>{count}</b>)
            </Menu.Item>
          } 
          content={items.map(book=> <CartComponent {...book}/>) }
          on='click'
          hideOnScrool/>
          
        </Menu.Menu>
      </Menu>

    </Container>
    
   );

export default MenuComponent;