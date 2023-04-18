import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRounter } from '~/routes';
import { DefaultLayouts } from '~/layouts';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRounter.map((route, index) => {
                        const Page = route.component;
                        let Layouts = DefaultLayouts;
                        if (route.layouts) {
                            Layouts = route.layouts;
                        } else if (route.layouts === null) {
                            Layouts = Fragment;
                        }
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layouts>
                                        <Page />
                                    </Layouts>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
