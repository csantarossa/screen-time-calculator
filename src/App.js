import Logo from "./assets/icons/logo.png";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App min-h-screen w-screen flex flex-col justify-center items-center main-background relative overflow-hidden">
      <div className="flex gap-3 justify-center items-center absolute top-16">
        <img src={Logo} alt="" className="h-7" />
        <h1 className="text-3xl font-normal text-center">Screen Time</h1>
      </div>

      <h3 className="absolute font-thin top-24 pt-2 text-lg">Calculator</h3>
      <Calculator />
    </div>
  );
}

export default App;
