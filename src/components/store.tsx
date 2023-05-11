import { useLayoutEffect, useState, useCallback, memo } from 'react'
import { useDelete } from '../hooks/use-post-hooks';
import Header from './table-header/table-header';
import Add from './add/Add';
import Edit from './edit/Edit';
import { StoreModel, StoreSearchResultMoldel } from '../models/StoreModels';
import TableContent from './table-contetnt/table-content';
import { useFetch } from '../hooks/use-fetch-hook';
import { useFilter } from '../hooks/use-filter-hook';
import { StoreStateModel } from '../models/StoreStatemodel';


const Store = () => {

  const [state, setState] = useState(new StoreStateModel())

  useLayoutEffect(() => {
    fetchAllStores();
  }, []);

  const fetchAllStores = useCallback(() => {
    useFetch().then((storeSearchResultMoldel: StoreSearchResultMoldel) => {
      setState({ ...state, stores: storeSearchResultMoldel.data, isLoading: false, filterOption: 'all' })
    })
  }, [])

  const handleEdit = (store: StoreModel) => {
    setState({ ...state, selectedStore: store, isEditing: true })
  }

  const handleDelete = useCallback((storeModel: StoreModel) => {
    useDelete(storeModel).then(() => {
      fetchAllStores();
    })
  }, [])

  const filterByActiveFlag = (activeFlag: 'Y' | 'N') => {
    useFilter(activeFlag).then((storeSearchResultMoldel: StoreSearchResultMoldel) => {
      setState({ ...state, stores: storeSearchResultMoldel.data , filterOption: activeFlag})
    })
  }

  if (state.isLoading) {
    return <div id="loading">|</div>
  }
  
  return (
    <div>
      {!state.isAdding && !state.isEditing && (
        <div className='table-container'>
          <Header state={state} setState={setState} fetchAllStores={fetchAllStores} filterByActiveFlag={filterByActiveFlag} />
          <TableContent state={state} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
      )}

      {state.isAdding && (
        <Add setState={setState} state={state} />
      )}

      {state.isEditing && (
        <Edit state={state} setState={setState} />
      )}

    </div>
  )
}

export default memo(Store)
