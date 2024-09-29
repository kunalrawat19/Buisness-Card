import React from 'react'
import {useState, useEffect} from 'react';
import Card from './Card';
import { useNavigate } from 'react-router-dom';
const Home = ({setCardData}) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    const [interests, setInterests] = useState([]);
    const [linkedin, setLinkedin] = useState('');
    const [twitter, setTwitter] = useState('');
    const [num, setNum] = useState(1);
    
    
    // Temporary state for delayed updates
    const [interestInput, setInterestInput] = useState('');
    const [tempName, setTempName] = useState('');
    const [tempDesc, setTempDesc] = useState('');
    const [tempLinkedin, setTempLinkedin] = useState('');
    const [tempTwitter, setTempTwitter] = useState('');
  
    // Update states every 30 seconds for each input
    useEffect(() => {
      const intervalId = setInterval(() => {
        setName(tempName);
        setDesc(tempDesc);
        setLinkedin(tempLinkedin);
        setTwitter(tempTwitter);
      }, 1000); // Update every 30 seconds
  
      // Cleanup interval on unmount
      return () => clearInterval(intervalId);
    }, [tempName, tempDesc, tempLinkedin, tempTwitter]); // Runs whenever temp values change
  
    const navigate = useNavigate();

    const handleButtonClick = () => {
      // Set the card data in App.js via setCardData
      setCardData({
        name,
        desc,
        interests, // Split interests by comma
        linkedin,
        twitter
      });
      // Navigate to /card
      navigate('/card');
    };
    function nameHandler(e) {
      setTempName(e.target.value); // Update temp state immediately
    }
  
    function descHandler(e) {
      setTempDesc(e.target.value); // Update temp state immediately
    }
  
    function submitHandler(e) {
       // Prevent default form submission
      if (interestInput.trim().length > 0) {
        setNum(num + 1);
        setInterests([...interests, interestInput]); // Add interest to the list
        setInterestInput(''); // Clear the input
      }
    }
  
    function linkedinHandler(e) {
      setTempLinkedin(e.target.value); // Update temp state for LinkedIn
    }
  
    function twitterHandler(e) {
      setTempTwitter(e.target.value); // Update temp state for Twitter
    }
  
 
    
    return (
      <div className='m-auto ' >
        <div className='m-auto mb-[1rem]'>
          <label>
            Your Name: <input value={tempName} type="text" onChange={nameHandler} />
          </label>
        </div>
        
        <div>
          <label>
            Description: <input value={tempDesc} type="text" onChange={descHandler} />
          </label>
        </div>
        
        <div>
          <label>
            Interests {num}: <input type="text" value={interestInput} onChange={(e) => setInterestInput(e.target.value)} />
          </label>
            <button onClick={submitHandler}>Submit</button>
        </div>
        
        <div>
          <label>
            LinkedIn: <input type="text" value={tempLinkedin} onChange={linkedinHandler} />
          </label>
        </div>
        
        <div>
          <label>
            Twitter: <input type="text" value={tempTwitter} onChange={twitterHandler} />
          </label>
        </div>
  
        <div>
          <button onClick={handleButtonClick}>Generate Card</button>
        </div>

      </div>
    );
}

export default Home
