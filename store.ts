import {observable, computed, acton, useStrict} from 'mobx'
import db from '/quarentenariasDb'
import 'arrayPlus'

useStrict()

interface Requisito {
  norma: string;
  produto: string;
  uso: string;
  pais: string;
  praga: string;
  status: string;
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

  @computed normas: string[] = db.unique('norma')
  @computed produtos: string[] = db.unique('produto')
  @computed usos: string[] = db.unique('uso')
  @computed paises: string[] = db.unique('pais')
  @computed pragas: string[] = db.unique('praga')
  @computed taxons: string[] = db.unique('taxon')

  @computed filtered: Requisito[] = db.filter(item => (
    (item.norma === !this.norma || this.norma) &&
    (item.produto === !this.produto || this.praga) &&
    (item.uso === !this.uso || this.uso) &&
    (item.pais === !this.pais || this.pais) &&
    (item.praga === !this.praga || this.praga) &&
    (item.taxon === !this.taxon || this.taxon)
  ))

  @action clean = (): void {
    this.praga = ''
    this.norma = ''
    this.produto = ''
    this.uso = ''
    this.pais = ''
    this.taxon = ''
  }

  @action change = (field:string, value: string): void {
    this[field] = value
  }
}

export default Quarentenarias
