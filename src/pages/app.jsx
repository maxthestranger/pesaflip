import Header from "../components/header.jsx";
import Chat from "../components/chat.jsx";
import RoundStats from "../components/roundStats.jsx";

function App() {
  return (
      <>
        <Header />
        <section className="flex items-center justify-between">
            <Chat />
            <RoundStats />
        </section>
      </>
  )
}

export default App
