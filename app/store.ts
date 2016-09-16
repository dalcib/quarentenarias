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

  @observable praga: string = ''
  @observable norma: string = ''
  @observable produto: string = ''
  @observable uso: string = ''
  @observable pais: string = ''
  @observable taxon: string = ''
  @observable especie: string = ''

  @computed get normas(): any[] {return db.unique('norma').map((item): Select[] => ({value: item, label: item}))}
  @computed get produtos(): string[] {return db.unique('produto').map((item): Select[]  => ({value: item, label: item}))}
  @computed get usos(): string[] {return db.unique('uso').map((item): Select[]  => ({value: item, label: item}))}
  @computed get paises(): string[] {return db.unique('pais').map((item): Select[]  => ({value: item, label: item}))}
  @computed get pragas(): string[] {return db.unique('praga').map((item): Select[]  => ({value: item, label: item}))}
  @computed get taxons(): string[] {return db.unique('taxon').map((item): Select[]  => ({value: item, label: item}))}
  @computed get especies(): string[] {return db.unique('especie').map((item): Select[]  => ({value: item, label: item}))}

  @computed get filtered():  Requisito[] {return db.filter(item => (
    (!this.norma || item.norma === this.norma ) &&
    (!this.praga || item.produto === this.produto) &&
    (!this.uso || item.uso === this.uso) &&
    (! this.pais || item.pais === this.pais) &&
    (!this.praga || item.praga === this.praga) &&
    (!this.taxon || item.taxon === this.taxon)
  ))}

  @computed get group(): any {
    return this.filtered.groupBy('taxon', ['praga']).sort ( (a, b) => a.taxon === b.taxon)
  }

  @action clean = (): void => {
    this.praga = ''
    this.norma = ''
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
}

const store = new Quarentenarias()

//console.log(store.group[1])

export default store
