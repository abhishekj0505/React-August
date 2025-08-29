import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";

function App() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isLoading, isAuthenticated } = useAuth0();

  return (
    <>
      <h1>Auth0 Implementation</h1>
      {user ? (
        <>
          <h1>
            Hello <span style={{ color: "brown" }}>{user.name}</span>, How are
            doing?
          </h1>
          <button
            onClick={() => {
              logout();
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <h1>Login to see magic.</h1>
          <button
            onClick={() => {
              loginWithRedirect();
            }}
          >
            Login
          </button>
        </>
      )}
    </>
  );
}

export default App;
