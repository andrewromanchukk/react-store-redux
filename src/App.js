import React, { Component } from 'react';
// import './store';
import { connect } from 'react-redux';
import  setBooks  from './actions/books';
// import books from "./books.json";
import axios from "axios";
import MenuComponent from './components/Menu';
import { Container } from 'semantic-ui-react';
import BookCard from './components/BookCard';


class App extends Component {
  componentWillMount() {
    const {setBooks} = this.props;
    axios.get('/books.json').then(({ data })=>{
      setBooks(data);
    });
  }
  render(){
    const {books, isReady}=this.props;
    return(
      <Container>
        <div>
        <MenuComponent />
      <ul>
        { !isReady ? 'Loading...'
         :books.map(book=>(
         <BookCard  {...book}/>
          ))
        }
      </ul>
      </div>
      </Container>
      
      
    )
  }

}

const mapStateToProps = ({books}) =>({
  books: books.items,
  isReady: books.isReady

})

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect (mapStateToProps, mapDispatchToProps)(App);
