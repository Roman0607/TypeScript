var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persone = /** @class */ (function () {
    function Persone(weight, height) {
        this.weight = weight;
        this.height = height;
    }
    return Persone;
}());
;
var Deputy = /** @class */ (function (_super) {
    __extends(Deputy, _super);
    function Deputy(paramDeputy, height, weight) {
        var _this = _super.call(this, weight, height) || this;
        _this.paramDeputy = paramDeputy;
        return _this;
    }
    ;
    Deputy.prototype.giveHabar = function (habar) {
        if (this.paramDeputy.habar.habarnyk === true) {
            if (this.paramDeputy.habar && this.paramDeputy.habar.sizeHabar == 2000) {
                console.log("Our persone took habar");
            }
            else {
                console.log('size of Habar isnt correct');
            }
        }
        else {
            console.log("Persone doesn't want to give habar!!");
        }
    };
    return Deputy;
}(Persone));
;
var Fraction = /** @class */ (function () {
    function Fraction(listOfDepu) {
        this.listOfDepu = listOfDepu;
    }
    Fraction.prototype.addDeputy = function (persone) {
        this.listOfDepu.push(persone);
        console.log(this.listOfDepu);
    };
    Fraction.prototype.deleteDeputy = function () {
    };
    Fraction.prototype.removeAllHabarnyky = function () {
        for (var i = this.listOfDepu.length - 1; i >= 0; i--) {
            if (this.listOfDepu[i].habar && this.listOfDepu[i].habar.habarnyk) {
                this.listOfDepu.splice(i, 1);
            }
        }
    };
    Fraction.prototype.writeMostHabarnyk = function () {
        var max = 0;
        for (var id_1 in this.listOfDepu) {
            if (this.listOfDepu[id_1].habar && this.listOfDepu[id_1].habar.sizeHabar > max) {
                max = this.listOfDepu[id_1].habar.sizeHabar;
            }
        }
        console.log(max, 'maxx');
    };
    Fraction.prototype.writeAllDeputy = function () {
        console.log(this.listOfDepu);
    };
    Fraction.prototype.deleteAllDeputy = function () {
        this.listOfDepu = null;
        console.log(this.listOfDepu, 'lisst');
    };
    Fraction.prototype.writeAllSizeOfHabar = function () {
        var suma = 0;
        for (var id_2 in this.listOfDepu) {
            if (this.listOfDepu[id_2].habar && this.listOfDepu[id_2].habar.habarnyk) {
                suma += this.listOfDepu[id_2].habar.sizeHabar;
            }
        }
        console.log(suma, 'sumaa');
    };
    return Fraction;
}());
var id = 0;
var deputy1 = { name: 'Vova', lastname: 'Ivanov' };
var deputy2 = { name: 'Roman', lastname: 'Ivanishyn', habar: { habarnyk: true, sizeHabar: 1500 } };
var deputy3 = { name: 'Vika', lastname: 'Molochiy' };
var deputy4 = { name: 'Oleg', lastname: 'Fedetskiy', habar: { habarnyk: true, sizeHabar: 1500 } };
var deputy5 = { name: 'Andriana', lastname: 'Povoroznyk', habar: { habarnyk: true, sizeHabar: 2000 } };
var arrDepu = [deputy1, deputy2, deputy3, deputy4, deputy5];
var svoboda = new Fraction(arrDepu);
//  svoboda.addDeputy({name:'Orysya',lastname:'Zalutska',habar:{habarnyk:true,sizeHabar:2000},id:id++})
svoboda.writeMostHabarnyk();
