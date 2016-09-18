import * as React from 'react'; // tslint:disable-line:no-unused-variable
import {View/*, Text, StyleSheet, Picker, TouchableWithoutFeedback */} from 'react-native';
import {observer} from 'mobx-react/native';
import {Link} from 'react-router'
import store from './store'

const Praga = ({location}) => {
  console.log(location.query.praga)
  store.selectPraga(location.query.praga)
  return (
  <View>
    <h1  className="italic">{store.selectedPraga}</h1>
    <br/>
    <h3><b> Grupo Taxionômico:</b> {store.itensPraga[0].taxon}</h3>
    <h3><b>Status Fitosssanitário: </b>{store.itensPraga[0].IN52 === 'A2' ? 'Quarentenária PResente' : 'Quarentenária Ausente'}</h3>
    <br/>
    <table className="table-grid">
      <thead>
        <tr>
          <th>Norma</th>
          <th>Produto</th>
          <th >Espécie</th>
          <th>Uso Prosposto</th>
          <th className="red">Processos</th>
        </tr>
      </thead>
      <tbody>
        {store.itensPraga.map((item,i) => { return (
          <tr className={(i % 2 === 0) ? 'linha-alternada' : ''} key={i}>
            <td>{item.norma}</td>
            <td>{item.produto}</td>
            <td className="italic">{item.especie}</td>
            <td>{item.uso}</td>
            <td >{item.processos}</td>
          </tr>
        )})}
      </tbody>
      <tfoot className="form-barra-botoes">
          <tr>
            <td></td>
          </tr>
        </tfoot>
    </table>
    <br/>
    <Link to="/">Voltar</Link>
  </View>
)}

export default observer(Praga)
