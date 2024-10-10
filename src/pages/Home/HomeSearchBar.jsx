import React from 'react';
import SearchBar from '../../components/SearchBar';

export default function HomeSearchBar() {
  return (
    <>
      <div
        className="rounded-xl p-6 h-auto w-full"
        style={{
          background: 'linear-gradient(to right, rgba(255, 1, 65, 0.8), rgba(255, 151, 0, 0.9))',
        }}
      >
        <h1 className="text-3xl text-white font-bold">
          INTELCHAIN MAINNET EXPLORER
        </h1>
        <div className="">
          <SearchBar bgColor="bg-[#050505]"/>
        </div>
      </div>
    </>
  );
}
