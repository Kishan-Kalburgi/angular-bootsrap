export class InventomryModel {
    customerName: string;
    customerPhone: number;
    orderDate: Date;
    deliveryDate: Date;
    status: string;

    constructor(values: Object = {}) {
        /*Constructor initialization*/
        Object.assign(this, values);
    }
}
