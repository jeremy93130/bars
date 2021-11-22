import React, {useState} from 'react';

import { createContext } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {drinks} from "../Bars.json"

const MapContext = createContext({})

const MapContextProvider = (props) => {
    useEffect(() => {
        lat: 
    })

    const [location, setLocation] = useState(null)
    const [bars, setBars] = useState(bars)

    const value = {
        location: location,
        bars: bars
    }

    return (
        <MapContextProvider value={value}>
            {props.children}
        </MapContextProvider>
    );
}

export {
    MapContextProvider,
    MapContext
}