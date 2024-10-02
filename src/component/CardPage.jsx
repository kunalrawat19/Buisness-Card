import React from 'react'
import Card from './Card';
const CardPage = ({cardData}) => {
    const { name, desc, interest, linkedin, twitter } = cardData;

    return (
      <div className="p-4 max-w-2xl mx-auto">
  {name && desc && interest.length > 0 ? (
    <Card
      name={name}
      desc={desc}
      interests={interest}
      linkedin={linkedin}
      twitter={twitter}
    />
  ) : (
    <p className="text-center text-gray-900 text-lg">
      No card data found!
    </p>
  )}
</div>

    );
}

export default CardPage
