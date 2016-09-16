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

class Quarentenarias {

  db: Requisito[] = db

  @observable praga: string = ''
  @observable norma: string = ''
  @observable produto: string = ''
  @observable uso: string = ''
  @observable pais: string = ''
  @observable taxon: string = ''

  @computed get normas(): any[] {return db.unique('norma').map(item => ({value: item, label: item}))}
  @computed get produtos(): string[] {return db.unique('produto')}
  @computed get usos(): string[] {return db.unique('uso')}
  @computed get paises(): string[] {return db.unique('pais')}
  @computed get pragas(): string[] {return db.unique('praga')}
  @computed get taxons(): string[] {return db.unique('taxon')}

  @computed get filtered():  Requisito[] {return db.filter(item => (
    (!this.norma || item.norma === this.norma ) &&
    (!this.praga || item.produto === this.produto) &&
    (!this.uso || item.uso === this.uso) &&
    (! this.pais || item.pais === this.pais) &&
    (!this.praga || item.praga === this.praga) &&
    (!this.taxon || item.taxon === this.taxon)
  ))}

  @computed get group(): any {return db.groupBy('taxon', ['praga'])}

  @action clean = (): void => {
    this.praga = ''
    this.norma = ''
    this.produto = ''
    this.uso = ''
    this.pais = ''
    this.taxon = ''
  }

  @action change = (field: string, value: string): void => {
    this[field] = value
  }
}

const store = new Quarentenarias()

export default store
