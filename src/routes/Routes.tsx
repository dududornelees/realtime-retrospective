import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { Login, Retrospectives } from "pages";
import { Layout } from "components";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="user" element={<Layout />}>
                    <Route path="auth" element={<Login />} />
                    <Route path="retrospectives" element={<Retrospectives />} />
                </Route>

                <Route path="*" element={<Navigate to="user/auth" />} />
            </Switch>
        </BrowserRouter>
    );
};
