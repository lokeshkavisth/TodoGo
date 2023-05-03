import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";

function App() {
  return (
    <>
      <section className="flex flex-col gap-10 justify-center items-center">
        <AddTodo />
        <ListTodo />
      </section>
    </>
  );
}

export default App;
