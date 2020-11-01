import { Customer } from './customer.interface';
import { Food } from './food.interface';

export interface Order {
    customer: Customer;
    orderedFoods: Food[];
    status: 'NEW_ORDER' | 'PROCESSING' | 'FULFILLED' | 'CANCELED';
    processingStartingAt?: Date;
    fulfilledAt?: Date; 
    orderedAt: Date;
}
