export class InventomryModel {
    billNo: number;
    customerName: string;
    orderDate: string;
    deliveryDate: string;
    status: string;

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }
}
