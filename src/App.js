import ExpenseApp from "./Components/ExpenseApp";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <section className="app">
      <nav className="nav">
        <NavBar />
      </nav>
      <main className="main">
        <ExpenseApp />
      </main>
      <aside className="aside"></aside>
    </section>
  );
};

export default App;
