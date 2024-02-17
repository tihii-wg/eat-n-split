import { Button } from "./Button";

export function FormSplitBill({
  billValue,
  expense,
  setExpense,
  setBillValue,
  whoPaying,
  setWhoPaying,
  friendName,
}) {
  const setBillValueHandlel = (e) => {
    setBillValue(e.target.value);
  };

  const setExpenseHandler = (e) => {
    setExpense(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form className="form-split-bill" onSubmit={submitHandler}>
      <h3>SPLIT A BILL WITH NAME</h3>
      <div className="bill-value">
        <label>Bill value</label>
        <input
          type="number"
          value={billValue}
          onChange={setBillValueHandlel}
        ></input>
      </div>
      <div className="you-expense">
        <label>You expense</label>
        <input
          type="number"
          value={expense}
          onChange={setExpenseHandler}
        ></input>
      </div>
      <div className="names">
        <label>Names expense</label>
        <input type="text" disabled="disabled"></input>
      </div>
      <div className="who">
        <label>Who is paying the bill&</label>
        <select
          value={whoPaying}
          onChange={(e) => {
            setWhoPaying(e.target.value);
          }}
        >
          <option>You</option>
          <option>{friendName}</option>
        </select>
      </div>
      <Button>Split Bill</Button>
    </form>
  );
}
