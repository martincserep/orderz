import { Order } from '../../../shared/interfaces/order.interface';

export const LATEST_ORDERS: Order[] = [{
    customer: {name: 'Istvan Szent', address: 'Allamalapitas ter 4', phoneNumber: '+36701000001'},
    orderedFoods: [
        {name: 'Margharita Pizza', price: 3.9, count: 3},
        {name: 'Cheeseburger', price: 2.5, count: 2},
        {name: 'Lime Lemonade', price: 1.9, count: 5},
    ],
    fulfilledAt: new Date('10/31/2020 10:01:05 PM'),
    processingStartingAt: new Date('10/31/2020 09:54:32 PM'),
    orderedAt: new Date('10/31/2020 09:51:53 PM'),
    status: "NEW_ORDER",
},{
    customer: {name: 'Kelemen Komuves', address: 'Kiskunhalas, Idefalazd az asszonyt utca 154', phoneNumber: '+36701000001'},
    orderedFoods: [
        {name: 'Margharita Pizza', price: 3.9, count: 3},
        {name: 'Cheeseburger', price: 2.5, count: 2},
        {name: 'Lime Lemonade', price: 1.9, count: 5},
    ],
    fulfilledAt: new Date('10/31/2020 10:01:05 PM'),
    processingStartingAt: new Date('10/31/2020 09:54:32 PM'),
    orderedAt: new Date('10/31/2020 09:51:53 PM'),
    status: "NEW_ORDER",
},{
    customer: {name: 'Kelemen Komuves', address: 'Kiskunhalas, Idefalazd az asszonyt utca 154', phoneNumber: '+36701000001'},
    orderedFoods: [
        {name: 'Margharita Pizza', price: 3.9, count: 3},
        {name: 'Cheeseburger', price: 2.5, count: 2},
        {name: 'Lime Lemonade', price: 1.9, count: 5},
    ],
    fulfilledAt: new Date('10/31/2020 10:01:05 PM'),
    processingStartingAt: new Date('10/31/2020 09:54:32 PM'),
    orderedAt: new Date('10/31/2020 09:51:53 PM'),
    status: "NEW_ORDER",
},{
    customer: {name: 'Kelemen Komuves', address: 'Kiskunhalas, Idefalazd az asszonyt utca 154', phoneNumber: '+36701000001'},
    orderedFoods: [
        {name: 'Margharita Pizza', price: 3.9, count: 1}
    ],
    fulfilledAt: new Date('10/31/2020 10:01:05 PM'),
    processingStartingAt: new Date('10/31/2020 09:54:32 PM'),
    orderedAt: new Date('10/31/2020 09:51:53 PM'),
    status: "PROCESSING",
},{
    customer: {name: 'Gaor Typo', address: 'Opusztaszer, Mindig elutom a billenyut ter 3', phoneNumber: '+36701000001'},
    orderedFoods: [
        {name: 'Margharita Pizza', price: 3.9, count: 1}
    ],
    fulfilledAt: new Date('10/31/2020 10:01:05 PM'),
    processingStartingAt: new Date('10/31/2020 09:54:32 PM'),
    orderedAt: new Date('10/31/2020 09:51:53 PM'),
    status: "FULFILLED",
},{
    customer: {name: 'Istvan Szent', address: 'Allamalapitas ter 4', phoneNumber: '+36701000001'},
    orderedFoods: [
        {name: 'Margharita Pizza', price: 3.9, count: 1}
    ],
    fulfilledAt: new Date('10/31/2020 10:01:05 PM'),
    processingStartingAt: new Date('10/31/2020 09:54:32 PM'),
    orderedAt: new Date('10/31/2020 09:51:53 PM'),
    status: "CANCELED",
    },
]