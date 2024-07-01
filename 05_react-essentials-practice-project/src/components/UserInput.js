export default function UserInput({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
  onDataChange,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input
            type="number"
            required
            value={initialInvestment}
            onChange={(e) => onDataChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input
            type="number"
            required
            value={annualInvestment}
            onChange={(e) => onDataChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input
            type="number
            required"
            required
            value={expectedReturn}
            onChange={(e) => onDataChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            required
            value={duration}
            onChange={(e) => onDataChange("duration", e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
