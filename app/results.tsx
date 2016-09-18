import * as React from 'react'; // tslint:disable-line:no-unused-variable
import store from './store';
import {observer} from 'mobx-react/native';
import {/*ScrollView,*/ View, Text, StyleSheet, /*Picker, Linking, TouchableWithoutFeedback, TouchableHighlight*/ } from 'react-native';
import { Link } from 'react-router'

function Result(): any {
  return (
    <View>
      <Text style={styles.title} >Pragas Quarentenárias ({store.filtered.length})</Text>
      {store.group.map( item => (
        <View key={item.taxon}>
'          <h1>{item.taxon}</h1>
          {item.pragas.map( praga => (
            <Link to={{pathname: '/pest', query: { praga: praga } }} key={praga} className="italic">{praga}</Link>
          ))}'
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create<any>({
    container: {
        flex: 1,
        padding: 8,
        margin: 8,
        backgroundColor: 'white'
        //justifyContent: 'center',
        //alignItems: 'flex-start'
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        borderWidth: 10,
        fontWeight: 'bold'
        //fontStyle : 'italic' //normal
    }
});

//autorun(()=> console.log('asdf'))

export default observer(Result);
