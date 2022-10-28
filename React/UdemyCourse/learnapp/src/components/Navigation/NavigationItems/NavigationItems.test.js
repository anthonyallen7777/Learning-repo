import React from 'react';
import {render, screen} from '@testing-library/react';

//redux
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store/store';

import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';


test('should render two <NavigationItems /> elements if not authenticated', () => {
    render(
    <Provider store={store}>
        <BrowserRouter>
            <NavigationItems />
        </BrowserRouter>
    </Provider>
    );
    // screen.debug(screen.getAllByRole('link', { name: /\D+/i }));
    expect(screen.getAllByRole('link', { name: /\D+/i })).toBeTruthy();
});