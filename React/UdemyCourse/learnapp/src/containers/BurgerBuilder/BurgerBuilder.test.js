import React from 'react';
import {render, screen, within} from '@testing-library/react';

// //redux
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
// import store from '../../store/store';

import { BurgerBuilder } from "./BurgerBuilder";

describe('<BurgerBuilder />', () => {
    const setup = () => render(<BurgerBuilder onInitIngredients={() => {}}
        ings={{salad: 0}} />);

    test('should render <BuildControls /> when receiving ingredients', () => {
        setup();
        // screen.debug(screen.getByText(/current price/i));
        expect(screen.getByText(/current price/i)).toBeInTheDocument();
    });
});