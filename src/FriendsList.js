import { Friend } from "./Friend";

export function FriendsList({
  friensList,
  setSelectFriendOn,
  setFriendname,
}) {
  return (
    <ul className="friends">
      {friensList.map((friend) => (
        <Friend
          friend={friend}
          setSelectFriendOn={setSelectFriendOn}
          setFriendname={setFriendname}
        />
      ))}
    </ul>
  );
}
