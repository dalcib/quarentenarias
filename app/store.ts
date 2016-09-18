import {observable, computed, action, useStrict} from 'mobx'
//import db from '/quarentenariasDb'
import db from './lista-Brasil'
import './arrayplus'

useStrict()

interface Requisito {
  norma: string;
  ano: number;
  produto: string;
  especie: string;
  uso: string;
  pais: string;
  praga: string;
  DA: string;
  IN52: string;
  revogada: string;
  processos: string;
  taxon: string;
}

interface Select {
  value: string
  label: string
}

class Quarentenarias {

  db: Requisito[] = db

  @observable advancedSerch: boolean = false
  @observable selectedPraga: string = ''
  @observable praga: string = ''
  @observable norma: string = ''
  @observable produto: string = ''
  @observable uso: string = ''
  @observable pais: string = ''
  @observable taxon: string = ''
  @observable especie: string = ''

  @computed get normas(): Select[] {return db.unique('norma').map((item): Select => ({value: item, label: item}))}
  @computed get produtos(): Select[] {return db.unique('produto').map((item): Select  => ({value: item, label: item}))}
  @computed get usos(): Select[] {return db.unique('uso').map((item): Select  => ({value: item, label: item}))}
  @computed get paises(): Select[] {return db.unique('pais').map((item): Select  => ({value: item, label: item}))}
  @computed get pragas(): Select[] {return db.unique('praga').map((item): Select  => ({value: item, label: item}))}
  @computed get taxons(): Select[] {return db.unique('taxon').map((item): Select  => ({value: item, label: item}))}
  @computed get especies(): Select[] {return db.unique('especie').map((item): Select  => ({value: item, label: item}))}

  @computed get itensPraga(): Requisito[] {return db.filter(item => item.praga === this.selectedPraga) }

  @computed get filtered():  Requisito[] {return db.filter(item => (
    (!this.norma || item.norma === this.norma ) &&
    (!this.especie || item.especie === this.especie) &&
    (!this.produto || item.produto === this.produto) &&
    (!this.uso || item.uso === this.uso) &&
    (! this.pais || item.pais === this.pais) &&
    (!this.praga || item.praga === this.praga) &&
    (!this.taxon || item.taxon === this.taxon)
  ))}
  /*.filter( item => {
    let text = this.praga
    if (text.length >= 3 ) {
      const regex = new RegExp(`${text.trim()}`, 'i');
      let result = source.filter(h => h.search(regex) >= 0);
      return dataSource.cloneWithRows(result);
    } else {
      return dataSource.cloneWithRows(source);
    }
  })}*/

  @computed get group(): any {
    return this.filtered
      .groupBy('taxon', ['praga'])
      .sort ( (a, b): any => {
        if (a.taxon > b.taxon) {return 1}
        if (a.taxon < b.taxon) {return -1}
        return 0
      })
      .map((item: any) => ({taxon: item.taxon, pragas: item.group.unique('praga') }))
  }

  @action clean = (): void => {
    this.praga = ''
    this.norma = ''
    this.especie = ''
    this.produto = ''
    this.uso = ''
    this.pais = ''
    this.taxon = ''
  }

  @action change = (field: string, object: Select): void => {
    if (!object) {
      this[field] = ''
    } else {
      this[field] = object.value
    }
  }

  @action selectPraga = (praga: string): void => {
    console.log('Praga:', praga)
    this.selectedPraga = praga
  }
}

const store = new Quarentenarias()

//console.log(store.group[1])

export default store
