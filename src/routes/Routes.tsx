import { BrowserRouter, Routes as Switch, Route, Navigate } from "react-router-dom";
import { Login, Retrospectives } from "pages";
import { CheckUserAuth } from "middlewares";
import { Layout } from "components";

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="user" element={<Layout />}>
                    <Route path="auth" element={<Login />} />

                    <Route element={<CheckUserAuth />}>
                        <Route path="retrospectives" element={<Retrospectives />} />
                    </Route>
                </Route>

                <Route path="*" element={<Navigate to="user/retrospectives" />} />
            </Switch>
        </BrowserRouter>
    );
};
