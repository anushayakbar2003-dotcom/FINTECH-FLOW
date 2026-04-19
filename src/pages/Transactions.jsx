import { useEffect, useState } from "react";

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  const fetchTransactions = () => {
    let url = "http://localhost:5000/api/transactions";

    if (filter !== "all") {
      url += `?type=${filter}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTransactions(data));
  };

  useEffect(() => {
    fetchTransactions();
  }, [filter]);

  return (
    <div className="container">
      <h1>Transactions Page</h1>

      {/* FILTER BUTTONS */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("credit")}>Credit</button>
        <button onClick={() => setFilter("debit")}>Debit</button>
      </div>

      {/* LIST */}
      {transactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        transactions.map((t, index) => (
          <div
            key={t.id || index}
            className={`card ${t.type === "credit" ? "credit" : "debit"}`}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="icon">
              {t.type === "credit" ? "⬆️ Credit" : "⬇️ Debit"}
            </div>

            <h3>{t.type.toUpperCase()}</h3>

            <p>Amount: {t.amount} PKR</p>
            <p>{t.description}</p>

            <small>{new Date(t.timestamp).toLocaleString()}</small>
          </div>
        ))
      )}
    </div>
  );
}

export default Transactions;