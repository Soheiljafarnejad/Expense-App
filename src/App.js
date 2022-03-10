import ExpenseApp from "./Components/ExpenseApp";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <section className="app">
      <section className="container">
        <nav className="nav">
          <NavBar />
        </nav>
        <main className="main">
          <ExpenseApp />
        </main>
      </section>
    </section>
  );
};

export default App;
