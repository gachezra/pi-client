import React, { useState } from 'react';
import axios from 'axios';
import ProductCard from './components/ProductCard';
import SignIn from './components/SignIn';
import Header from './components/Header';

const Shop = () => {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const signIn = async () => {
    const scopes = ['username', 'payments'];
    console.log('Scopes: ', scopes);
    const authResult = await window.Pi.authenticate(scopes, onIncompletePaymentFound);
    console.log('Whatever this is: ', window.pi);
    signInUser(authResult);
    setUser(authResult.user);
  }

  const signOut = () => {
    setUser(null);
    signOutUser();
  }

  const signInUser = (authResult) => {
    axios.post('/user/signin', { authResult });
    setShowModal(false);
  }

  const signOutUser = () => {
    return axios.get('/user/signout');
  }

  const onModalClose = () => {
    setShowModal(false);
  }

  const orderProduct = async (memo, amount, paymentMetadata) => {
    if (!user) {
      return setShowModal(true);
    }
    const paymentData = { amount, memo, metadata: paymentMetadata };
    const callbacks = {
      onReadyForServerApproval,
      onReadyForServerCompletion,
      onCancel,
      onError
    };
    const payment = await window.Pi.createPayment(paymentData, callbacks);
    console.log(payment);
  }

  const onIncompletePaymentFound = (payment) => {
    console.log("onIncompletePaymentFound", payment);
    return axios.post('/payments/incomplete', { payment });
  }

  const onReadyForServerApproval = (paymentId) => {
    console.log("onReadyForServerApproval", paymentId);
    axios.post('/payments/approve', { paymentId }, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  const onReadyForServerCompletion = (paymentId, txid) => {
    console.log("onReadyForServerCompletion", paymentId, txid);
    axios.post('/payments/complete', { paymentId, txid }, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' } });
  }

  const onCancel = (paymentId) => {
    console.log("onCancel", paymentId);
    return axios.post('/payments/cancelled_payment', { paymentId });
  }

  const onError = (error, payment) => {
    console.log("onError", error);
    if (payment) {
      console.log(payment);
    }
  }

  return (
    <>
      <Header user={user} onSignIn={signIn} onSignOut={signOut} />
      <ProductCard
        name="Apple Pie"
        description="You know what this is. Pie. Apples. Apple pie."
        price={3}
        pictureURL="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Apple_pie.jpg/1280px-Apple_pie.jpg"
        pictureCaption="Picture by Dan Parsons - https://www.flickr.com/photos/dan90266/42759561/, CC BY-SA 2.0, https://commons.wikimedia.org/w/index.php?curid=323125"
        onClickBuy={() => orderProduct("Order Apple Pie", 3, { productId: 'apple_pie_1' })}
      />
      <ProductCard
        name="Lemon Meringue Pie"
        description="Non-contractual picture. We might have used oranges because we had no lemons. Order at your own risk."
        price={5}
        pictureURL="https://live.staticflickr.com/1156/5134246283_f2686ff8a8_b.jpg"
        pictureCaption="Picture by Sistak - https://www.flickr.com/photos/94801434@N00/5134246283, CC BY-SA 2.0"
        onClickBuy={() => orderProduct("Order Lemon Meringue Pie", 5, { productId: 'lemon_pie_1' })}
      />
      {showModal && <SignIn onSignIn={signIn} onModalClose={onModalClose} />}
    </>
  );
}

export default Shop;