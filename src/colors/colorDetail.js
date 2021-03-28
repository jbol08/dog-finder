import React from "react";
import { Link, Redirect} from "react-router-dom";




function ColorDetails({name,color}) {
  
  if (!color) return <Redirect to="/colors" />;

    return (
       
    
      <div className="ColorDetails" style={{background:color}}>
        <div>
        <h1>This color is {name}</h1>
        </div>
            <Link to="/colors">Go Back</Link>        
      </div>
    );
}


export default ColorDetails;