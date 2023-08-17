import "./App.css";
import CardSection from "./components/Cards/CardSection";
import FormSection from "./components/Formsection/FormSection";
import TodoProvider from "./components/Provider/TodoProvider";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <FormSection />
        <CardSection />
      </TodoProvider>
    </div>
  );
}

export default App;
