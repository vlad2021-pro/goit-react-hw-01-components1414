import React from "react";
import user from "../datas/user.json";
import data from "../datas/data.json";
import friends from "../datas/friends.json";
import transactions from "../datas/transactions.json";
import Profile from "../Components/Profile/Profile";
import Statistics from "../Components/Statistics/Statistics";
import FriendList from "../Components/Friendlist/FriendList";
import TransactionHistory from "../Components/Transaction/TransactionHistory";
import { Container } from "../Apps/App.styled";

export default function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
}
