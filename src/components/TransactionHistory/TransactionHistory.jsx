import { TransactionTable, TransactionTableHead, TransactionTableInfo, TransactionTableTd } from "./TransactionHistory.styles";

const TransactionHistory = ({ items }) => {
  return (
      <TransactionTable className="transaction-history">
          <TransactionTableHead>
              <tr>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Currency</th>
              </tr>
          </TransactionTableHead>
          <tbody>
              {items.map(({ id, type, amount, currency }, index) => (
                  <TransactionTableInfo key={id} style={{ backgroundColor: index % 2 === 0 ? '#ffffff' : '#ecf1f3' }}>
                      <TransactionTableTd>{type}</TransactionTableTd>
                      <TransactionTableTd>{amount}</TransactionTableTd>
                      <TransactionTableTd>{currency}</TransactionTableTd>
                  </TransactionTableInfo>
              ))}
          </tbody>
      </TransactionTable>
  )
}

export default TransactionHistory;