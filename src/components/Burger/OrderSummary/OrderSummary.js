import React, {Component} from 'react';


import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

// This component could be a functional component, not necessarily a class
class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });

        return(
            <Aux>
                <h3>Your Order</h3>
                <p>Your burger has the following: </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        );
    }
}

export default OrderSummary;