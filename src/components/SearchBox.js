import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {


    return (
        <div className="container">
            <div className = 'pa2 search-box'>
                <div className="content">
                    <input
                        className="pa3"
                        type='search'
                        placeholder="search images"
                        onChange={searchChange}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchBox;