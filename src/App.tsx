import Header from "./components/Header";
import PostList from "./components/PostList";
import { withLogger } from "./hoc/withLogger";

const LoggedHeader = withLogger(Header);

function App() {
  return (
    <>
    <LoggedHeader />

    <main>
      <PostList />
    </main>
    </>
  );
}

export default App;