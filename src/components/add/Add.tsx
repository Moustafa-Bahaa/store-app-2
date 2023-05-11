import { useCallback, useState, memo } from 'react'
import "../../styles/table.css"
import { StoreModel } from '../../models/StoreModels';
import { usePostAdd } from "../../hooks/use-post-hooks"
const Add = ({ setState, state }) => {

    const [newStoreModel, setNewStoreModel] = useState(new StoreModel());
    const [checkBoxChecked, setCheckBoxChecked] = useState(true);

    const handleOnChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const val = (event.target && event.target.value) || '';
        let _newStoreModel = { ...newStoreModel };
        _newStoreModel[`${event.target.name}`] = val;
        setNewStoreModel(_newStoreModel);
    }, [newStoreModel])

    const onSaveCicked = () => {
        let _newStoreModel = { ...newStoreModel };
        _newStoreModel.active_flag = checkBoxChecked ? 'Y' : 'N';
        usePostAdd(_newStoreModel);
    }


    const canelAddpage = useCallback(() => {
        setState({ ...state, isAdding: false })
    }, [setState])


    const handelActiveFlag = useCallback(() => {
        setCheckBoxChecked(!checkBoxChecked)
    }, [checkBoxChecked])

    return (

        <div>
            <form className='form-container'>
                <h1>Add Store</h1>
                <div className='responsive-grid'>

                    <div className='field'>
                        <label htmlFor="description_p">English Name</label>
                        <input
                            name={"description_p"}
                            required value={newStoreModel.description_p}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="description_s">Arabic Name</label>
                        <input
                            name={"description_s"}
                            value={newStoreModel.description_s}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="phone">Phone</label>
                        <input
                            name={"phone"}
                            value={newStoreModel.phone}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="address">Address</label>
                        <input
                            name={"address"}
                            value={newStoreModel.address}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="city">City</label>
                        <input
                            name={"city"}
                            value={newStoreModel.city}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="city_name">City Name</label>
                        <input
                            name={"city_name"}
                            value={newStoreModel.city_name}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="district">District</label>
                        <input
                            name={"district"}
                            value={newStoreModel.district}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="district_name">District Name</label>
                        <input
                            name={"district_name"}
                            value={newStoreModel.district_name}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="email">Email</label>
                        <input
                            name={"email"}
                            value={newStoreModel.email}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="governorate">Governorate</label>
                        <input
                            name={"governorate"}
                            value={newStoreModel.governorate}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div
                        className='field'>
                        <label htmlFor="mobile">Mobile</label>
                        <input
                            name={"mobile"}
                            value={newStoreModel.mobile}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='field'>
                        <label htmlFor="min_order">MinOrder</label>
                        <input
                            name={"min_order"}
                            value={newStoreModel.min_order}
                            className='form-input'
                            type="text"
                            onChange={handleOnChange} />
                    </div>

                    <div className='active'>
                        <input value={newStoreModel.active_flag}
                            className='checkbox'
                            type="checkbox"
                            onChange={handelActiveFlag} checked={checkBoxChecked} />
                        <label htmlFor="active_flag">Active</label>
                    </div>

                </div>

                <div style={{ marginTop: '30px' }}>
                    <button className='btn' onClick={onSaveCicked}>Add Store</button>
                    <button className='btn' onClick={canelAddpage}>Cancel</button>
                </div>

            </form>

        </div>
    )
}

export default memo(Add) 
