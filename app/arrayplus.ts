
interface Array<T> {
  groupBy(prop: string /*| ((value: T, index: number, array: T[]) => Array<any>)*/, fields?: string | Function | any): T[];
  aggregate(querys: any): T[];
  first(): T;
  last(): T;
  count(field?: (value: T, index: number, array: T[]) => Array<any>): number;
  min(field?: string | ((value: T, index: number, array: T[]) => Array<any>)): number;
  max(field?: string | ((value: T, index: number, array: T[]) => Array<any>)): number;
  sum(field?: string | ((value: T, index: number, array: T[]) => Array<any>)): number;
  average(field?: string | ((value: T, index: number, array: T[]) => Array<any>)): number;
  unique(field?: string | ((value: T, index: number, array: T[]) => Array<any>) | string): string[] /*| T[]*/;
  by(field?: string |  ((value: T, index: number, array: T[]) => Array<any>)): T[];
  flatten(depth?: number): T[];
  flatMap<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
  take(number?: number): T[];
  includes(searchElement?: any): boolean;
  find(callbackfn: (value: T, index: number, array: Array<T>) => boolean, thisArg?: any): T;
  findIndex(callbackfn: (value: T, index: number, array: Array<T>) => boolean, thisArg?: any): number;
  fill(value: T, start?: number, end?: number): T[];
  //static isArray(arg:any): boolean;
}

if (!Array.prototype.groupBy) {
  Array.prototype.groupBy = function(prop: string, fields: any): any {
    let key;
    let result = this.reduce((grouped: any, item: any) => {
      key = /*(typeof prop === 'function') ? prop.apply(this, [item]) :*/ item[prop];
      grouped[key] = grouped[key] || [];
      let obj;
      switch (typeof fields) {
        case 'function':
          obj = fields(item);
          break;
        case 'string':
          obj = {};
          obj[fields] = item[fields];
          break;
        case 'object':
          if (Array.isArray(fields)) {
            obj = fields.reduce((prev, curr) => { prev[curr] = item[curr]; return prev; }, {});
          }
          break;
        default:
          obj = item;
          break;
      }
      grouped[key].push(obj);
      return grouped;
    },
    {} // tslint:disable-line
  );
    let ret = [];
    for (let row in result) {
      if (true) {
        let item: any = {};
        let cat = (typeof prop === 'function') ? 'key' : prop;
        item[cat] = row;
        item.group = result[row];
        ret.push(item);
      }
    }
    return ret;
  };
}

if (!Array.prototype.aggregate) {
  Array.prototype.aggregate = function(querys) { // tslint:disable-line:typedef
    return this.map(row => {
      for (let query in querys) {
        if (true) {
          let func = querys[query];
          let data = row.group.map(group => group[query]);
          let value;
          let name = '';
          if (typeof func === 'string') {
            value = Array.prototype[func].call(data);
            name = func;
          } else {
            value = func.call(data);
          }
          row[name + '_' + query] = value;
        }
      }
      //console.log('row:', row.category, row)
      delete row.group;
      return row;
    });
  };
}

if (!Array.prototype.first) {
  Array.prototype.first = function() { // tslint:disable-line:typedef
    return this[0];
  };
}

if (!Array.prototype.last) {
  Array.prototype.last = function() { // tslint:disable-line:typedef
    return this[this.length - 1];
  };
}

if (!Array.prototype.count) {
  Array.prototype.count = function() { // tslint:disable-line:typedef
    return this.length;
  };
}

function typeArg(arg, arr) { // tslint:disable-line:typedef
  let that;
  switch (typeof arg) {
    case 'function':
      that = arr.map(arg);
      break;
    case 'string':
      that = arr.map(o => o[arg]);
      break;
    default:
      that = arr;
      break;
  }
  return that;
}

if (!Array.prototype.min) {
  Array.prototype.min = function(field) { // tslint:disable-line:typedef
    return Math.min.apply(null, this.by(field));
  };
}

if (!Array.prototype.max) {
  Array.prototype.max = function(field) { // tslint:disable-line:typedef
    return Math.max.apply(null, this.by(field));
  };
}

if (!Array.prototype.sum) {
  Array.prototype.sum = function(field) { // tslint:disable-line:typedef
    return this.by(field).reduce((prev, current) => (+(current) + prev), 0); //parseFloat
  };
}

