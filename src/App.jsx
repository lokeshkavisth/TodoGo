import "./App.css";
import AddTodo from "./components/AddTodo";
import ListTodo from "./components/ListTodo";
import { VscGithub } from "react-icons/vsc";

function App() {
  return (
    <>
      <section className="flex flex-col gap-10 justify-center items-center">
        <a
          href="https://github.com/lokeshkavisth"
          target="_blank"
          rel="noreferrer"
          className="text-3xl"
          title="github.com/lokeshkavisth"
        >
          <VscGithub />
        </a>
        <AddTodo />
        <ListTodo />
      </section>
    </>
  );
}

export default App;
