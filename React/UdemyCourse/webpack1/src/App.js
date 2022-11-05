import React, {Component, Suspense} from 'react';
import {Link, Routes, Route} from 'react-router-dom';

import Users from './containers/Users';
const Pizza = React.lazy(() => import('./containers/Pizza'));

class App extends Component {
    render() {
        return (
            <div>
                <Suspense>
                    <div>
                        <Link to="/">Users</Link> |
                        <Link to="/pizza">Pizza</Link>
                    </div>
                    <div>
                        <Routes>
                            <Route path="/" exact element={<Users />}/>
                            <Route path="/pizza" exact element={<Pizza />}/>
                        </Routes>
                    </div>
                </Suspense>
            </div>
        );
    }
}

export default App;