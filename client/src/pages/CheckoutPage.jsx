import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import UserLayout from "../layout/user/UserLayout";
import { Button, Steps, Card, Typography, Spin } from "antd";
import ShippingForm from "../components/checkout/ShippingForm";
import PaymentForm from "../components/checkout/PaymentForm";
import OrderReview from "../components/checkout/OrderReview";

const { Title } = Typography;
const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to get user data
    setTimeout(() => {
      setUserData({
        fullName: "Jane Doe",
        address: "123 Main St",
        city: "Anytown",
        country: "USA",
        cardNumber: "**** **** **** 1234",
        cardName: "Jane Doe",
        expiry: "12/25",
        cvv: "***",
      });
      setLoading(false);
    }, 1000);
  }, []);

  const steps = [
    { title: "Shipping", content: <ShippingForm userData={userData} /> },
    {
      title: "Payment",
      content: (
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      ),
    },
    { title: "Review", content: <OrderReview userData={userData} /> },
  ];

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  if (loading) {
    return (
      <UserLayout>
        <div className="flex justify-center items-center h-screen">
          <Spin size="large" />
        </div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="max-w-4xl mx-auto p-4">
        <Title level={2} className="text-center text-pink-600 mb-8">
          Checkout
        </Title>

        <Steps
          current={currentStep}
          className="mb-8"
          items={steps.map((item) => ({
            title: <span className="text-pink-600">{item.title}</span>,
          }))}
        />

        <Card className="mb-8 shadow-lg rounded-lg p-6 border border-pink-200">
          {steps[currentStep].content}
        </Card>

        <div className="flex justify-between">
          {currentStep > 0 && (
            <Button
              onClick={prevStep}
              className="bg-pink-100 text-pink-600 hover:bg-pink-200"
            >
              Previous
            </Button>
          )}
          {currentStep < steps.length - 1 && (
            <Button
              onClick={nextStep}
              className="bg-pink-600 text-white hover:bg-pink-700 ml-auto"
            >
              Next
            </Button>
          )}
          {currentStep === steps.length - 1 && (
            <Button
              onClick={() => console.log("Order placed!")}
              className="bg-pink-600 text-white hover:bg-pink-700 ml-auto"
            >
              Place Order
            </Button>
          )}
        </div>
      </div>
    </UserLayout>
  );
};

export default CheckoutPage;
