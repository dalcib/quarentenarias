import * as React from 'react';
/*import * as ReactDom from 'react-dom';
import Mapa from './mapa';
import Base from './basex';
import Menu from './menu';*/
import Result from './results';
import Form from './form';
import store from './store';
//import DevTools from 'mobx-react-devtools'
//        <DevTools />

export default class App extends React.Component<{store: any},{}> {
  render(): React.ReactElement<any> {
    return (
    <div id="resolucao">
        <div id="moldura-topo">
          <div id="topo">
            <div id="identificacao-ministerio">
              <span>
                    <div id="imagemGov"><a href="http://www.brasil.gov.br" target="_blank" id="brasilgov"></a></div>
                  </span>

            </div>
            <div id="identificacao-sistema" style={{'float':'none'}}>
              <br/>
              <div style={{'float': 'right','color':'#fff','padding':'5px 10px 5px 15px'}}>Versão 2.1-5</div>
              <h1>CEFiTI</h1>
              <div style={{'float':'right','color':'#fff','padding':'5px 10px 5px 15px'}}>Data: {(new Date()).toLocaleDateString()}</div>
              <h2>Catálogo de Exigências Fitossanitárias para o Trânsito Interestadual</h2>
            </div>
            <div id="dados-login"></div>
          </div>
        </div>
        <div id="moldura-navegacao-global">
          <div id="navegacao-global">
          </div>
        </div>

        <div id="corpo">
          <div id="conteúdo">

            <Form store={store}/>
            <Result />


          </div>
          <br/>
          <p className="small red center ">
            Este Sistema está em fase de HOMOLOGAÇÃO, devido a isso as informações obtidas devem ser verificadas na legislação pertinente.
          </p>
          <p className="small red center ">
            ccSe for encontrada alguma informação que não reflita corretamente a legislação, favor informar o SSV-MT no e-mail abaixo.
          </p>
          <br/>
          <p className="small center">
            As informações apresentadas não substituem o texto legal vigente, publicado em Diário Oficial da União
          </p>
          <br/>
          <div>
            <h5 className="center">Desenvolvido pelo SSV-MT - <a href="mailto:ssv-mt@agricultura.gov.br">ssv-mt@agricultura.gov.br</a>
            </h5>
          </div>
        </div>
      </div>

    )
  }
}


//ReactDom.render(<App store={store}/>, document.getElementById('app'));
