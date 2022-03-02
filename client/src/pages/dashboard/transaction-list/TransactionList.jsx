import './TransactionList.css';

export default function TransactionList(){
  return(
    <div className="transaction-list">
      {/*======= Table Head ========*/}
      <div className="sort-section">
        <button>Most recent invoices</button>
        <button>Last Client</button>
        <a href="">All List</a>
      </div>

      <ul className="transactions-title">
      <li className="transaction">
            <p className="name shed-margin-padding">Client Name</p>
          <p className="issue-date">Issue Date</p>
          <p className="due-date">Due Date</p>
          <p className="amount">Amount</p>
          <p className="status">Status</p>
        </li>
      </ul>

      <ul className="transactions">

        {/*======= Table Details ======*/}
        <li className="transaction">
          <div className="client-name">
            <h4 className="name shed-margin-padding">Nadia Consulting PLC.</h4>
            <p className="invoice-number shed-margin-padding">Invoice No RCG - 332</p>
          </div>

          <p className="issue-date">1 hr ago</p>
          <p className="due-date">Wed, 11th Feb, 2022</p>
          <p className="amount">$2, 280.00</p>
          <p className="status">Sent</p>
        </li>

        <li className="transaction">
          <div className="client-name">
            <h4 className="name shed-margin-padding">Nadia Consulting PLC.</h4>
            <p className="invoice-number shed-margin-padding">Invoice No RCG - 332</p>
          </div>

          <p className="issue-date">1 hr ago</p>
          <p className="due-date">Wed, 11th Feb, 2022</p>
          <p className="amount">$2, 280.00</p>
          <p className="status">Sent</p>
        </li>

        <li className="transaction">
          <div className="client-name">
            <h4 className="name shed-margin-padding">Nadia Consulting PLC.</h4>
            <p className="invoice-number shed-margin-padding">Invoice No RCG - 332</p>
          </div>

          <p className="issue-date">1 hr ago</p>
          <p className="due-date">Wed, 11th Feb, 2022</p>
          <p className="amount">$2, 280.00</p>
          <p className="status">Sent</p>
        </li>

        <li className="transaction">
          <div className="client-name">
            <h4 className="name shed-margin-padding">Nadia Consulting PLC.</h4>
            <p className="invoice-number shed-margin-padding">Invoice No RCG - 332</p>
          </div>

          <p className="issue-date">1 hr ago</p>
          <p className="due-date">Wed, 11th Feb, 2022</p>
          <p className="amount">$2, 280.00</p>
          <p className="status">Sent</p>
        </li>

        <li className="transaction">
          <div className="client-name">
            <h4 className="name shed-margin-padding">Nadia Consulting PLC.</h4>
            <p className="invoice-number shed-margin-padding">Invoice No RCG - 332</p>
          </div>

          <p className="issue-date">1 hr ago</p>
          <p className="due-date">Wed, 11th Feb, 2022</p>
          <p className="amount">$2, 280.00</p>
          <p className="status">Sent</p>
        </li>

        <li className="transaction">
          <div className="client-name">
            <h4 className="name shed-margin-padding">Nadia Consulting PLC.</h4>
            <p className="invoice-number shed-margin-padding">Invoice No RCG - 332</p>
          </div>

          <p className="issue-date">1 hr ago</p>
          <p className="due-date">Wed, 11th Feb, 2022</p>
          <p className="amount">$2, 280.00</p>
          <p className="status">Sent</p>
        </li>

        <li className="transaction">
          <div className="client-name">
            <h4 className="name shed-margin-padding">Nadia Consulting PLC.</h4>
            <p className="invoice-number shed-margin-padding">Invoice No RCG - 332</p>
          </div>

          <p className="issue-date">1 hr ago</p>
          <p className="due-date">Wed, 11th Feb, 2022</p>
          <p className="amount">$2, 280.00</p>
          <p className="status">Sent</p>
        </li>

        <li className="transaction">
          <div className="client-name">
            <h4 className="name shed-margin-padding">Nadia Consulting PLC.</h4>
            <p className="invoice-number shed-margin-padding">Invoice No RCG - 332</p>
          </div>

          <p className="issue-date">1 hr ago</p>
          <p className="due-date">Wed, 11th Feb, 2022</p>
          <p className="amount">$2, 280.00</p>
          <p className="status">Sent</p>
        </li>

        <li className="transaction">
          <div className="client-name">
            <h4 className="name shed-margin-padding">The last Consulting PLC.</h4>
            <p className="invoice-number shed-margin-padding">Invoice No RCG - 332</p>
          </div>

          <p className="issue-date">1 hr ago</p>
          <p className="due-date">Wed, 11th Feb, 2022</p>
          <p className="amount">$2, 280.00</p>
          <p className="status">Sent</p>
        </li>

        {/* <li className="transaction">
          <div className="client-name">
            <h4 className="name shed-margin-padding">The last Consulting PLC.</h4>
            <p className="invoice-number shed-margin-padding">Invoice No RCG - 332</p>
          </div>

          <p className="issue-date">1 hr ago</p>
          <p className="due-date">Wed, 11th Feb, 2022</p>
          <p className="amount">$2, 280.00</p>
          <p className="status">Sent</p>
        </li> */}
      </ul>
    </div>
  )
}