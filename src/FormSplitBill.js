import { Button } from "./Button";

export function FormSplitBill({
  billValue,
  expense,
  setExpense,
  setBillValue,
  whoPaying,
  setWhoPaying,
  selectedFriend,
}) {
  const setBillValueHandlel = (e) => {
    setBillValue(e.target.value);
  };

  const setExpenseHandler = (e) => {
    setExpense(e.target.value);
  };

  const submitHandler = (e, id) => {
    e.preventDefault();
  };
  return (
    <form className="form-split-bill" onSubmit={submitHandler}>
      <h3>Split a bill with {selectedFriend.name}</h3>
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
        <label>{selectedFriend.name} expense</label>
        <input
          type="text"
          disabled="disabled"
          value={selectedFriend.balance}
        ></input>
      </div>
      <div className="who">
        <label>Who is paying the bill</label>
        <select
          value={whoPaying}
          onChange={(e) => {
            setWhoPaying(e.target.value);
          }}
        >
          <option>You</option>
          <option>{selectedFriend.name}</option>
        </select>
      </div>
      <Button>Split Bill</Button>
    </form>
  );
}
