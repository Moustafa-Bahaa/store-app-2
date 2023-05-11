export class StoreModel {

    store_code: string;

    address: string;

    city: string;

    city_name:string;

    district:string;

    district_name:string;

    email:string;

    governorate:string;

    mobile:string;
    
    min_order:string;

    active_flag : string = 'Y';

    description_p : string = '';

    description_s:string;

    record_status:string;

    total:string;

    phone:string;

    
}



export class StorePostModel {

    authorization: number;

    planguageid: number;

    data: StoreModel[];

}


export class StoreSearchResultMoldel{

    data : StoreModel[];

}