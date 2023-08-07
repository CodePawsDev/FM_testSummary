import { data } from "../data/data";

const SummaryByTest = () => {

  const bgButtonHover = "hover:bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)]";

  //Each Test Result 
  const renderedResults = data.map((test) => {
    return (
      <div key={test.category} className={`text-lg flex justify-between my-3 p-4 md:p-2 rounded-lg ${test.bg}`}>
        <div className="flex">
          <img src={test.icon} alt={test.category + " icon"} className="mr-2"/>
          <p className={`${test.textColor}`}>{test.category}</p>
        </div>
        <p className="text-blue-950 font-semibold">{test.score} <span className="text-gray-400">/ 100</span></p>
      </div>
    )
  });

    return (
        <div className="max-w-[375px] w-full md:w-1/2 px-8 mt-5 md:mt-0">
          <h2 className="font-bold text-xl text-slate-800 mb-5">Summary</h2>
          <div className="">
            {renderedResults}
          </div>
          <div className="flex justify-center">
            <button className={`text-white font-bold bg-slate-800 py-4 md:py-3 w-[350px] md:w-[500px] rounded-full mt-4 mb-10 md:mt-6 ${bgButtonHover}`}>Continue</button>
          </div>          
        </div>
    )
}

export default SummaryByTest;