if (!Array.prototype.average) {
  Array.prototype.average = function(field) { // tslint:disable-line:typedef
    let that = typeArg(field, this);
    let count = that.length;
    let total = that.reduce((prev, current) => (+(current) + prev), 0); //parseFloat
    return total / count;
  };
}

if (!Array.prototype.unique) {
  Array.prototype.unique = function(field) { // tslint:disable-line:typedef
    let that = typeArg(field, this);
    let o = {}, i, l = that.length, r = [];  // tslint:disable-line
    for (i = 0; i < l; i += 1) { o[JSON.stringify(that[i])] = that[i]; }
    for (i in o) { r.push(o[i]); } // tslint:disable-line
    return r;
  };
}

function flatten(list: Array<any>, depth?: number, mapperFn?: Function, mapperCtx?: any) { // tslint:disable-line:typedef
  if (depth === 0) {
    return list;
  }
  return list.reduce((accumulator, item, i) => {
    if (mapperFn) {
      item = mapperFn.call(mapperCtx || list, item, i, list);
    }
    if (Array.isArray(item)) {
      accumulator.push(...flatten(item, depth - 1));
    } else {
      accumulator.push(item);
    }
    return accumulator;
  }, [] // tslint:disable-line
  );
};

if (!Array.prototype.flatten) {
  Array.prototype.flatten = function(depth = Infinity) { // tslint:disable-line:typedef
    return flatten(this, depth);
  };
}

if (!Array.prototype.flatMap) {
  Array.prototype.flatMap = function(fn, ctx) { // tslint:disable-line:typedef
    return flatten(this, 1, fn, ctx);
  };
}

if (!Array.prototype.by) {
  Array.prototype.by = function(field) { // tslint:disable-line:typedef
    return typeArg(field, this);
  };
}

if (!Array.prototype.take) {
  Array.prototype.take = function(number) { // tslint:disable-line:typedef
    let begin;
    let end;
    if (number >= 0) {
      begin = 0;
      end = number;
    } else {
      begin = number;
      end = this.length;
    }
    return this.slice(begin, end);
  };
}

if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) { // tslint:disable-line:typedef
    'use strict';
    let O = Object(this);
    let len = parseInt(O.length, 10) || 0;
    if (len === 0) {
      return false;
    }
    let n = parseInt(arguments[1], 10) || 0;
    let k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0; }
    }
    let currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
          (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) { // tslint:disable-line:typedef
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    let list = Object(this);
    let length = list.length >>> 0; // tslint:disable-line
    let thisArg = arguments[1];
    let value;

    for (let i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function(predicate) { // tslint:disable-line:typedef
    if (this === null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    let list = Object(this);
    let length = list.length >>> 0; // tslint:disable-line
    let thisArg = arguments[1];
    let value;

    for (let i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

if (!Array.prototype.fill) {
  Array.prototype.fill = function(value) { // tslint:disable-line:typedef
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    let O = Object(this);

    // Steps 3-5.
    let len = O.length >>> 0; // tslint:disable-line

    // Steps 6-7.
    let start = arguments[1];
    let relativeStart = start >> 0; // tslint:disable-line

    // Step 8.
    let k = relativeStart < 0 ?
      Math.max(len + relativeStart, 0) :
      Math.min(relativeStart, len);

    // Steps 9-10.
    let end = arguments[2];
    let relativeEnd = end === undefined ?
      len : end >> 0;  // tslint:disable-line

    // Step 11.
    let final = relativeEnd < 0 ?
      Math.max(len + relativeEnd, 0) :
      Math.min(relativeEnd, len);

    // Step 12.
    while (k < final) {
      O[k] = value;
      k++;
    }

    // Step 13.
    return O;
  };
}

/*if (!Array.isArray) {
  Array.isArray = function(arg){
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}*/

interface ObjectConstructor {
    assign(target: any, ...sources: any[]): any;
}

if (typeof Object.assign !== 'function') {
  (function () { // tslint:disable-line:typedef
    Object.assign = function (target) { // tslint:disable-line:typedef
      'use strict';
      if (target === undefined || target === null) {
        throw new TypeError('Cannot convert undefined or null to object');
      }

      let output = Object(target);
      for (let index = 1; index < arguments.length; index++) {
        let source = arguments[index];
        if (source !== undefined && source !== null) {
          for (let nextKey in source) {
            if (source.hasOwnProperty(nextKey)) {
              output[nextKey] = source[nextKey];
            }
          }
        }
      }
      return output;
    };
  })();
}
