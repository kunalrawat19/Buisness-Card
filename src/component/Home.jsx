import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ setCardData }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [interest, setInterests] = useState([]);
  const [linkedin, setLinkedin] = useState('');
  const [twitter, setTwitter] = useState('');
  const [num, setNum] = useState(1);

  const [interestInput, setInterestInput] = useState('');
  const [tempName, setTempName] = useState('');
  const [tempDesc, setTempDesc] = useState('');
  const [tempLinkedin, setTempLinkedin] = useState('');
  const [tempTwitter, setTempTwitter] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setName(tempName);
      setDesc(tempDesc);
      setLinkedin(tempLinkedin);
      setTwitter(tempTwitter);
    }, 1000); // Update every 30 seconds

    return () => clearInterval(intervalId);
  }, [tempName, tempDesc, tempLinkedin, tempTwitter]);

  const navigate = useNavigate();

  const handleButtonClick = async () => {
    // Prepare the card data to be sent
    const cardData = {
      name,
      desc,
      interest,
      linkedin,
      twitter,
    };
    setCardData(cardData);
    navigate('/card');
    // try {
    //   // Send a POST request to the backend
    //   // console.log(JSON.stringify(cardData));
    //   // console.log(JSON.stringify(cardData));
    //   // Add this before making the POST request
    //   console.log(cardData);
      
    //   const response = await fetch('http://localhost:3000/cards', {
    //     method: 'POST', // HTTP method
    //     headers: {
    //       'Content-Type': 'application/json', // Specify the content type
    //     },
    //     body: JSON.stringify(cardData), // Convert the card data to JSON
    //   });
    //   console.log(response);
      
      
    //   if (!response.ok) {
    //     // Handle error response
    //     const errorData = await response.json();
    //     console.error('Error:', errorData.message);
    //     alert('Error posting card: ' + errorData.message); // Display error message
    //     return;
    //   }
  
    //   // If successful, navigate to the /card route
    //   const data = await response.json();
    //   console.log('Card stored successfully!', data);
    //   navigate('/card'); // Navigate to the /card page
    // } catch (error) {
    //   console.error('Error posting card:', error);
    //   alert('Error posting card: ' + error.message); // Display error message
    // }
  };

  function nameHandler(e) {
    setTempName(e.target.value);
  }

  function descHandler(e) {
    setTempDesc(e.target.value);
  }

  function submitHandler(e) {
    if (interestInput.trim().length > 0) {
      setNum(num + 1);
      setInterests([...interest, interestInput]);
      setInterestInput('');
    }
  }

  function linkedinHandler(e) {
    setTempLinkedin(e.target.value);
  }

  function twitterHandler(e) {
    setTempTwitter(e.target.value);
  }

  return (
    <div className='max-w-md mx-auto  p-8   text-white' >
      <h1 className='text-3xl font-bold text-gray-900 text-center mb-8 '>Create Your Card</h1>

      <div className='mx-auto mb-[2rem]' >
        <label className='block text-gray-700 text-sm font-bold mb-2 '>
          Your Name:
        </label>
        <input
          value={tempName}
          type="text"
          onChange={nameHandler}
          className='w-full  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..."'
        />
      </div>

      <div className='mb-[2rem]'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Description:
        </label>
        <input
          value={tempDesc}
          type="text"
          onChange={descHandler}
          className='w-full  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here...'
        />
      </div>

      <div className='mb-[2rem]'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Interests {num}:
        </label>
        <input
          type="text"
          value={interestInput}
          onChange={(e) => setInterestInput(e.target.value)}
          className='w-full  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here...'
        />
        <button
          onClick={submitHandler}
          className='mt-2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors'
        >
          Add Interest
        </button>
      </div>

      <div className='mb-[2rem]'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          LinkedIn:
        </label>
        <input
          type="text"
          value={tempLinkedin}
          onChange={linkedinHandler}
          className='w-full  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here...'
        />
      </div>

      <div className='mb-[2rem]'>
        <label className='block text-gray-700 text-sm font-bold mb-2'>
          Twitter:
        </label>
        <input
          type="text"
          value={tempTwitter}
          onChange={twitterHandler}
          className='w-full  placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here...'
        />
      </div>

      <div className='text-center'>
        <button
          onClick={handleButtonClick}
          className='w-full bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition-colors'
        >
          Generate Card
        </button>
      </div>
    </div>
  );
}

export default Home;
