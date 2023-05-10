import React, { useEffect, useState } from 'react'
import "../../styles/table.css"
import { usePostEdit } from '../../hooks/use-post-hooks';
import { StoreModel } from '../../models/StoreModel';

const Edit = ({ selectedStore, setIsEditing }) => {

    useEffect(() => {
        setEditStoreModel(selectedStore)
    }, [selectedStore]);


    const [checkBoxChecked, setCheckBoxChecked] = useState(true)
    const [editStoreModel, setEditStoreModel] = useState(new StoreModel());

    const onChangeInputText = (e, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _editStoreModel = { ...editStoreModel };
        _editStoreModel[`${name}`] = val;
        setEditStoreModel(_editStoreModel);
    }


    const onSaveCicked = () => {
        let _editStoreModel = { ...editStoreModel };
        _editStoreModel.active_flag = checkBoxChecked ? 'Y' : 'N';
        usePostEdit(_editStoreModel)
    };

    return (
        <div>
            <form className='form-container'>
                <h1>Edit Store</h1>
                <div className='responsive-grid'>


                    <div className='field'>
                        <label htmlFor="description_p">English Name</label>
                        <input required value={editStoreModel.description_p}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "description_p") }} />
                    </div>
                    <div className='field'>
                        <label htmlFor="firstName">Arabic Name</label>
                        <input value={editStoreModel.description_s}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "description_s") }} />
                    </div>
                    <div className='field'>
                        <label htmlFor="firstName">Phone</label>
                        <input value={editStoreModel.phone}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "phone") }} />

                    </div>
                    <div className='field'>
                        <label htmlFor="firstName">Address</label>
                        <input value={editStoreModel.address}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "address") }} />

                    </div>
                    <div className='field'>
                        <label htmlFor="firstName">City</label>
                        <input value={editStoreModel.city}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "city") }} />
                    </div>
                    <div className='field'>
                        <label htmlFor="firstName">City Name</label>
                        <input value={editStoreModel.city_name}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "city_name") }} />
                    </div>
                    <div className='field'>
                        <label htmlFor="firstName">District</label>
                        <input value={editStoreModel.district}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "district") }} />
                    </div>
                    <div className='field'>
                        <label htmlFor="firstName">District Name</label>
                        <input value={editStoreModel.district_name}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "district_name") }} />
                    </div>
                    <div className='field'>
                        <label htmlFor="firstName">Email</label>
                        <input value={editStoreModel.email}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "email") }} />
                    </div>
                    <div className='field'>
                        <label htmlFor="firstName">Governorate</label>
                        <input value={editStoreModel.governorate}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "governorate") }} />
                    </div>
                    <div
                        className='field'>
                        <label htmlFor="firstName">Mobile</label>
                        <input value={editStoreModel.mobile}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "mobile") }} />
                    </div>
                    <div className='field'>
                        <label htmlFor="firstName">MinOrder</label>
                        <input value={editStoreModel.min_order}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "min_order") }} />
                    </div>
                    <div className='active'>
                        <input value={editStoreModel.active_flag}
                            className='checkbox'
                            type="checkbox"
                            onChange={() => setCheckBoxChecked(!checkBoxChecked)} checked={checkBoxChecked} />
                        <label htmlFor="firstName">Active</label>
                    </div>
                </div>

                <div style={{ marginTop: '30px' }}>
                    <button className='btn' onClick={onSaveCicked}>Update</button>
                    <button className='btn' onClick={() => setIsEditing(false)}>Cancel</button>
                </div>
            </form>

        </div>
    )
}

export default Edit
