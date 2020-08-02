import React from "react";
import { Card, Icon, Image, Button } from 'semantic-ui-react';
import './BookCard.css';

const BookCard = (book) => {
    const { price, author, image, title, addToCart,addedCount } = book;
    return (
        <Card>
            <Image src={image} />
            <Card.Content>
                <Card.Header>{title}</Card.Header>
                <Card.Meta>
                    <span className='date'>{author}</span>
                </Card.Meta>
                <Card.Description>
                    {/* {country}, {language} */}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='usd' />
                <span id='price'>{price}</span>
            </Card.Content>
            <Button onClick={addToCart.bind(this, book)}>Add to Cart{addedCount > 0 && `(${addedCount})`}</Button>
        </Card>
    );
}
export default BookCard;