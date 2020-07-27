import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react';

const BookCard = ({price, author, image, title}) => (
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
            <a>
                <Icon name='user' />
        {price}
      </a>
        </Card.Content>
    </Card>
);

export default BookCard;