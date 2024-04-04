import Search from "../components/Search";
import Cards from '../components/Card';
import Filter from '../components/FIlter';
import { useState } from "react";

const ViewRoom = () =>  {

  const [ filterValue, setFilterValue ] = useState('All');

  return (
    <div className="flex flex-wrap justify-center bg-primary-50 min-h-dvh h-auto w-dvw pt-16">
      <div className="w-3/4 gap-48">
        <div className="flex flex-wrap items-center border-red-700">
          <h1 className="text-black text-5xl font-semibold">Rooms</h1>
          <div className="flex-grow gap-10 flex justify-end items-center">
            <Search />
            <Filter onFilterChange={ setFilterValue }/>
          </div>
        </div>
        <div className="p-16 bg-white mt-6 mb-6 rounded-2xl h-auto mx-auto shadow-xl shadow-gray-400">
          <Cards filter={ filterValue }/>
        </div>
      </div>
    </div>
  );

}

export default ViewRoom;
