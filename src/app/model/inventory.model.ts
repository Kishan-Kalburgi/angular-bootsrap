export class InventomryModel {
    _id?: string;
    customerName: string;
    phoneNumber: number;
    orderDate: Date;
    deliveryDate: Date;
    status: string;

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }
}
