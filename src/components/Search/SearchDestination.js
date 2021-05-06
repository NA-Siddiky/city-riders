import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PigeonMap from '../Map/PigeonMap';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

function SearchDestination() {
    const { type } = useParams();
    const [isSearch, setSearch] = useState(true);
    const [location, setLocation] = useState({});
    const searchLocationSet = {
        from: '',
        to: '',
        date: '',
    };
    // console.log(type);
    const searchLocation = (e) => {
        const { from, to } = searchLocationSet;
        if (from.length !== 0 && to.length !== 0) {
            setLocation(searchLocationSet);
            setSearch(false);
        }
        e.preventDefault();
    };

    const resetSearch = (e) => {
        setSearch(true);
        setLocation({});
        e.preventDefault();
    };

    const setData = (e) => {
        e.target.name === 'locationFrom'
            ? (searchLocationSet.from = e.target.value)
            : e.target.name === 'date'
                ? (searchLocationSet.data = e.target.value)
                : (searchLocationSet.to = e.target.value);
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 p-4 rounded bg-secondary">
                    {isSearch ? (
                        <SearchForm searchLocation={searchLocation} setData={setData} />
                    ) : (
                        <SearchResult
                            resetSearch={resetSearch}
                            location={location}
                            transport={type}
                        />
                    )}
                </div>
                <div className="col-md-8">
                    <PigeonMap/>
                </div>
            </div>
        </div>
    );
}

export default SearchDestination;
