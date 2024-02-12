import "./App.css";
import v1 from "react-uuid";

const initialFriends = [
  {
    id: v1(),
    name: "Clark",
    image: "http://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: v1(),
    name: "Sarah",
    image: "http://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: v1(),
    name: "Anthony",
    image: "http://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function App() {
  return (
    <div className="a  pp">
      <div className="sidebar">
        <FriendsList friensList={initialFriends} />
        <AddFriendsForm />
      </div>
    </div>
  );
}

export default App;

function FriendsList({ friensList }) {
  return (
    <ul>
      {friensList.map((friend) => (
        <Friend friend={friend} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}
      <Button>Select</Button>
    </li>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}

function AddFriendsForm() {
  return (
    <form className="add-friends-form">
      <label>Friend name</label>
      <input type="text"></input>
      <label>Image URL</label>
		  <input type="text"></input>
		  <Button>Add</Button>
    </form>
  );
}
