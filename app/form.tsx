import * as React from 'react'; // tslint:disable-line:no-unused-variable
import {Component} from 'react';
import {View,  StyleSheet, /*Text, Picker, TouchableWithoutFeedback */} from 'react-native';
import {observer} from 'mobx-react/native';
import Result from './results';
//import Typeahead from './../widgets/typeahead'
//import GooglePlacesAutocomplete from './../widgets/googleautocomplete'
//import {RaisedButton as Button} from 'material-ui';
//import {Actions} from 'react-native-router-flux';
//import {cefitiStore} from './store';
import store from './store'
import Select from 'react-select';
import './../css/react-select.css';

//type search = {search?(props?: any): void, cefitiResults?(props?: any): void}
//let actions = Actions as search;

//onPress={()=> Actions.search({source:'listaNomesSci',   onChangeText: (text)=>{this.props.store.ui.searchValue = text}   })}
//onChangeText: (text)=>{store.handleChanges({target:{value:text, name:'nomeSci'}})}

@observer
export default class QuarentForm extends Component <{}, {}> {
  render(): React.ReactElement<any> {
    //let store: cefitiStore = this.props.store.cefiti;
    return (
        <View style={styles.container}>

            <View style={styles.subtitle}>
                <h3>Consulta à Lista de Pragas Quarentenárias para o Brasil </h3>
                Praga: <Select  options={store.pragas} value={store.praga} onChange={store.change.bind(this, 'praga')} />
                Pais: <Select options={store.paises} value={store.pais} onChange={store.change.bind(this, 'pais')} />
                Cultura: <Select options={store.produtos} value={store.produto} onChange={store.change.bind(this, 'produto')} />
                Espécie Vegetal: <Select options={store.especies} value={store.especie} onChange={store.change.bind(this, 'especie')} />
                Uso Proposto: <Select options={store.usos} value={store.uso} onChange={store.change.bind(this, 'uso')}/>
                Grupo Taxionômico: <Select options={store.taxons} value={store.taxon} onChange={store.change.bind(this, 'taxon')} />
                Norma: <Select options={store.normas} value={store.norma} onChange={store.change.bind(this, 'norma')} />
            </View>
            <button onClick={store.clean} className="form-button" style={{width: 100}}>Limpar</button>
            <Result />
        </View>
      );
  }
}

const styles = StyleSheet.create<any>({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'flex-start'
    },
    text: {
        //fontSize: 14,
        //textAlign: 'center',
        margin: 1,
        borderWidth: 1,
    },
    field: {
        width: 300,
        flex: 1,
        backgroundColor: '#FFFFFF',
        color: 'black',
        //flex: 0.3,
        borderWidth: 1,
        borderColor: 'black',
        alignSelf: 'center',
        height: 15,
        fontSize: 16,
    },
    subtitle: {
        padding: 8
    },
    button: {
        height: 50,
        flex: 1,
    }
});

/*const Subheader = ({text}) => (
           <View
                style={substyles.container}
            >
                <Text
                    style={[styles.text, {
                        color: 'rgba(0,0,0,.54)',
                        fontWeight: '500'
                    }]}
                >
                    {text}
                </Text>
            </View>
);*/

//{paddingLeft: inset ? 72 : 16 }
/*
const substyles = StyleSheet.create({
    container: {
        padding: 4,
        paddingLeft:  16
    },
    //text: TYPO.paperFontBody1,
});

<Text style={styles.field}
                onPress={() => actions.search({
                    source: 'listaNomesSci', field: 'hospSci',
                    onChange: this.props.store.cefiti.handleChanges.bind(this), storeName: 'cefiti'
                })}
                >{store.dados.hospSci} </Text>

            <Subheader text="Espécie Vegetal (nome vulgar):"  />
            <Text style={styles.field}
                onPress={() => actions.search({
                    source: 'listaNomesVul', field: 'hospVul',
                    onChange: this.props.store.cefiti.handleChanges.bind(this), storeName: 'cefiti'
                })}
                >{store.dados.hospVul} </Text>

            <Subheader text="Parte:"  />
            <Combo
                source={store.partes} itemLabel={''} itemValue={''}  value={store.dados.prod}
                name={'prod'} onValueChange={store.handleChanges} />

            <Subheader text="Origem:" />
            <Combo
                source={store.estados} itemLabel={'estado'} itemValue={'UF'}
                value={store.dados.orig} name={'orig'} onValueChange={store.handleChanges} />

            <Subheader text="Destino:" />
            <Combo
                source={store.estados} itemLabel={'estado'} itemValue={'UF'}
                value={store.dados.dest} name={'dest'} onValueChange={store.handleChanges} />

            <View style={styles.button}>
                <Button  text={'Consultar'} overrides={{ textColor: 'paperGreen', backgroundColor: 'paperGreen' }}
                    onPress={actions.cefitiResults} />
            </View>
            */
