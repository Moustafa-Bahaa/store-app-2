import { RecordStatus } from '../enums/record-status.enum';
import { StorePostModel } from '../models/StorePostModel';
import { StoresModel } from '../models/StoresModel';


const DML_URL = "http://149.102.140.8:9090/ords/exsysexsysdba/pds_pkg/pds_stores_dml"



export const useDelete = async (store: StoresModel): Promise<any> => {

    store.record_status = RecordStatus.DELETE;
    store.active_flag = "N";
    let storePostModel: StorePostModel = new StorePostModel();
    storePostModel.authorization = 4776317;
    storePostModel.planguageid = 1;
    storePostModel.data = [store];

    try {
        const response = await fetch(DML_URL, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(storePostModel)
        });

        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
    return { store }
}

export const usePostAdd = async (store: StoresModel): Promise<any> => {

    store.record_status = RecordStatus.NEW;
    let storePostModel: StorePostModel = new StorePostModel();
    storePostModel.authorization = 4776317;
    storePostModel.planguageid = 1;
    storePostModel.data = [store];

    try {
        const response = await fetch(DML_URL, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(storePostModel)
        });

        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
    return { store }

}

export const usePostEdit = async (store: StoresModel): Promise<any> => {

    store.record_status = RecordStatus.UPDATE;
    store.active_flag = "Y";
    let storePostModel: StorePostModel = new StorePostModel();
    storePostModel.authorization = 4776317;
    storePostModel.planguageid = 1;
    storePostModel.data = [store];
    
    try {
        const response = await fetch(DML_URL, {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(storePostModel)
        });

        const result = await response.json();
        console.log("Success:", result);
    } catch (error) {
        console.error("Error:", error);
    }
    return { store }
}


const logError = (error: any) => {
    const err = error
    console.log(err.message)
    console.log(err.name)
};

const createNewPayload = (store: StoresModel, recordStatus: string): StorePostModel => {

    store.record_status = recordStatus;

    let storePostModel: StorePostModel = new StorePostModel();
    storePostModel.authorization = 4776317;
    storePostModel.planguageid = 1;
    storePostModel.data = [store];

    return storePostModel;
}


