import { StoreModel } from "../../models/StoreModels"
import "../../styles/table.css"

export default function TableContent({ state, handleEdit, handleDelete }) {


    return (
        <table className="store-table">
            <thead>
                <tr>
                    <th>Store Code</th>
                    <th>English Name</th>
                    <th>Arabic Name</th>
                    <th>Governorate</th>
                    <th>City name</th>
                    <th>District</th>
                    <th>Address</th>
                    <th>Mobile</th>
                    <th>Phone</th>
                    <th>Min Order</th>
                    <th>Active</th>
                    <th className='actions'>Actions</th>
                </tr>
            </thead>
            {state.stores.map((store: StoreModel) =>
                <tbody key={store.store_code}>
                    <td>{store.store_code}</td>
                    <td>{store.description_p}</td>
                    <td>{store.description_s}</td>
                    <td>{store.governorate}</td>
                    <td>{store.city_name}</td>
                    <td>{store.district}</td>
                    <td>{store.address}</td>
                    <td>{store.mobile}</td>
                    <td>{store.phone}</td>
                    <td>{store.min_order}</td>
                    <td>{store.active_flag}</td>
                    <td>

                        <div className='btn-container'>
                            <button onClick={() => handleEdit(store)} className='edit btn' >Edit</button>
                            <button onClick={() => handleDelete(store)} className='delete btn'>Delete</button>
                        </div>

                    </td>
                </tbody>)}
        </table>
    )
}



