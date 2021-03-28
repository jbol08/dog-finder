import React from 'react';
import ColorDetail from './colorDetail';
import { useParams } from 'react-router-dom';

function SingleColor ({ colors })  {
	const { color } = useParams();

    if (color) {
        const colorHex = colors[color];
        return <ColorDetail name={color} color={colorHex} />;
    }
};

export default SingleColor;