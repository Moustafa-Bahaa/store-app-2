import React, { useLayoutEffect, useState, useCallback } from 'react'
import { StoreSearchResultMoldel } from '../models/StoreSearchResultModel';
import { useDelete } from '../hooks/use-post-hooks';
import Header from './table-header/table-header';
import Add from './add/Add';
import Edit from './edit/Edit';
import { StoreModel } from '../models/StoreModel';
import TableContent from './table-contetnt/table-content';
import { useFetch } from '../hooks/use-fetch-hook';
import { useFilter } from '../hooks/use-filter-hook';


const Table = () => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [filterOption, setFilterOption] = useState('all');

  const fetchAllStores = useCallback(() => {
    useFetch().then((storeSearchResultMoldel: StoreSearchResultMoldel) => {
      setStores(storeSearchResultMoldel.data)
      setLoading(false);
    })
  }, [stores, setLoading, setIsAdding, setIsEditing])

  useLayoutEffect(() => {
    fetchAllStores();
  }, []);


  const handleEdit = (store: StoreModel) => {
    setSelectedStore(store);
    setIsEditing(true);
  }

  const handleDelete = useCallback((storeModel: StoreModel) => {
    useDelete(storeModel).then(() => {
      fetchAllStores();
    })
  }, [])

  const filterByActiveFlag = (activeFlag: 'Y' | 'N') => {
    useFilter(activeFlag).then((storeSearchResultMoldel: StoreSearchResultMoldel) => {
      setStores(storeSearchResultMoldel.data)
    })
  }

  if (isLoading) {
    return <div id="loading">|</div>
  }
  return (
    <div>
      {!isAdding && !isEditing && (
        <div className='table-container'>
          <Header setIsAdding={setIsAdding} filterByActiveFlag={filterByActiveFlag} setFilterOption={setFilterOption} filterOption={filterOption} fetchAllStores={fetchAllStores} />

          <TableContent stores={stores} handleEdit={handleEdit} handleDelete={handleDelete} />
        </div>
      )}

      {isAdding && (
        <Add setIsAdding={setIsAdding} />
      )}

      {isEditing && (
        <Edit selectedStore={selectedStore} setIsEditing={setIsEditing} />
      )}

    </div>
  )
}

export default Table
