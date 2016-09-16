import { AppRegistry } from 'react-native';
import App from './app';
import './../css/app.css'

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', {
  rootTag: document.getElementById('root')
})
