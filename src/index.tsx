import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hoc';
import WebFont from 'webfontloader'

const apolloClient = new ApolloClient({
    uri: 'http://localhost:3000/graphql'
})

WebFont.load({
    google: {
        families: ['Rubik', 'Noto Sans TC', 'sans-serif']
    }
})

ReactDOM.render(
    <ApolloProvider client={apolloClient}>
        <ApolloProvider client={apolloClient}>
            <App />
        </ApolloProvider>
    </ApolloProvider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
