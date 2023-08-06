import Result from "./components/Result";
import SummaryByTest from "./components/SummaryByTest";

function App() {

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-full h-screen md:w-[650px] md:h-[450px]  md:rounded-3xl shadow-xl flex flex-col md:flex-row items-center md:justify-center">
        {/* left side */}
        <Result />
        {/* right side */}
        <SummaryByTest />
      </div>
    </div>
  )
}

export default App
