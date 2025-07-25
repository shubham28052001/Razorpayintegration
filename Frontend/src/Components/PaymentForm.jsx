import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const PaymentForm = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState(1000);
    const [customAmount, setCustomAmount] = useState("");
    const [tipPercent, setTipPercent] = useState(0);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [anonymous, setAnonymous] = useState(false)

    const handlePaymentSuccess = (response) => {
    console.log("💸 Payment ID:", response.razorpay_payment_id);
    console.log("🧾 Order ID:", response.razorpay_order_id);
    navigate("/thank-you");
};
    const getTotalAmount = () => {
        const base = customAmount ? Number(customAmount) : amount;
        const tip = (base * tipPercent) / 100;
        return base + tip;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const baseAmount = customAmount ? Number(customAmount) : amount;

        const payload = {
            name,
            email,
            phone: mobile,
            address,
            anonymous,
            amount: baseAmount,
            tip: tipPercent,
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_URL}/api/payments/create-order`, payload);
            const data = response.data;
            const options = {
                key:import.meta.env.VITE_RAZORPAY_KEY,   
                amount: data.amount,
                currency: data.currency,
                name: "Support Fundraiser",
                description: "Thank you for your support ❤️",
                order_id: data.orderId,
                handler: handlePaymentSuccess,
                prefill: {
                    name: name,
                    email: email,
                    contact: mobile,
                },
                notes: data.notes,
                theme: {
                    color: "#44B6B7",
                },
            };
            if (typeof window !== 'undefined' && window.Razorpay) {
                const rzp = new window.Razorpay(options);
                rzp.open();
            } else {
                alert("Razorpay SDK failed to load. Please refresh the page.");
            }


            setName('');
            setEmail('');
            setMobile('');
            setAddress('');
            setAnonymous(false);
            setCustomAmount('');
            setTipPercent(0);
            setAmount(1000);


        } catch (error) {
            console.error("❌ Payment initiation failed:", error);
            alert("Payment failed. Try again later.");
        }


        setName('')
        setEmail('')
        setMobile('')
        setAddress('')
        setAnonymous(false)
        // You will call backend API here to get Razorpay order_id and proceed to payment
    };

    return (

        <div
            className="px-6 py-2 shadow-lg rounded-xl bg-white">


            <h1
                className="text-sm text-center font-bold mb-4 text-gray-400 
            ">Most contributors contribute approx <span className="text-[#03E7EC] ">₹2500</span> to this Fundraiser
            </h1>





            <div
                className="mb-4">
                <div className="flex gap-3 flex-wrap justify-center">
                    {[1000, 2500, 4000].map((amt) => (
                        <button
                            key={amt}
                            onClick={() => {
                                setAmount(amt);
                                setCustomAmount("");
                            }}
                            className={`px-6 py-1 rounded-full border ${amount === amt && !customAmount
                                ? "bg-[#44B6B7] text-white "
                                : "bg-white text-black"
                                }`}
                        >
                            ₹{amt}
                        </button>
                    ))}
                </div>
                <div className="flex justify-center mt-2">
                    <input
                        type="number"
                        placeholder="Other Amount"
                        className="border px-4 py-2 rounded-full w-38"
                        value={customAmount}
                        min={0}
                        step={100}
                        onChange={(e) => {
                            const value = Number(e.target.value);
                            if (value % 100 === 0) {
                                setCustomAmount(value);
                            }
                        }}
                    />
                </div>
            </div>






            <div
                className="bg-teal-100
             p-4 rounded-lg shadow-md mx-auto w-full max-w-md ">
                <p className="text-gray-700 text-sm">
                    Ketto is charging 0% platform fee* for this fundraiser,
                    relying solely on the generosity of contributors like you.
                    <span className="inline-block ml-1 text-blue-500 cursor-pointer">ℹ️</span>
                </p>

                <div className="mt-1 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2">
                    <h2 className="font-semibold text-gray-800 mr-2">
                        Support us by adding a tip of:
                    </h2>
                    <select
                        id="tip"
                        value={tipPercent}
                        onChange={(e) => {
                            setTipPercent(Number(e.target.value))
                        }}
                        className="border rounded px-2 py-1 text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value={0}>0%</option>
                        <option value={5}>5%</option>
                        <option value={10}>10%</option>
                        <option value={18}>18%</option>
                    </select>
                    <div className="mt-1 text-sm font-medium text-gray-800">
                        Total Amount: <span className="font-semibold">INR {getTotalAmount()}</span>
                    </div>
                </div>
            </div>






            <form
                onSubmit={handleSubmit}>
                <div className="mb-4">
                    <input
                        required
                        type="text"
                        placeholder="Name"
                        className="w-full max-w-[500px] mx-auto border px-4 py-2 mt-2 rounded block"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <div className="mb-4">
                    <input
                        required
                        type="email"
                        placeholder="Email"
                        className="w-full max-w-[500px] mx-auto border px-4 py-2 mt-2 rounded block"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />
                </div>
                <div className="mb-4">
                    <input
                        required
                        type="text"
                        placeholder="Mobile Number"
                        className="w-full max-w-[500px] mx-auto border px-4 py-2 mt-2 rounded block"
                        value={mobile}
                        onChange={(e) => {
                            const onlyDigits = e.target.value.replace(/\D/g, '');
                            if (onlyDigits.length <= 10) {
                                setMobile(onlyDigits);
                            }
                        }}
                        maxLength={10}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        placeholder="Address (Optional)"
                        className="w-full max-w-[500px] mx-auto border px-4 py-2 mt-2 rounded block"
                        value={address}
                        onChange={(e) =>
                            setAddress(e.target.value)
                        }
                    />
                </div>

                <div className="mb-4 flex justify-center items-center gap-2">
                    <input
                        type="checkbox"
                        id="anonymous"
                        checked={anonymous}
                        onChange={(e) =>
                            setAnonymous(e.target.checked)
                        }
                    />
                    <h2>Make my contribution anonymous</h2>
                </div>

                <button
                    type="submit"
                    className="bg-[#00C0BC] text-white font-semibold hover:bg-green-700 w-full max-w-[500px] mx-auto border px-4 py-2 mt-2 rounded block rounded-full"
                >
                    Proceed to Contribute ₹{getTotalAmount()}
                </button>
            </form>



        </div>
    );
};

export default PaymentForm;
