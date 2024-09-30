import React from 'react'
import Card from './Card';
const CardPage = ({cardData}) => {
    const { name, desc, interests, linkedin, twitter } = cardData;

    return (
      <div className="p-4 max-w-2xl mx-auto">
  {name && desc && interests.length > 0 ? (
    <Card
      name={name}
      desc={desc}
      interests={interests}
      linkedin={linkedin}
      twitter={twitter}
    />
  ) : (
    <p className="text-center text-gray-500 text-lg">
      No card data found!
    </p>
  )}
</div>

    );
}

export default CardPage
