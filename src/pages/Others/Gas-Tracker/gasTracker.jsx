// GasTrackerPage.jsx
import React from "react";
import { Rocket, Fuel } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import SearchBar from "../../../components/SearchBar";
import { Link } from 'react-router-dom';

const GasTrackerPage = () => {
  // Mock data for the chart
  const chartData = [
    { date: "Aug 18", price: 0 },
    { date: "Aug 25", price: 390 },
    { date: "Sep 01", price: 310 },
    { date: "Sep 08", price: 100 },
  ];

  return (
    <main className=" dark:bg-[#070136] bg-white dark:text-white text-black  min-h-screen max-w-screen-2xl mx-1 w-full mt-6  p-14">
      <div className="mb-8">
        <SearchBar />
      </div>
      <header className='mb-6'>
        <h1 className="text-3xl font-bold mb-2">Gas Tracker</h1>
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm sm:text-base mb-4 sm:mb-0">
            <span className="dark:text-white text-black">
              Network utilization{" "}
              <span className="text-[#FF424A]">0.17% — low load</span>
            </span>
            <span className="dark:text-white text-black"> Last updated </span>
            <span className="text-gray-500"> 11 Sep, 13:24:50</span>
            <span className="text-blue-400 ml-2 cursor-pointer">➜</span>
          </p>
          <p className="text-sm sm:text-base">
            <span className="text-[#ff9700]">ITC </span>
            <span className="dark:text-white text-gray-800">$0.354 </span>
          </p>
        </div>
      </header>

      <section className="bg-[#070136] border border-gray-800 rounded-3xl overflow-hidden mb-8">
        <div className="grid text-white grid-cols-1 sm:grid-cols-3">
          {["Fast", "Normal", "Slow"].map((speed, index) => {
            const isNormalOrSlow = index === 1 || index === 2;

            return (
              <div
                key={speed}
                className={`p-4 ${
                  index !== 2 ? "border-r border-gray-700" : ""
                } ${isNormalOrSlow ? "bg-[#161357]" : ""}`}
              >
                <h2 className="text-lg font-medium mb-2">{speed}</h2>

                <div className="flex items-center">
                  {index === 0 ? (
                    <Rocket size={50} className="mr-4" color="#e29a2f" /> 
                  ) : (
                    <Fuel size={50} className="mr-4" color="#e29a2f" />    
                  )}

                  {/* Dollar Amount */}
                  <p className="text-4xl font-bold">&lt; $0.01</p>
                </div>

                {/* Remaining Section */}
                <p className="text-sm text-gray-400">
                  ≈ {index === 0 ? "1,212" : index === 1 ? "660.2" : "651.4"} Gwei per transaction / 2s
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-4 flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-0">
          Gas Price History
        </h2>
        <Link to="/stats" className="text-[#e29a2f] text-sm hover:text-[#ff9700]">
          Charts & Stats
        </Link>
      </section>

      <section className="p-4 rounded-lg bg-[#070136] border border-[#f0c37e]">
        <h3 className="text-lg font-semibold mb-2 text-white">
          Average Gas Price
        </h3>
        <p className="text-sm mb-4 text-[#fac577]">
          Average gas price for the period (Gwei)
        </p>
        <div className="w-full h-80 bg-[#070136] ">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis
                dataKey="date"
                stroke="#6B7280"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => value}
              />
              <YAxis
                stroke="#6B7280"
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => value}
              />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#ff9700"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>
    </main>
  );
};

export default GasTrackerPage;
