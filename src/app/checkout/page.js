"use client"

import styles from "@/app/styles/checkout.module.css";
import { useState } from "react";

// const PHONE_REGEX = /^(\+\d{1,2}\s?)?((\d{3})|\(\d{3}\))[\s.-]?\d{3}[\s.-]?\d{4}$/;
// const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

const PaymentCheckout = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "",
    paymentMethod: "creditCard",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    let value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Form submitted:", user);
      setStatus("success");
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  return (

    <div className={styles.CheckoutContainer}>
    <form className={styles.paymentForm} onSubmit={handleSubmit}>
     <h2 className={styles.CheckoutHead}>
          checkout 
        </h2>
      <div className={styles.inputField}>
        <label htmlFor="fullName" className={styles.label}>
          Full Name
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your full name"
            className={styles.input}
            value={user.fullName}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className={styles.inputField}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className={styles.input}
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className={styles.inputField}>
        <label htmlFor="address" className={styles.label}>
          Address
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Enter your address"
            className={styles.input}
            value={user.address}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className={styles.inputField}>
        <label htmlFor="city" className={styles.label}>
          City
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter your city"
            className={styles.input}
            value={user.city}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className={styles.inputField}>
        <label htmlFor="zipCode" className={styles.label}>
          Zip Code
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            placeholder="Enter your zip code"
            className={styles.input}
            value={user.zipCode}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className={styles.inputField}>
        <label htmlFor="country" className={styles.label}>
          Country
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Enter your country"
            className={styles.input}
            value={user.country}
            onChange={handleChange}
            required
          />
        </label>
      </div>

      <div className={styles.inputField}>
        <label htmlFor="paymentMethod" className={styles.label}>
          Payment Method
          <select
            name="paymentMethod"
            id="paymentMethod"
            className={styles.input}
            value={user.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="creditCard">Credit Card</option>
            <option value="paypal">UPI</option>
            <option value="paypal">PayPal</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </label>
      </div>

      <div>
        {status === "success" && (
          <p className={styles.successMsg}>Payment successful!</p>
        )}
        {status === "error" && (
          <p className={styles.errorMsg}>
            Error processing payment. Please try again.
          </p>
        )}

        <button type="submit" className={styles.submitButton}>
          Confirm Payment
        </button>
      </div>
    </form>
    </div>
  );
};

export default PaymentCheckout;
