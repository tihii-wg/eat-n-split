import { Friend } from "./Friend";

export function FriendsList({
  friendsList,
  onSelectFriendHandler,
	selectedFriend
}) {
  return (
    <ul className="friends">
      {friendsList.map((friend) => (
        <Friend
          key={friend.id}
				friend={friend}
				selectedFriend={selectedFriend}
				onSelectFriendHandler={onSelectFriendHandler}
        />
      ))}
    </ul>
  );
}
