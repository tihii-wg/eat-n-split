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
  const [newFriendName, setNewFriendName] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("http://i.pravatar.cc/48");
  const [billValue, setBillValue] = useState("");
  const [expense, setExpense] = useState("");
  const [whoPaying, setWhoPaying] = useState("You");
  const [selectedFriend, setSelectedFriend] = useState(null);
  const paydByFriend = billValue ? billValue - expense : "";

  const addnewFriend = (name, image) => {
    let newFriend = {
      id: v1(),
      name,
      image,
      balance: 0,
    };
    if (!name || !image) return;
    setFriendList((freindList) => [...freindList, newFriend]);
    setNewFriendName("");
    setNewImageUrl("http://i.pravatar.cc/48");
    setAddFriendOn((value) => !value);
  };

  const onAddFriendHandler = () => {
    setAddFriendOn((value) => !value);
  };

  const setBalance = (value) => {
    setFriendList((freindList) =>
      freindList.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: selectedFriend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  };

  function onSelectFriendHandler(friend) {
    setSelectedFriend((selectedFriend) =>
      selectedFriend?.id === friend.id ? null : friend
    );
    setAddFriendOn(false);
    setBillValue("");
    setExpense("");
    setWhoPaying("You");
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsList={freindList}
          onSelectFriendHandler={onSelectFriendHandler}
          selectedFriend={selectedFriend}
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

      {selectedFriend && (
        <FormSplitBill
          billValue={billValue}
          expense={expense}
          setBillValue={setBillValue}
          setExpense={setExpense}
          whoPaying={whoPaying}
          setWhoPaying={setWhoPaying}
          selectedFriend={selectedFriend}
          setBalance={setBalance}
          paydByFriend={paydByFriend}
        />
      )}
    </div>
  );
}

export default App;
