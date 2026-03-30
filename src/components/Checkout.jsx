import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./Cartcontext";
import Button from "./Button";

function InputField({ label, id, ...props }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base font-semibold text-text/70 tracking-wide">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className="w-full px-5 py-4 rounded-xl border border-text/15 bg-background
          text-base focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary
          transition placeholder:text-text/25"
      />
    </div>
  );
}

function StepIndicator({ current }) {
  const steps = ["Contact & Shipping", "Payment"];
  return (
    <div className="flex items-center gap-3 mb-10" aria-label="Checkout progress">
      {steps.map((label, i) => {
        const stepNum = i + 1;
        const done = stepNum < current;
        const active = stepNum === current;
        return (
          <div key={label} className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-200
                  ${done || active ? "bg-primary text-background" : "bg-text/10 text-text/40"}`}
                aria-current={active ? "step" : undefined}
              >
                {done ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                  </svg>
                ) : stepNum}
              </span>
              <span className={`text-sm font-semibold ${active ? "text-text" : "text-text/40"}`}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-px w-8 ${done ? "bg-primary" : "bg-text/15"}`} aria-hidden="true" />
            )}
          </div>
        );
      })}
    </div>
  );
}

function OrderSummary({ cartItems, totalPrice }) {
  return (
    <aside className="bg-primary/5 rounded-2xl p-8 space-y-6 sticky top-6">
      <h2 className="text-2xl font-bold text-text">Order Summary</h2>

      <ul className="space-y-5">
        {cartItems.map((item) => (
          <li key={item.id} className="flex gap-4 items-center">
            <img
              src={item.cover}
              alt={item.title}
              className="w-14 h-20 object-cover rounded-md"
            />

            <div className="flex-1 min-w-0">
              <p className="font-semibold text-base leading-snug">
                {item.title}
              </p>
              <p className="text-text/60 text-sm mt-1">
                Qty: {item.qty}
              </p>
            </div>

            <p className="font-bold text-base text-primary">
              ${(item.price * item.qty).toFixed(2)}
            </p>
          </li>
        ))}
      </ul>

      <div className="border-t border-text/10 pt-5 space-y-3">
        <div className="flex justify-between text-base text-text/70">
          <span>Subtotal</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-base text-text/70">
          <span>Shipping</span>
          <span className="text-primary font-medium">Free</span>
        </div>

        <div className="flex justify-between font-bold text-lg pt-3 border-t border-text/10">
          <span>Total</span>
          <span className="text-primary">
            ${totalPrice.toFixed(2)}
          </span>
        </div>
      </div>
    </aside>
  );
}

export default function Checkout() {
  const { cartItems, totalPrice } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center space-y-5 max-w-sm">
          <div className="w-20 h-20 rounded-full bg-primary/15 flex items-center justify-center mx-auto">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-10 h-10 text-primary" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-text">Order placed!</h2>
          <p className="text-text/60 text-lg leading-relaxed">
            Thanks for your purchase. You'll receive a confirmation email shortly.
          </p>
          <Button variant="primary" className="mt-2 px-8 py-3 text-base" onClick={() => navigate("/")}>
            Back to store
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-text/10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={() => step === 1 ? navigate("/") : setStep(1)}
            aria-label={step === 1 ? "Back to store" : "Back to contact and shipping"}
            className="flex items-center gap-2 text-text/50 hover:text-primary transition text-s font-medium hover:cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path fillRule="evenodd" d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z" clipRule="evenodd" />
            </svg>
            {step === 1 ? "Back to store" : "Back"}
          </button>
          <span className="text-2xl font-bold text-primary">BookStore</span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 items-start">
        <div>
          <h1 className="text-3xl font-bold text-text mb-6">Checkout</h1>
          <StepIndicator current={step} />

          {step === 1 && (
            <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-8" >
              <section aria-labelledby="contact-heading">
                <h2 id="contact-heading" className="text-xs font-bold text-text/40 uppercase tracking-widest mb-5">Contact</h2>
                <div className="space-y-5">
                  <InputField label="Full Name" id="name" type="text" placeholder="Jane Smith" required />
                  <InputField label="Email Address" id="email" type="email" placeholder="jane@example.com" required />
                  <InputField label="Phone Number" id="phone" type="tel" placeholder="+1 234 567 890" required />
                </div>
              </section>
              <section aria-labelledby="shipping-heading">
                <h2 id="shipping-heading" className="text-xs font-bold text-text/40 uppercase tracking-widest mb-5">Shipping Address</h2>
                <div className="space-y-5">
                  <InputField label="Street Address" id="street" type="text" placeholder="123 Main Street" required />
                  <div className="grid grid-cols-2 gap-4">
                    <InputField label="City" id="city" type="text" placeholder="New York" required />
                    <InputField label="ZIP Code" id="zip" type="text" placeholder="10001" required />
                  </div>
                  <InputField label="Country" id="country" type="text" placeholder="United States" required />
                </div>
              </section>
              <Button type="submit" variant="primary" className="w-full py-4 text-base rounded-xl">
                Continue to Payment →
              </Button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-8">
              <section aria-labelledby="payment-heading">
                <h2 id="payment-heading" className="text-xs font-bold text-text/40 uppercase tracking-widest mb-5">Payment Details</h2>
                <div className="space-y-5">
                  <InputField label="Cardholder Name" id="card-name" type="text" placeholder="Jane Smith" required />
                  <InputField label="Card Number" id="card-number" type="text" placeholder="0000 0000 0000 0000" maxLength={19} required />
                  <div className="grid grid-cols-2 gap-4">
                    <InputField label="Expiry Date" id="expiry" type="text" placeholder="MM / YY" maxLength={7} required />
                    <InputField label="Security Code" id="cvv" type="text" placeholder="CVV" maxLength={4} required />
                  </div>
                </div>
              </section>
              <Button type="submit" variant="primary" className="w-full py-4 text-base rounded-xl">
                Place Order — ${totalPrice.toFixed(2)}
              </Button>
            </form>
          )}
        </div>

        <OrderSummary cartItems={cartItems} totalPrice={totalPrice} />
      </div>
    </div>
  );
}