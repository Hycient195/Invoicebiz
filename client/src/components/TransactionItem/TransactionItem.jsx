export default function({ name, invoiceNo, issueDate, dueDate, amount, status }){
  return(
    <li className="transaction">
      <div className="client-name">
        <h4 className="name shed-margin-padding">{name}.</h4>
        <p className="invoice-number shed-margin-padding">{invoiceNo}</p>
      </div>

      <p className="issue-date">{issueDate}</p>
      <p className="due-date">{dueDate}</p>
      <p className="amount">{amount}</p>
      <p className="status">{status}</p>
    </li>
  )
}