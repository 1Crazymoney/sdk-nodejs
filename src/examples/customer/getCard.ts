/**
 * Mercado Pago Customer card get.
 *
 * @see {@link https://www.mercadopago.com/developers/en/reference/cards/_customers_customer_id_cards_id/get Documentation }.
*/
import MercadoPago, { Customer } from '@src/index';

const client = new MercadoPago({ accessToken: '<ACCESS_TOKEN>' });
const customerClient = new Customer(client);

customerClient.getCard({ customerId: '<CUSTOMER_ID>', cardId : '<CARD_ID>' }).then(console.log).catch(console.log);
