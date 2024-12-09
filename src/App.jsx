import User from "./components/User/user";
import usersData from './assets/users.json'

const App = () => {
  return (
    <>
      {/* <Header />
      <h3>Tag</h3>
      {33 + (11 * 44) / 3} */}
      {/* {false ? <h2>Hello</h2> : <h2>Buy</h2>} */}
      {/* <WelcomeSection />
      <Footer />

      <Message author="Oleg" message="Hello!" isOnline={true} />
      <Message author="Lecha" message="Hi!" isOnline={false} />
      <Message author="Arnold" message="Buy!" isOnline={true} /> */}

      <ul className="cardSteck">
        {usersData.map((user) => (
          <li key={user.id}>
            <User {...user} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
