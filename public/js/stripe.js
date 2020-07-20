/*eslint-disable*/
import axios from 'axios';
import { showAlert } from './alert';
const stripe = Stripe('pk_test_tGmW1UXUcfgglHn87YJ0aWZ100p4bGXv5N');

export const bookTour = async tourId => {
  try {
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/booking/checkout-session/${tourId}`
    );
    console.log(session);

    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
    showAlert('err', err);
  }
};
