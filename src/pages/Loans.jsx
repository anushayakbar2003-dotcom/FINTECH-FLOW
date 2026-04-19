import { useState } from "react";

export default function Loans() {
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [amount, setAmount] = useState("");
  const [tenure, setTenure] = useState("");
  const [rate, setRate] = useState("");

  const [error, setError] = useState("");

  const nextStep = () => {
    if (step === 1) {
      const cnicRegex = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;

      if (!name || !cnic) {
        setError("Fill all fields");
        return;
      }

      if (!cnicRegex.test(cnic)) {
        setError("Invalid CNIC format (12345-1234567-1)");
        return;
      }
    }

    if (step === 2) {
      if (!amount || !tenure || !rate) {
        setError("Fill loan details");
        return;
      }
    }

    setError("");
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
    setError("");
  };

  const submitLoan = () => {
    alert("Loan Application Submitted Successfully!");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Loan Application</h2>

      {error && (
        <p style={{ color: "red" }}>{error}</p>
      )}

      {/* STEP 1 */}
      {step === 1 && (
        <div>
          <h3>Step 1: Personal Info</h3>

          <input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="CNIC (12345-1234567-1)"
            value={cnic}
            onChange={(e) => setCnic(e.target.value)}
          />
        </div>
      )}

      {/* STEP 2 */}
      {step === 2 && (
        <div>
          <h3>Step 2: Loan Details</h3>

          <input
            placeholder="Loan Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <input
            placeholder="Tenure (Months)"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />

          <input
            placeholder="Interest Rate (%)"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
      )}

      {/* STEP 3 */}
      {step === 3 && (
        <div>
          <h3>Review Application</h3>

          <p><b>Name:</b> {name}</p>
          <p><b>CNIC:</b> {cnic}</p>
          <p><b>Amount:</b> {amount}</p>
          <p><b>Tenure:</b> {tenure}</p>
          <p><b>Rate:</b> {rate}%</p>

          <button onClick={submitLoan}>
            Submit Loan
          </button>
        </div>
      )}

      {/* NAVIGATION */}
      <div style={{ marginTop: "20px" }}>
        {step > 1 && (
          <button onClick={prevStep}>
            Back
          </button>
        )}

        {step < 3 && (
          <button onClick={nextStep}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}