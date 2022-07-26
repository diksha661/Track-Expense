import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import {Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="e8618056-d38d-4c4d-8872-dbeced0260ae"  language= "en-US">
<Provider>
<App />
</Provider>
</SpeechProvider>,
 document.getElementById('root')
 );
