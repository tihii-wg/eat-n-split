import { useState } from "react";
import "./App.css";
import v1 from "react-uuid";
import { FriendsList } from "./FriendsList";
import { AddFriendsForm } from "./AddFriendsForm";
import { FormSplitBill } from "./FormSplitBill";
import { Button } from "./Button";

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
  const [freindList, setFriendList] = useState(initialFriends);
  const [addFriendOn, setAddFriendOn] = useState(false);
  const [selectFriendOn, setSelectFriendOn] = useState(false);
  const [newFriendName, setNewFriendName] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("http://i.pravatar.cc/48");

  const addnewFriend = (name, image) => {
    let newFriend = {
      id: v1(),
      name,
      image,
      balance: 0,
    };
    if (!name || !image) return;
    setFriendList([...freindList, newFriend]);
    setNewFriendName("");
    setNewImageUrl("http://i.pravatar.cc/48");
  };

  const onAddFriendHandler = () => {
    setAddFriendOn((value) => !value);
  };

  const onSelectFriendHandler = () => {
    setSelectFriendOn((value) => !value);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friensList={freindList}
          onSelectFriendHandler={onSelectFriendHandler}
        />
        {addFriendOn && (
          <AddFriendsForm
            newFriendName={newFriendName}
            setNewFriendName={setNewFriendName}
            newImageUrl={newImageUrl}
            setNewImageUrl={setNewImageUrl}
            addnewFriend={addnewFriend}
          />
        )}
        <Button onClickHandler={onAddFriendHandler}>
          {addFriendOn ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectFriendOn && <FormSplitBill />}
    </div>
  );
}

export default App;
