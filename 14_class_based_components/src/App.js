import Users from './components/Users';
import UserFinder from './components/UserFinder';
import UsersContext from './store/users-context';

const DUMMY_USERS = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Mike Doe' },
  { id: 4, name: 'Emily Doe' }
]

function App() {
  const usersContext = {
    users: DUMMY_USERS
  }

  return (
    <div>
      {/* <Users /> */}
      {/* <UserFinder /> */}
      <UsersContext.Provider value={usersContext}>
        <UserFinder />
      </UsersContext.Provider>
    </div>
  );
}

export default App;
