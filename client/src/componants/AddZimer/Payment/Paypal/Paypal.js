import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
 
export default class Paypal extends React.Component {
    render() {
        const onSuccess = (payment) => {
                    this.props.setnotPaid(false)
        }
 
        const onCancel = (data) => {
            this.props.setnotPaid(true)
        }
 
        const onError = (err) => {
            this.props.setnotPaid(true)
            
        }
 
        let env = 'sandbox';
        let currency = 'ILS'; 
        let total =this.props.price; 
 
        const client = {
            sandbox:    'AU0D7ztwtEFAfyiMGi5xVfjF8VHt79-UHMR_SbigWH6VdzbHrxfqaX6tw9cKuwlrVRano6pF_3-vlizh',
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        
        return (
            <PaypalExpressBtn env={env} client={client} currency={currency} total={total} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
        );
    }
}