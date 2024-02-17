import { Button } from "./Button";

export function Friend({ friend, setSelectFriendOn, setFriendname }) {

	
  const onSelectFriendHandler = () => {
    setFriendname(friend.name);
    setSelectFriendOn((value) => !value);
  };
  return (
    <li className="friend">
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
      <Button onClickHandler={onSelectFriendHandler} name={friend.name}>
        Select
      </Button>
    </li>
  );
}
