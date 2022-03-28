import Form from "./components/Form";
import Users from "./components/Users";
function App() {

  return (
    <div className="container-fluid">
      <Form isEdit={false} />
      <Users />
    </div>
  );
}

export default App;
