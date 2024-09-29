import React from 'react'
import Card from './Card';
const CardPage = ({cardData}) => {
    const { name, desc, interests, linkedin, twitter } = cardData;

    return (
      <div>
        {name && desc && interests.length > 0 ? (
          <Card
            name={name}
            desc={desc}
            interests={interests}
            linkedin={linkedin}
            twitter={twitter}
          />
        ) : (
          <p>No card data found!</p>
        )}
      </div>
    );
}

export default CardPage
