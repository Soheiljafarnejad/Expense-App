import ExpenseApp from "./Components/ExpenseApp";
import "./App.css";

const App = () => {
  return (
    <section className="app">
      <header>
        <h1>Expense</h1>
      </header>
      <main>
        <ExpenseApp />
      </main>
    </section>
  );
};

export default App;
