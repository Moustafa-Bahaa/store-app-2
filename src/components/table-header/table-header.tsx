import { memo, useCallback, useState } from 'react'

const Header = ({ setState, fetchAllStores, state, filterByActiveFlag }) => {

    const openAddPage = useCallback(() => {
        setState({ ...state, isAdding: true })
    }, [])

    const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const _filterOption = event.target.value;
        if (_filterOption === 'all') {
            fetchAllStores();
        } else {
            filterByActiveFlag(_filterOption);
        }
    }, [])

    return (
        <header>
            <h1>Store App</h1>
            <div className='header-container'>
                <button onClick={openAddPage} className='btn table-btn'>Add Store</button>
                <div className='filter-group'>
                    <div className='filter-option'>
                        <input className='radio-btn'
                            type="radio"
                            value="all"
                            name="filter"
                            onChange={handleOnChange}
                            checked={state.filterOption === 'all'} />
                        <label >All</label>
                    </div>


                    <div className='filter-option'>
                        <input className='radio-btn' type="radio" value="Y" name="filter"

                            onChange={handleOnChange}
                            checked={state.filterOption === 'Y'} />
                        <label >Active</label>
                    </div>


                    <div className='filter-option'>
                        <input className='radio-btn' value="N" type="radio" name="filter"
                            onChange={handleOnChange}
                            checked={state.filterOption === 'N'} />
                        <label htmlFor="html">In Active</label>
                    </div>


                </div>
            </div>
        </header>
    )
}

export default memo(Header)
