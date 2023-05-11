import { StoreModel } from "./StoreModels";

export class StoreStateModel {

    stores: StoreModel[];

    selectedStore: StoreModel;

    isLoading  = true;

    isAdding = false;

    isEditing = false;

    filterOption = "all";
}