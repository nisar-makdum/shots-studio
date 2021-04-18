import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentCardForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState('')
    const [paymentSuccess, setPaymentSuccess] = useState('')
    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return;
        }


        const cardElement = elements.getElement(CardElement);


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });



        if (error) {
            setPaymentError(error.message)
            setPaymentSuccess(null)
        } else {
            setPaymentSuccess(paymentMethod.id)
            setPaymentError(null)

        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button className="btn btn-danger btn-lg mt-5" type="submit" disabled={!stripe}>
                Pay
        </button>
        </form>
        {
            paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
        }
        {
            paymentSuccess && <p style={{ color: 'green' }}>Your Payment Has Been Successful</p>
        }
    </div>
    );
};

export default PaymentCardForm;