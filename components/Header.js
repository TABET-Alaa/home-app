import React ,{useState} from 'react'
import Image from 'next/image'
import {    SearchIcon,
            GlobeAltIcon,
            MenuIcon,
            UserCircleIcon,
            UsersIcon
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handleSelect = (ranges) => {
        console.log("ranges",ranges)
        console.log("ranges start date : ",ranges.selection)
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const resetInput = () => {
        setSearchInput('');
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numberOfGuests
            }
        })
    }

    return (
        <header className="sticky top-0 z-20 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            <div 
                className="relative flex h-10 items-center cursor-pointer"
                onClick={() => router.push("/")}
            >
                <Image layout="fill" objectFit="contain" objectPosition="left" alt="image" />
            </div>

            <div className="flex items-center md:border-2 rounded-full p-2">
                <input 
                    value={searchInput}
                    onChange={(event) => setSearchInput(event.target.value)}
                    type="text" placeholder={placeholder || "Start your search"} className="pl-5 bg-transparent outline-none text-sm text-gray-600 flex-grow md:shadow-sm"/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
            </div>
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline-flex cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6"/>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
            </div>
            {searchInput && 
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()} 
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect}
                    />
                    <div className="flex items-center border-b mb-4">
                        <h2 className="text-2xl flex-grow font-semibold ">Number of Guests </h2>
                        <UsersIcon className="h-5"/>
                        <input 
                            type="number" 
                            className="w-12 pl-2 text-lg outline-none text-red-400"
                            min={1}
                            value={numberOfGuests}
                            onChange={(e) => setNumberOfGuests(e.target.value)}
                        />
                    </div>
                    <div className="flex">
                        <button className="flex-grow text-gray-500" onClick={resetInput}>Cancel</button>
                        <button 
                            className="flex-grow text-gray-400"
                            onClick={search}
                        >
                            Search
                        </button>
                    </div>
                </div> 
            }
        </header>
    )
}

export default Header
