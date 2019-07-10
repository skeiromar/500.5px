import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

// we pass in the store as a prop from parent 
// the store is used in the provider tag to connect 
// react to redux and make the store available to all children components 
export const Root = ({ store }) => (
    <Provider store={store}>
        {/* Hash router is how we render different components via urls. Connects react to a router */}
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
);