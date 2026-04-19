import { useEffect, useState } from "react";

function Wallet() {
  const [wallet, setWallet] = useState(null);
  const [amount, setAmount] = useState("");

  // FETCH WALLET DATA
  const fetchWallet = () => {
    fetch("http://localhost:5000/api/wallet")
      .then(res => res.json())
      .then(data => setWallet(data));
  };

  // LOAD ON PAGE START
  useEffect(() => {
    fetchWallet();
  }, []);

  // DEPOSIT MONEY
  const depositMoney = async () => {
    if (!amount) return alert("Enter amount");

    await fetch("http://localhost:5000/api/wallet/deposit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount) })
    });

    setAmount("");
    fetchWallet();
  };

  // WITHDRAW MONEY
  const withdrawMoney = async () => {
    if (!amount) return alert("Enter amount");

    await fetch("http://localhost:5000/api/wallet/withdraw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount) })
    });

    setAmount("");
    fetchWallet();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Wallet Page</h1>

      {wallet ? (
        <div style={{ marginBottom: "20px" }}>
          <h2>Balance: {wallet.balance} PKR</h2>
          <p>Owner: {wallet.owner}</p>
          <p>Currency: {wallet.currency}</p>
        </div>
      ) : (
        <p>Loading wallet...</p>
      )}

      {/* INPUT */}
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "5px", marginRight: "10px" }}
      />

      {/* BUTTONS */}
      <button onClick={depositMoney} style={{ marginRight: "10px" }}>
        Deposit
      </button>

      <button onClick={withdrawMoney}>
        Withdraw
      </button>
    </div>
  );
}

export default Wallet;