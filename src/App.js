import ExpenseApp from "./Components/ExpenseApp";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <section className="app">
      <nav>
        <NavBar />
      </nav>
      <main>
        <ExpenseApp />
      </main>
      <aside></aside>
    </section>
  );
};

export default App;
