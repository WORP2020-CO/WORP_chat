import React, { useState } from 'react';

import Main from './Main';
import SignIn from './SignIn';
//import FirebaseLogin from './Login-func/FirebaseLogin';
import config from '../config.json';

export default () => {
  const [name, setName] = useState('');

  if (config.signInEnabled && name === '') {
    return <SignIn setName={setName} />;
  //} else {
    //return <FirebaseLogin />;
  //} 
  
  } else {
    return <Main name={name} />;
  }
};
