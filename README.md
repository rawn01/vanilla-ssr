# React SSR with renderToString in node/express server

#### We create 2 different redux stores, one for server and one for client and with each request to the server we create a new store(on the server side). 
#### Then to populate the redux data, we dispatch async action and await them and only then render the react on the server.
#### Hydrate the react with ReactDOM.hydrate and hydrate the redux store by setting a script on the HTML sent by the server with window.__INITIALSTATE__.
#### Using this window state object we hydrate the redux store on the server by passing this obj as inital paramter to createStore on the client.
