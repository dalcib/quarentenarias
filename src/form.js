var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as React from 'react';
import { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { observer } from 'mobx-react/native';
import store from './store';
import Select from 'react-select';
import './../css/react-select.css';
//type search = {search?(props?: any): void, cefitiResults?(props?: any): void}
//let actions = Actions as search;
//onPress={()=> Actions.search({source:'listaNomesSci',   onChangeText: (text)=>{this.props.store.ui.searchValue = text}   })}
//onChangeText: (text)=>{store.handleChanges({target:{value:text, name:'nomeSci'}})}
let QuarentForm = class QuarentForm extends Component {
    render() {
        //let store: cefitiStore = this.props.store.cefiti;
        return (React.createElement(View, {style: styles.container}, 
            React.createElement(View, {style: styles.subtitle}, 
                React.createElement(Text, {style: styles.text}, 
                    "Consulta à Lista de Pragas Quarentenárias para o Brasil -- ", 
                    store.group.length, 
                    " "), 
                "Praga: ", 
                React.createElement(Select, {placeholder: "Praga", options: store.pragas, value: store.praga, onChange: store.change.bind(this, 'praga')}), 
                "Pais: ", 
                React.createElement(Select, {options: store.paises, value: store.pais, onChange: store.change.bind(this, 'pais')}), 
                "Cultura: ", 
                React.createElement(Select, {options: store.produtos, value: store.produto, onChange: store.change.bind(this, 'produto')}), 
                "Espécie Vegetal: ", 
                React.createElement(Select, {options: store.especies, value: store.especie, onChange: store.change.bind(this, 'especie')}), 
                "Uso Proposto: ", 
                React.createElement(Select, {options: store.usos, value: store.uso, onChange: store.change.bind(this, 'uso')}), 
                "Grupo Taxionômico: ", 
                React.createElement(Select, {options: store.taxons, value: store.taxon, onChange: store.change.bind(this, 'taxon')}), 
                "Norma: ", 
                React.createElement(Select, {options: store.normas, value: store.norma, onChange: store.change.bind(this, 'norma')})), 
            React.createElement(Subheader, {text: "Espécie Vegetal (nome científico):"}), 
            React.createElement(View, {style: styles.button}, 
                React.createElement("button", {value: "adssad"})
            )));
    }
};
QuarentForm = __decorate([
    observer
], QuarentForm);
export default QuarentForm;
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
const Subheader = ({ text }) => (React.createElement(View, {style: substyles.container}, 
    React.createElement(Text, {style: [styles.text, {
            color: 'rgba(0,0,0,.54)',
            fontWeight: '500'
        }]}, text)
));
//{paddingLeft: inset ? 72 : 16 }
const substyles = StyleSheet.create({
    container: {
        padding: 4,
        paddingLeft: 16
    },
});
/*
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
//# sourceMappingURL=form.js.map