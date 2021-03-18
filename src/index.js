import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Pushy from 'pushy-sdk-web';


// Register visitor's browser for push notifications
Pushy.register({ appId: '5ff2c5eda21edfca797d297c' }).then(function (deviceToken) {
    // Print device token to console
    console.log('Pushy device token: ' + deviceToken);

    // Send the token to your backend server via an HTTP GET request
    //fetch('https://your.api.hostname/register/device?token=' + deviceToken);

    // Succeeded, optionally do something to alert the user
}).catch(function (err) {
    // Handle registration errors
    console.error(err);
});

// Handle push notifications (only when web page is open)
Pushy.setNotificationListener(function (data) {
    // Print notification payload data
    console.log('Received notification: ' + JSON.stringify(data));

    // Attempt to extract the "message" property from the payload: {"message":"Hello World!"}
    let message = data.message || 'Test notification';

    // Display an alert with message sent from server
    alert('Received notification: ' + message);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
