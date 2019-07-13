import * as React from 'react';
import '../components/PlaceholderLoader.css';

export const PlaceHolderLoader: React.FC = props => {

    return (
        <div className="p-2">
            <div className="bars">
                <div className="bar bar1 loading"></div>
                <div className="bar bar2 loading"></div>
            </div>
            <div className="bars">
                <div className="bar bar1 loading"></div>
                <div className="bar bar2 loading"></div>
            </div>
            <div className="bars">
                <div className="bar bar1 loading"></div>
                <div className="bar bar2 loading"></div>
            </div>
            <div className="bars">
                <div className="bar bar1 loading"></div>
                <div className="bar bar2 loading"></div>
            </div>
        </div>
    );
};