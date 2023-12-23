import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div style={{ color: "white" }}> {props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rs. {props.amount}/-</div>
      </div>
    </div>
  );
};

export default ExpenseItem;