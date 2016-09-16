var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, computed, action, useStrict } from 'mobx';
import db from './lista-Brasil';
import './arrayplus';
useStrict();
class Quarentenarias {
    constructor() {
        this.db = db;
        this.praga = '';
        this.norma = '';
        this.produto = '';
        this.uso = '';
        this.pais = '';
        this.taxon = '';
        this.especie = '';
        this.clean = () => {
            this.praga = '';
            this.norma = '';
            this.produto = '';
            this.uso = '';
            this.pais = '';
            this.taxon = '';
        };
        this.change = (field, object) => {
            if (!object) {
                this[field] = '';
            }
            else {
                this[field] = object.value;
            }
        };
    }
    get normas() { return db.unique('norma').map((item) => ({ value: item, label: item })); }
    get produtos() { return db.unique('produto').map((item) => ({ value: item, label: item })); }
    get usos() { return db.unique('uso').map((item) => ({ value: item, label: item })); }
    get paises() { return db.unique('pais').map((item) => ({ value: item, label: item })); }
    get pragas() { return db.unique('praga').map((item) => ({ value: item, label: item })); }
    get taxons() { return db.unique('taxon').map((item) => ({ value: item, label: item })); }
    get especies() { return db.unique('especie').map((item) => ({ value: item, label: item })); }
    get filtered() {
        return db.filter(item => ((!this.norma || item.norma === this.norma) &&
            (!this.praga || item.produto === this.produto) &&
            (!this.uso || item.uso === this.uso) &&
            (!this.pais || item.pais === this.pais) &&
            (!this.praga || item.praga === this.praga) &&
            (!this.taxon || item.taxon === this.taxon)));
    }
    get group() {
        return this.filtered.groupBy('taxon', ['praga']).sort((a, b) => a.taxon === b.taxon);
    }
}
__decorate([
    observable
], Quarentenarias.prototype, "praga", void 0);
__decorate([
    observable
], Quarentenarias.prototype, "norma", void 0);
__decorate([
    observable
], Quarentenarias.prototype, "produto", void 0);
__decorate([
    observable
], Quarentenarias.prototype, "uso", void 0);
__decorate([
    observable
], Quarentenarias.prototype, "pais", void 0);
__decorate([
    observable
], Quarentenarias.prototype, "taxon", void 0);
__decorate([
    observable
], Quarentenarias.prototype, "especie", void 0);
__decorate([
    computed
], Quarentenarias.prototype, "normas", null);
__decorate([
    computed
], Quarentenarias.prototype, "produtos", null);
__decorate([
    computed
], Quarentenarias.prototype, "usos", null);
__decorate([
    computed
], Quarentenarias.prototype, "paises", null);
__decorate([
    computed
], Quarentenarias.prototype, "pragas", null);
__decorate([
    computed
], Quarentenarias.prototype, "taxons", null);
__decorate([
    computed
], Quarentenarias.prototype, "especies", null);
__decorate([
    computed
], Quarentenarias.prototype, "filtered", null);
__decorate([
    computed
], Quarentenarias.prototype, "group", null);
__decorate([
    action
], Quarentenarias.prototype, "clean", void 0);
__decorate([
    action
], Quarentenarias.prototype, "change", void 0);
const store = new Quarentenarias();
export default store;
//# sourceMappingURL=store.js.map