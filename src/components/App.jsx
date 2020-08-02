import React, { Component } from 'react';
import axios from "axios";
import MenuComponent from './Menu';
import { Container, Card } from 'semantic-ui-react';
import BookCard from './BookCard';
import './Appstyle.css';
import Filter from "../containers/Filter";


class App extends Component {
  componentWillMount() {
    const {setBooks} = this.props;
    axios.get('/books.json').then(({ data })=>{
      setBooks(data);
    });
  }
  render(){
    const {books, isReady, setFilter}=this.props;
    return(
      <Container>
        <div>
        <MenuComponent />
        <Filter setFilter={setFilter} />
        <Card.Group itemsPerRow={4}>
        { !isReady ? 'Loading...'
         :books.map((book,i)=>(
         <BookCard key={i} {...book}/>
          ))
        }
        </Card.Group>
        
      
      </div>
      </Container>
      
      
    )
  }

}
export default App;

