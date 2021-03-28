import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';


function ColorPicker  ({ colors })  {
	return (
		<div className="ColorList">
			<div className="ColorList-headers">
				<h1>Welcome to the Color Factory</h1>
				<h2>
					<Link to="/colors/new">Add Color</Link>
				</h2>
			</div>
			<div className="ColorList-list">
				<h5>Select a color:</h5>
				
				{Object.keys(colors).map((color) => (
					<Link
						className="ColorList-color"
						style={{ backgroundColor: colors[color], color: 'white' }}
						key={color}
						to={`/colors/${color}`}
					>
						<span>{color}</span>
					</Link>
				))}
			</div>
		</div>
	);
};

export default ColorPicker;