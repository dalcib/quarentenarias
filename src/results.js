import * as React from 'react';
import store from './store';
import { observer } from 'mobx-react/native';
import { View, Text, StyleSheet } from 'react-native';
function Result() {
    return (React.createElement(View, null, 
        store.filtered.length, 
        " - xxxx", 
        React.createElement(Text, {style: styles.title}, "Pragas Quarentenárias"), 
        store.group.map(item => (React.createElement(View, {key: item.taxon}, 
            React.createElement("h1", null, item.taxon), 
            item.group.unique('praga').map(praga => (React.createElement("span", {key: praga}, praga))))))));
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        margin: 8,
        backgroundColor: 'white'
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        margin: 10,
        borderWidth: 10,
        fontWeight: 'bold'
    }
});
export default observer(Result);
//# sourceMappingURL=results.js.map