import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {


    return (
        <div className="container">
            <div className = 'pa2 search-box'>
                <div className="content">
                    <label for="inputWords">
                        Search Images
                    <input
                        id="inputWords"
                        className="pa3"
                        type='search'
                        onChange={searchChange}
                    />
                    </label>
                </div>
            </div>
        </div>
    )
}

export default SearchBox;