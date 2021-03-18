import './App.css';
import Button from './components/atoms/button/Button.jsx';
import Input from './components/atoms/input/Input.jsx';

function App() {
  return (
    <div className="App">
      <Input type="email" />
      <Input type="password" />

      <Button color="primary" text="Login" />
      <Button color="secondary" text="Login with Google" />
    </div>
  );
}

export default App;
