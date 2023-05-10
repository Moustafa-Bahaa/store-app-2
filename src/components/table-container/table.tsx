import React, { useLayoutEffect, useState , useCallback  } from 'react'
import { StoreSearchResultMoldel } from '../../models/StoreSearchResultModel';
import { useDelete  } from '../../hooks/use-post-hooks';
import Header from './table-header/table-header';
import Add from './add-component/Add';
import Edit from './edit-component/Edit';
import { StoresModel } from '../../models/StoresModel';
import TableContent from './table-contetnt/table-content';
import { useFetch } from '../../hooks/use-fetch-hook';
import { useFilter } from '../../hooks/use-filter-hook';


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
  }, [stores , setLoading , setIsAdding ,setIsEditing])

  useLayoutEffect(() => {
    fetchAllStores();
  }, []);


  const handleEdit =  (store:StoresModel) => {
    setSelectedStore(store);
    setIsEditing(true);
  }

  const handleDelete = useCallback((storeModel:StoresModel)=> {
    useDelete(storeModel).then(()=>{
      fetchAllStores();
    });
  }, [])

  const filterByActiveFlag = (activeFlag: 'Y' | 'N') => {
    useFilter(activeFlag).then((storeSearchResultMoldel: StoreSearchResultMoldel) => {
      setStores(storeSearchResultMoldel.data)
    });
}

  if (isLoading) {
    return <div id="loading">|</div>
  }
  return (
    <div className='table-container'>
      {!isAdding && !isEditing && (
        <>
          <Header setIsAdding={setIsAdding} filterByActiveFlag={filterByActiveFlag} setFilterOption={setFilterOption} filterOption={filterOption} fetchAllStores={fetchAllStores}/>

          <TableContent stores={stores} handleEdit={handleEdit} handleDelete={handleDelete}/>
        </>
      )}

      {isAdding && (
        <Add stores={stores} setStores={setStores} setIsAdding={setIsAdding}/>
      )}

      {isEditing && (
        <Edit selectedStore={selectedStore} setIsEditing={setIsEditing}/>
      )}

    </div>
  )
}

export default Table
