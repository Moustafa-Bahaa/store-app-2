import { RecordStatus } from '../enums/record-status.enum';
import { StoreModel } from '../models/StoreModel';
import { StorePostModel } from '../models/StorePostModel';

const DML_URL = "http://149.102.140.8:9090/ords/exsysexsysdba/pds_pkg/pds_stores_dml"

export const useDelete = async (store: StoreModel): Promise<any> => {
    store.active_flag = "N";
    try {
        const response = await fetch(DML_URL, createRequestBody(store, RecordStatus.DELETE));
        return await response.json();
    } catch (error) {
        logError(error);
    }
}

export const usePostAdd = async (store: StoreModel): Promise<any> => {
    try {
        const response = await fetch(DML_URL, createRequestBody(store, RecordStatus.NEW));
        return await response.json();
    } catch (error) {
        logError(error);
    }
}

export const usePostEdit = async (store: StoreModel): Promise<any> => {
    store.active_flag = "Y";
    try {
        const response = await fetch(DML_URL, createRequestBody(store, RecordStatus.UPDATE));
        return await response.json();
    } catch (error) {
        logError(error);
    }
}

const createRequestBody = (store: StoreModel, recordStatus: string): RequestInit => {

    store.record_status = recordStatus;

    let storePostModel: StorePostModel = new StorePostModel();
    storePostModel.authorization = 4776317;
    storePostModel.planguageid = 1;

    storePostModel.data = [store];

    return {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(storePostModel)
    };
}

const logError = (error: any) => {
    const err = error
    console.log(err.message)
    console.log(err.name)
};



