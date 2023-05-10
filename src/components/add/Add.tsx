import React, { useCallback, useState } from 'react'
import "../../styles/table.css"
import { StoreModel } from '../../models/StoreModel';
import { usePostAdd } from "../../hooks/use-post-hooks"
const Add = ({ setIsAdding }) => {

    const [newStoreModel, setNewStoreModel] = useState(new StoreModel());

    const [checkBoxChecked, setCheckBoxChecked] = useState(true);

    const onChangeInputText = (e, name: string) => {
        const val = (e.target && e.target.value) || '';
        let _newStoreModel = { ...newStoreModel };
        _newStoreModel[`${name}`] = val;
        setNewStoreModel(_newStoreModel);
    }

    const onSaveCicked = () => {
        let _newStoreModel = { ...newStoreModel };
        _newStoreModel.active_flag = checkBoxChecked ? 'Y' : 'N';
        usePostAdd(_newStoreModel)
    }

    return (

        <div>
            <form className='form-container'>
                <h1>Add Store</h1>
                <div className='responsive-grid'>

                    <div className='field'>
                        <label htmlFor="description_p">English Name</label>
                        <input required value={newStoreModel.description_p}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "description_p") }} />
                    </div>

                    <div className='field'>
                        <label htmlFor="description_s">Arabic Name</label>
                        <input value={newStoreModel.description_s}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "description_s") }} />
                    </div>

                    <div className='field'>
                        <label htmlFor="phone">Phone</label>
                        <input value={newStoreModel.phone}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "phone") }} />

                    </div>

                    <div className='field'>
                        <label htmlFor="address">Address</label>
                        <input value={newStoreModel.address}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "address") }} />

                    </div>

                    <div className='field'>
                        <label htmlFor="city">City</label>
                        <input value={newStoreModel.city}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "city") }} />
                    </div>

                    <div className='field'>
                        <label htmlFor="city_name">City Name</label>
                        <input value={newStoreModel.city_name}
                            className='form-input'
                            type="text"
                            onChange={(e) => { (e) => { onChangeInputText(e, "city_name") } }} />
                    </div>

                    <div className='field'>
                        <label htmlFor="district">District</label>
                        <input value={newStoreModel.district}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "district") }} />
                    </div>

                    <div className='field'>
                        <label htmlFor="district_name">District Name</label>
                        <input value={newStoreModel.district_name}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, 'district_name') }} />
                    </div>

                    <div className='field'>
                        <label htmlFor="email">Email</label>
                        <input value={newStoreModel.email}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "email") }} />
                    </div>

                    <div className='field'>
                        <label htmlFor="governorate">Governorate</label>
                        <input value={newStoreModel.governorate}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "governorate") }} />
                    </div>

                    <div
                        className='field'>
                        <label htmlFor="mobile">Mobile</label>
                        <input value={newStoreModel.mobile}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "mobile") }} />
                    </div>

                    <div className='field'>
                        <label htmlFor="min_order">MinOrder</label>
                        <input value={newStoreModel.min_order}
                            className='form-input'
                            type="text"
                            onChange={(e) => { onChangeInputText(e, "min_order") }} />
                    </div>

                    <div className='active'>
                        <input value={newStoreModel.active_flag}
                            className='checkbox'
                            type="checkbox"
                            onChange={() => setCheckBoxChecked(!checkBoxChecked)} checked={checkBoxChecked} />
                        <label htmlFor="active_flag">Active</label>
                    </div>

                </div>

                <div style={{ marginTop: '30px' }}>
                    <button className='btn' onClick={onSaveCicked}>Add Store</button>
                    <button className='btn' onClick={() => setIsAdding(false)}>Cancel</button>
                </div>

            </form>

        </div>
    )
}

export default Add
