import { formatter } from "../util/investment";

export default function Result({
  key,
  year,
  interest,
  valueEndOfYear,
  annualInvestment,
  totalInterest,
  totalAmountInvested,
}) {
  return (
    <tr key={key}>
      <td>{year}</td>
      <td>{formatter.format(valueEndOfYear)}</td>
      <td>{formatter.format(interest)}</td>
      <td>{formatter.format(totalInterest)}</td>
      <td>{formatter.format(totalAmountInvested)}</td>
    </tr>
  );
}
