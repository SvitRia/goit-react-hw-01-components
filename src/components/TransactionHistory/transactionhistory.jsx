import style from "./TransactionHistory.module.css"
export const TransactionsHead = () => {

    return (<thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>)
}

export const TransactionsItem = ({type, amount, currency, id }) => {
    return ( <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>

    )
}

  export const TransactionsHistory = ({ transactions }) => {
    return (
      <table className={style.transactionHistory}>
          <TransactionsHead />
         <tbody>
                {transactions.map((transaction) => <TransactionsItem id={transaction.id} type={transaction.type} amount={transaction.amount} currency={transaction.currency}></TransactionsItem>)}
  </tbody>
</table>
    )
}
