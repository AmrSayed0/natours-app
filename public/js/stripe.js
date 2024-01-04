/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const bookTour = async (tourId) => {
  try {
    const stripe = Stripe(
      'pk_test_51OSKGJEDcV8el2RU9acxyZRN3IXL5jW4wRM1yVCSCRMraGmGmJ3Hf9UbLPOY0vmgycsJQQxMis9i6suMt1LxO77p00AagIaHh0',
    );

    // Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
