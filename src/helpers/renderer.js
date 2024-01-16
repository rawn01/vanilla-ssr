import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import Routes from "../client/routes/routes";
import { Provider } from 'react-redux';
import { renderRoutes } from "react-router-config";

export default (req, store) => {
    const content = renderToString(
        <Provider store={store}> 
            <StaticRouter location={req.path} context={{}}>
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>
    );

    const html = `
        <html>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.__INITITAL_STATE__=${JSON.stringify(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    return html;
};