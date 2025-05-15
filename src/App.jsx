import NewTask from "./components/NewTask.jsx";
import SideBar from "./components/SideBar.jsx";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar />
      <NewTask />
    </main>
  );
}

export default App;
