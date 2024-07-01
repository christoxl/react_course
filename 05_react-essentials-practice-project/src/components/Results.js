import Result from "./Result";
import { calculateInvestmentResults } from "../util/investment";

export default function Results({ data }) {
  const results = calculateInvestmentResults({ ...data });
  console.log(results);
  const initialInvestment = results.length
    ? results[0].valueEndOfYear -
      results[0].interest -
      results[0].annualInvestment
    : 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.length ? (
          results.map((result) => {
            const totalInterest =
              result.valueEndOfYear -
              result.annualInvestment * result.year -
              initialInvestment;

            const totalAmountInvested = result.valueEndOfYear - totalInterest;

            return (
              <Result
                key={result.year}
                {...result}
                totalInterest={totalInterest}
                totalAmountInvested={totalAmountInvested}
              />
            );
          })
        ) : (
          <tr>
            <td colSpan={5} className="center">
              Still any value
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
