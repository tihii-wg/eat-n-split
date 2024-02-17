import { Button } from "./Button";

export function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h3>SPLIT A BILL WITH NAME</h3>
      <div className="bill-value">
        <label>Bill value</label>
        <input type="text"></input>
      </div>
      <div className="you-expense">
        <label>You expense</label>
        <input type="text"></input>
      </div>
      <div className="names">
        <label>Names expense</label>
        <input type="text"></input>
      </div>
      <div className="who">
        <label>Who is paying the bill&</label>
        <select>
          <option>You</option>
          <option>name</option>
        </select>
      </div>
      <Button>Split Bill</Button>
    </form>
  );
}
