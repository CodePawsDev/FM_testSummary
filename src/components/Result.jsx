const Result = () => {
    const bgGradient = "bg-gradient-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)]";
    const circleGradient = "bg-gradient-to-t from-[hsla(256, 72%, 46%, 1)] to-[hsla(241, 72%, 46%, 0)]";

    return (
        <div className={`h-[400px] md:w-1/2 md:h-full rounded-b-3xl md:rounded-3xl flex flex-col justify-center items-center ${bgGradient}`}>
          <h2 className="font-bold text-gray-300 text-2xl mt-5 sm:mt-0 ">Your Result</h2>
          <div className={`w-[140px] h-[140px] rounded-full flex flex-col justify-center items-center my-8 ${circleGradient}`}>
            <p className="text-white text-6xl font-semibold">76</p>
            <p className="text-gray-300">of 100</p>
          </div>
          <p className="text-white text-2xl mb-3">Great</p>
          <p className="text-gray-200 w-9/12 md:w-4/6 text-center mb-7 md:mb-0">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
    )
}

export default Result;