import { Friend } from "./Friend";

export function FriendsList({ friensList, onSelectFriendHandler }) {
  return (
    <ul className="friends">
      {friensList.map((friend) => (
        <Friend friend={friend} onSelectFriendHandler={onSelectFriendHandler} />
      ))}
    </ul>
  );
}
