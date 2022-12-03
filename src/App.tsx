import { Layout, CardBox } from "components";
import { Provider } from "react-redux";
import { store } from "store/rootStore";

export const App = () => {
    return (
        <Provider store={store}>
            <Layout className="px-4 flex items-center gap-4">
                <CardBox title="Continuar fazendo" />
                <CardBox title="Fazer mais" />
                <CardBox title="Fazer menos" />
                <CardBox title="Começar a fazer" />
                <CardBox title="Parar de fazer" />
            </Layout>
        </Provider>
    );
};
