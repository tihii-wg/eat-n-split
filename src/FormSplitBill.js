import { Button } from "./Button";

export function FormSplitBill({
  billValue,
  expense,
  setExpense,
  setBillValue,
  whoPaying,
  setWhoPaying,
  selectedFriend,
  setBalance,
  paydByFriend,
}) {
  const setBillValueHandlel = (e) => {
    setBillValue(Number(e.target.value));
  };

  const setExpenseHandler = (e) => {
    setExpense(
      Number(e.target.value) > billValue ? expense : Number(e.target.value)
    );
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!billValue || !expense) return;
    setBalance(whoPaying === "You" ? paydByFriend : expense);
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
        <input type="text" disabled="disabled" value={paydByFriend}></input>
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
