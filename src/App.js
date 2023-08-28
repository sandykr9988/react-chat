import { useAuthState } from "react-firebase-hooks/auth";
import "./App.css";
import { auth } from "./component/Firebase";
import NavBar from "./component/Navbar";
import Welcome from "./component/Welcome";
import ChatBox from "./component/ChatBox";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : <ChatBox />}
    </div>
  );
}
export default App;
