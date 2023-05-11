import { useEffect, useState, memo, useCallback } from 'react'
import "../../styles/table.css"
import { usePostEdit } from '../../hooks/use-post-hooks';
import { StoreModel } from '../../models/StoreModels';

const Edit = ({ setState, state }) => {

    useEffect(() => {
        setEditStoreModel(state.selectedStore)
    }, [state.selectedStore]);


    const [checkBoxChecked, setCheckBoxChecked] = useState(true)
    const [editStoreModel, setEditStoreModel] = useState(new StoreModel());


    const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const val = (event.target && event.target.value) || '';
        let _editStoreModel = { ...editStoreModel };
        _editStoreModel[`${event.target.name}`] = val;
        setEditStoreModel(_editStoreModel);
    }, [editStoreModel])

    const onSaveCicked = () => {
        let _editStoreModel = { ...editStoreModel };
        _editStoreModel.active_flag = checkBoxChecked ? 'Y' : 'N';
        usePostEdit(_editStoreModel)
    };

    const cancelEditPage = useCallback(() => {
        setState({ ...state, isEditing: false })
    }, [state.setIsEditing])

    const handelActiveFlag = useCallback(() => {
        setCheckBoxChecked(!checkBoxChecked)
    }, [checkBoxChecked])

    return (
        <div>
            <form className='form-container'>
                <h1>Edit Store</h1>
                <div className='responsive-grid'>

                    <div className='field'>
                        <label htmlFor="description_p">English Name</label>
                        <input
                            name={"description_p"}
                            required value={editStoreModel.description_p}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="description_s">Arabic Name</label>
                        <input
                            name={"description_s"}
                            value={editStoreModel.description_s}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="phone">Phone</label>
                        <input
                            name={"phone"}
                            value={editStoreModel.phone}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="address">Address</label>
                        <input
                            name={"address"}
                            value={editStoreModel.address}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="city">City</label>
                        <input
                            name={"city"}
                            value={editStoreModel.city}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="city_name">City Name</label>
                        <input
                            name={"city_name"}
                            value={editStoreModel.city_name}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="district">District</label>
                        <input
                            name={"district"}
                            value={editStoreModel.district}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="district_name">District Name</label>
                        <input
                            name={"district_name"}
                            value={editStoreModel.district_name}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="email">Email</label>
                        <input
                            name={"email"}
                            value={editStoreModel.email}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="governorate">Governorate</label>
                        <input
                            name={"governorate"}
                            value={editStoreModel.governorate}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div
                        className='field'>
                        <label htmlFor="mobile">Mobile</label>
                        <input
                            name={"mobile"}
                            value={editStoreModel.mobile}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="min_order">MinOrder</label>
                        <input
                            name={"min_order"}
                            value={editStoreModel.min_order}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='active'>
                        <input value={editStoreModel.active_flag}
                            className='checkbox'
                            type="checkbox"
                            onChange={handelActiveFlag} checked={checkBoxChecked} />
                        <label htmlFor="active_flag">Active</label>
                    </div>
                </div>

                <div style={{ marginTop: '30px' }}>
                    <button className='btn' onClick={onSaveCicked}>Update</button>
                    <button className='btn' onClick={cancelEditPage}>Cancel</button>
                </div>
            </form>

        </div>
    )
}

export default memo(Edit) 
