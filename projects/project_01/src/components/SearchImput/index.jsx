import './style.css'

export const SearchImput = ({ searchValue, handleSearch }) => {
    return (
        <div className='search-input'>
            <label>Filter posts: </label>
            <input
                type='search'
                onChange={handleSearch}
                value={searchValue}
            ></input>
        </div>

    )
}