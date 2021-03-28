import React from 'react';
import { Link } from "react-router-dom";






function DogList({dogs}) {
    
  
    return (        
    <div className="DogList">
        <h1>Here is are some dogs to check out. Which would you like to know more about?</h1>
        <div>
        {dogs.map((dog) => (
            <div className="col-3 text-center" key={dog.name}>
            
            <h3><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h3>

            <h3><Link to={`/dogs/${dog.name.toLowerCase()}`}>
            <img className="DogList-img" src={dog.src} alt={dog.name} />
          </Link></h3>
          </div>
        ))};
        </div>            
    </div>
    );
    
};

export default DogList;