import * as React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Subheader } from 'material-ui';
//import Quarentenarias from './store';
//let onPressText = (): void => {console.log('onPress'); };
function Result() {
    //const cefitiStore: cefitiStore = store.cefiti;
    return (React.createElement(View, null, 
        React.createElement(Text, {style: styles.title}, "Exigências Fitossanitárias para o trânsito de de"), 
        React.createElement(View, null, 
            React.createElement(Text, {style: styles.title}, "SEM EXIGÊNCIAS PARA O TRÂNSITO")
        ), 
        "(", 
        React.createElement(ScrollView, null, 
            React.createElement(View, null, 
                React.createElement(View, null, 
                    React.createElement(Subheader, null, "TRÂNSITO NACIONAL DE PARTIDA IMPORTADA\" "), 
                    React.createElement(Text, null, "1 – SE A PARTIDA AINDA NÃO FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO A UMA ÁREA ALFANDEGADA NO INTERIOR DO BRASIL:"), 
                    React.createElement(Text, null, "- Certificado Fitossanitário ou Certificado Fitossanitário de Reexportação;")), 
                React.createElement(View, null, 
                    React.createElement(Text, null, "2 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER EM TRÂNSITO AO PONTO DE DESTINO DECLARADO NA IMPORTAÇÃO:"), 
                    React.createElement(Text, null, "- Cópia autenticada do Certificado Fitossanitário ou do Certificado Fitossanitário de Reexportação; "), 
                    React.createElement(Text, null, "- Original ou cópia autenticada do Requerimento para Fiscalização de Produtos Agropecuários, emitido pelo MAPA;")), 
                React.createElement(View, null, 
                    React.createElement(Text, null, "3 – SE A PARTIDA JÁ FOI INTERNALIZADA PELO MAPA E ESTIVER SAINDO DO DESTINO DECLARADO NA IMPORTAÇÃO, EM DIREÇÃO A QUALQUER UF:"), 
                    React.createElement(Text, null, "- Cumprir os requisitos fitossanitários para o trânsito interestadual.")), 
                React.createElement(Subheader, null, "TRÂNSITO NACIONAL DE PARTIDA EXPORTADA "), 
                React.createElement(View, null, 
                    React.createElement(Text, null, "1 – SE A PARTIDA JÁ FOI ESTIVER EM TRÂNSITO A PONTO DE EGRESSO:"), 
                    React.createElement(Text, null, "- Não se aplicam as exigências para o trânsito interestadual.")), 
                React.createElement(Subheader, null, "LEGISLAÇÃO GERAL"))
        )));
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
export default Result;
/*
  <a target="_blank" href={item.link}>{item.leg}</a>
   <a className="small" target="_blank" href={"https://www.google.com.br/search?site=imghp&tbm=isch&q="+item.prag}>
   [FOTOS DA PRAGA]</a>
   <a target="_blank" href="leg/IN54-2007.pdf">Instrução Normativa MAPA Nº 54, de 4 de dezembro de 2007</a>
   <a target="_blank" href="leg/IN59-2013.pdf">Instrução Normativa MAPA Nº 59, de 18 de dezembro de 2013</a>
   <Button text="Instrução Normativa MAPA Nº 54, de 4 de dezembro de 2007" onPress={() =>
     Linking.openURL('http://www.agricultura.gov.br/vegetal/sanidade-vegetal')} /

<View>
<TouchableHighlight onPress={onPressText} underlayColor="gray">
    <Text  >Exigências Fitossanitárias para o trânsito XXXXXXXXXXXXXXXXXXXXXXXXXXXXX</Text>
</TouchableHighlight>
 <Text style={styles.title} >
   Exigências Fitossanitárias para o trânsito de
   {cefitiStore.dados.prod} de {cefitiStore.dados.hospVul} {cefitiStore.dados.hospSci} do
   {cefitiStore.dados.orig} para {cefitiStore.dados.dest}
 </Text>

 {cefitiStore.result.map((item, i) => { return (
     <View key={i}>
         <Divider />
         <Subheader lines={2} text={"'" + item.prag + "' - " + item.pragc} /> // tslint:disable-line:quotemark
         <Text >{item.desc}</Text>
         {item.exig.map((exig, ii) => { return (
           <Text key={ii}>
               {(ii + 1) + ' - ' + exig}
           </Text>
         );})}
    </View>
 );})}
</View>

   */
//# sourceMappingURL=results.js.map