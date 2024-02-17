import { Button } from "./Button";

export function AddFriendsForm({
  newFriendName,
  setNewFriendName,
  setNewImageUrl,
  newImageUrl,
  addnewFriend,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    addnewFriend(newFriendName, newImageUrl);
  };
  return (
    <form className="add-friends-form" onSubmit={handleSubmit}>
      <div className="friend-input">
        <label>Friend name</label>
        <input
          type="text"
          value={newFriendName}
          onChange={(e) => {
            setNewFriendName(e.target.value);
          }}
        ></input>
      </div>
      <div className="url-input">
        <label>Image URL</label>
        <input
          type="text"
          value={newImageUrl}
          onChange={(e) => {
            setNewImageUrl(e.target.value);
          }}
        ></input>
      </div>
      <Button>Add</Button>
    </form>
  );
}
