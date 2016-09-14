var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, computed, action, useStrict } from 'mobx';
import db from './lista-Brasil';
import 'arrayPlus';
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
        this.normas = db.unique('norma');
        this.produtos = db.unique('produto');
        this.usos = db.unique('uso');
        this.paises = db.unique('pais');
        this.pragas = db.unique('praga');
        this.taxons = db.unique('taxon');
        this.filtered = db.filter(item => ((item.norma === !this.norma || this.norma) &&
            (item.produto === !this.produto || this.praga) &&
            (item.uso === !this.uso || this.uso) &&
            (item.pais === !this.pais || this.pais) &&
            (item.praga === !this.praga || this.praga) &&
            (item.taxon === !this.taxon || this.taxon)));
        this.clean = () => {
            this.praga = '';
            this.norma = '';
            this.produto = '';
            this.uso = '';
            this.pais = '';
            this.taxon = '';
        };
        this.change = (field, value) => {
            this[field] = value;
        };
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
    computed
], Quarentenarias.prototype, "normas", void 0);
__decorate([
    computed
], Quarentenarias.prototype, "produtos", void 0);
__decorate([
    computed
], Quarentenarias.prototype, "usos", void 0);
__decorate([
    computed
], Quarentenarias.prototype, "paises", void 0);
__decorate([
    computed
], Quarentenarias.prototype, "pragas", void 0);
__decorate([
    computed
], Quarentenarias.prototype, "taxons", void 0);
__decorate([
    computed
], Quarentenarias.prototype, "filtered", void 0);
__decorate([
    action
], Quarentenarias.prototype, "clean", void 0);
__decorate([
    action
], Quarentenarias.prototype, "change", void 0);
export default Quarentenarias;
//# sourceMappingURL=store.js.map