import React from 'react'
import Table from '../table-contetnt/table-content'

const Header = ({ setIsAdding, filterByActiveFlag, setFilterOption, filterOption, fetchAllStores }) => {
    return (
        <header>
            <h1>Store App</h1>
            <div className='header-container'>
                <button onClick={() => setIsAdding(true)} className='btn table-btn'>Add Store</button>
                <div className='filter-group'>
                    <div className='filter-option'>
                        <input className='radio-btn'
                            value="all"
                            onChange={(e) => {
                                setFilterOption(e.target.value);
                                fetchAllStores()
                            }}
                            checked={filterOption === 'all'}
                            type="radio" id="html" name="all" />
                        <label htmlFor="html">All</label>
                    </div>


                    <div className='filter-option'>
                        <input className='radio-btn' type="radio" id="html" name="Y" value="Y"
                            onChange={(e) => {
                                setFilterOption(e.target.value);
                                filterByActiveFlag('Y')
                            }}
                            checked={filterOption === 'Y'}
                        />
                        <label htmlFor="html">Active</label>
                    </div>


                    <div className='filter-option'>
                        <input className='radio-btn' type="radio" id="html" name="N" value="N"
                            onChange={(e) => {
                                setFilterOption(e.target.value);
                                filterByActiveFlag('N')
                            }}
                            checked={filterOption === 'N'}
                        />
                        <label htmlFor="html">In Active</label>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default Header
