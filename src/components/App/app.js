import { Profile } from "components/Profile/Profile"
import { Statistics } from "components/Statistics/Statistics"
import { Frienlist } from "components/FriendList/Friendlist"
import { TransactionsHistory } from "components/TransactionHistory/Transactionhistory"
import user from "Data/user.json"
import data from "Data/data.json"
import friends from "Data/friends.json"
import  transactions  from "Data/transactions.json"


export function App() {
    return (
        <div>
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
            
            <Statistics title="Upload stats" stats={data} />
            <Frienlist friends={friends} />
            <TransactionsHistory transactions={transactions} /> 
            </div>
    )
}