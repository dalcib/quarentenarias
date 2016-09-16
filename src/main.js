import * as React from 'react';
import Result from './results';
import Form from './form';
import store from './store';
//import DevTools from 'mobx-react-devtools'
//        <DevTools />
class App extends React.Component {
    render() {
        return (React.createElement("div", {id: "resolucao"}, 
            React.createElement("div", {id: "moldura-topo"}, 
                React.createElement("div", {id: "topo"}, 
                    React.createElement("div", {id: "identificacao-ministerio"}, 
                        React.createElement("span", null, 
                            React.createElement("div", {id: "imagemGov"}, 
                                React.createElement("a", {href: "http://www.brasil.gov.br", target: "_blank", id: "brasilgov"})
                            )
                        )
                    ), 
                    React.createElement("div", {id: "identificacao-sistema", style: { "float": "none" }}, 
                        React.createElement("br", null), 
                        React.createElement("div", {style: { "float": "right", "color": "#fff", "padding": "5px 10px 5px 15px" }}, "Versão 2.1-5"), 
                        React.createElement("h1", null, "CEFiTI"), 
                        React.createElement("div", {style: { "float": "right", "color": "#fff", "padding": "5px 10px 5px 15px" }}, 
                            "Data: ", 
                            (new Date()).toLocaleDateString()), 
                        React.createElement("h2", null, "Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual")), 
                    React.createElement("div", {id: "dados-login"}))
            ), 
            React.createElement("div", {id: "moldura-navegacao-global"}, 
                React.createElement("div", {id: "navegacao-global"})
            ), 
            React.createElement("div", {id: "corpo"}, 
                React.createElement("div", {id: "conteúdo"}, 
                    React.createElement(Form, {store: store}), 
                    React.createElement(Result, null)), 
                React.createElement("br", null), 
                React.createElement("p", {className: "small red center "}, "Este Sistema está em fase de HOMOLOGAÇÃO, devido a isso as informações obtidas devem ser verificadas na legislação pertinente."), 
                React.createElement("p", {className: "small red center "}, "Se for encontrada alguma informação que não reflita corretamente a legislação, favor informar o SSV-MT no e-mail abaixo."), 
                React.createElement("br", null), 
                React.createElement("p", {className: "small center"}, "As informações apresentadas não substituem o texto legal vigente, publicado em Diário Oficial da União"), 
                React.createElement("br", null), 
                React.createElement("div", null, 
                    React.createElement("h5", {className: "center"}, 
                        "Desenvolvido pelo SSV-MT - ", 
                        React.createElement("a", {href: "mailto:ssv-mt@agricultura.gov.br"}, "ssv-mt@agricultura.gov.br"))
                ))));
    }
}
//ReactDom.render(<App store={store}/>, document.getElementById('app'));
//# sourceMappingURL=main.js.map