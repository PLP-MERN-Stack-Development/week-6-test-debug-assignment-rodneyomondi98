import BugList from "./components/BugList";
import BugForm from "./components/BugForm";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="p-4">
      <ErrorBoundary>
        <BugForm />
        <BugList />
      </ErrorBoundary>
    </div>
  );
}

export default App;

