import React from 'react';

const SignIn = ({ onSignIn, onModalClose }) => {
  return (
    <div style={{ background: 'white', position: 'absolute', left: '15vw', top: '40%', width: '70vw', height: '25vh', border: '1px solid black', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <p style={{ fontWeight: 'bold' }}>You need to sign in first.</p>
      <div>
        <button onClick={onSignIn} style={{ marginRight: '1em' }}>Sign in</button>
        <button onClick={onModalClose}>Close</button>
      </div>
    </div>
  )
};

export default SignIn;