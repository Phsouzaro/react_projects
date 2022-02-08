import './style.css'

export const SearchImput = ({ searchValue, handleSerch }) => {
    return (
        <div className='search-input'>
            <label>Filter posts: </label>
            <input
                type='search'
                onChange={handleSerch}
                value={searchValue}
            ></input>
        </div>

    )
}