import React, {useState} from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ColorList from './ColorPicker';
import SingleColor from './color';
import ColorForm from './colorForm';

function Routes() {
    const initialColors = {
        red: '#FF0000',
        green: '#00FF00',
        blue: '#0002FF'
    }
    const [colors, setColors] = useState('colors', initialColors);
    
    const handleAddColor = (newColor) => {
		setColors((colors) => ({ ...colors, ...newColor }));
	};

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/colors">
					<ColorList colors={colors} />
				</Route>
				<Route exact path="/colors/new">
					<ColorForm add={handleAddColor} />
				</Route>
				<Route exact path="/colors/:color">
					<SingleColor colors={colors} />
				</Route>
				<Redirect to="/colors" />
			</Switch>
		</BrowserRouter>
	);
};



export default Routes;