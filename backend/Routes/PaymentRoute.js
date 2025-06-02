import express from 'express';
import makePayment from '../Controllers/PaymentController.js';


export const PaymentRouter = express.Router();



PaymentRouter.post('/stripe',makePayment);