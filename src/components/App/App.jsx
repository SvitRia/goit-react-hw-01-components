import { Profile } from "components/Profile/Profile"
import { StatisticsTotal } from "components/Statistics/Statistics"
import { Frienlist } from "components/FriendList/Friendlist"
import { TransactionsHistory } from "components/TransactionHistory/TransactionHistory"
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
            
            <StatisticsTotal title="Upload stats" stats={data} />
            <Frienlist friends={friends} />
            <TransactionsHistory transactions={transactions} /> 
            </div>
    )
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
