import { Typography, Button, notification } from "antd";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const { Title, Text } = Typography;

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.error(error);
      notification.error({
        message: "Payment Error",
        description: error.message,
      });
    } else {
      console.log(paymentMethod);
      notification.success({
        message: "Payment Successful",
        description: "Your payment was successful!",
      });
    }
  };

  return (
    <div>
      <Title level={4} className="mb-4 text-pink-600">
        Payment Information
      </Title>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Text strong className="text-pink-600">
            Card Details
          </Text>
          <CardElement className="mt-2 p-2 border border-pink-300 rounded-md" />
        </div>
        <Button
          type="primary"
          htmlType="submit"
          className="bg-pink-600 text-white hover:bg-pink-700 w-full"
        >
          Pay
        </Button>
      </form>
    </div>
  );
};

export default PaymentForm;
