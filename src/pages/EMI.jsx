import { useState } from "react";

export default function EMI() {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);

  const calculateEMI = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/emi/calculate-emi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          principal,
          rate,
          tenure,
        }),
      });

      const data = await res.json();

      setEmi(data.emi);
      setSchedule(data.schedule);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>EMI Calculator</h2>

      <input
        placeholder="Principal"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
      />
      <br />

      <input
        placeholder="Rate"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />
      <br />

      <input
        placeholder="Tenure (months)"
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
      />
      <br />

      <button onClick={calculateEMI}>Calculate</button>

      {emi && (
        <h3 style={{ marginTop: "20px" }}>
          EMI: {emi} PKR
        </h3>
      )}

      {schedule.length > 0 && (
        <table border="1" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Month</th>
              <th>EMI</th>
              <th>Interest</th>
              <th>Principal</th>
              <th>Balance</th>
            </tr>
          </thead>

          <tbody>
            {schedule.map((row, i) => (
              <tr key={i}>
                <td>{row.month}</td>
                <td>{row.emi}</td>
                <td>{row.interest}</td>
                <td>{row.principal}</td>
                <td>{row.balance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}