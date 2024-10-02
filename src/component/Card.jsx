import React from 'react'

const Card = ({name,desc,interests,linkedin,twitter}) => {
  console.log(name);
  console.log(desc);
  console.log(interests);
  
  return (
    <div className="font-sans bg-white text-gray-800 max-w-2xl mx-auto my-10  p-6 border border-gray-300 rounded-lg shadow-lg">
  <h1 className="text-center text-3xl font-bold text-blue-500">
    {name}
  </h1>
  <p className="text-lg leading-relaxed text-center my-4">
    {desc}
  </p>

  <h2 className="text-2xl font-semibold text-blue-500 mb-2 text-center">
    Interests
  </h2>
  <ul className="list-disc list-inside mb-4 text-center">
    {interests.map((item, index) => (
      <li key={index} className="text-lg">
        {item}
      </li>
    ))}
  </ul>

  <div className="flex justify-center space-x-4 mt-6">
  {linkedin && (
    <a href={linkedin} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
      LinkedIn
    </a>
  )}
  {twitter && (
    <a href={twitter} className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg">
      Twitter
    </a>
  )}
</div>
</div>

  )
}

export default Card
