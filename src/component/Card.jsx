import React from 'react'

const Card = ({name,desc,interests,linkedin,twitter}) => {
  console.log(name);
  console.log(desc);
  console.log(interests);
  
  return (
    <div>
      <h1>{name}</h1>
      <p>{desc}</p>
      <h2>Interests</h2>
      <ul>
        {interests.map((item, index) => (
          <li key={index}>{item}</li> 
        ))}
      </ul>
      <div>
        <a href={linkedin}>
          <button>Linkedin</button>
        </a>
        <a href={twitter}>
          <button>Twitter</button>
        </a>
      </div>
    </div>
  )
}

export default Card
