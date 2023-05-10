const GET_URL = "http://149.102.140.8:9090/ords/exsysexsysdba/pds_pkg/get_pds_stores_data?poffset=0&poffset_step=200&planguageid=1&authorization=4776317&description_p=&city=&district=&active_flag=";


export const useFilter = async (activeFlag: 'Y' | 'N'): Promise<any> => {
    try {
        const response = await fetch(GET_URL + activeFlag)
        const stores = await response.json();
        return stores
    }
    catch (err) {
        console.log(err);
    }
};