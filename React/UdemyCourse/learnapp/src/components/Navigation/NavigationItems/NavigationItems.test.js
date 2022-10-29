import React from 'react';
import {render, screen, within} from '@testing-library/react';

//redux
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../../../store/store';

import NavigationItems from './NavigationItems';


describe('<NavigationItems />', () => {
    const setup = (authBool) => render(<Provider store={store}>
        <BrowserRouter><NavigationItems isAuthenticated={authBool} /></BrowserRouter>
        </Provider>);

    // beforeEach(() => {
    // });

    test('should render TWO links elements if NOT authenticated', () => {
        setup(false);
        // screen.debug(screen.getAllByRole('link', { name: /\D+/i }));
        expect(screen.getAllByRole('link', { name: /\D+/i })).toHaveLength(2);
    });

    test('should render THREE links elements if authenticated', () => {
        setup(true);
        expect(screen.getAllByRole('link', { name: /\D+/i })).toHaveLength(3);
    });

    test('should render logout element', () => {
        setup(true);
        const navList = screen.getByRole('list');
        const logoutButton = within(navList).getByText('Logout');
        // screen.debug(logoutButton);
        expect(logoutButton).toBeInTheDocument();
    });
});