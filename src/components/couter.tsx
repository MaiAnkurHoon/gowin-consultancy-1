
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className="bg-teal-600 shadow-md rounded-lg p-6 text-center  h-[auto]">
      <h2 className="md:text-4xl text-2xl font-bold mb-4 ">Total Projects Completed</h2>
      <p className="md:text-4xl  text-2xl font-semibold mb-4">
        <CountUp  end={159} duration={2.5} />
      </p>
    </div>
  );
};

export default Counter;