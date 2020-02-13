var util = require('util');
var EventEmitter = require('events').EventEmitter;

var Calc = function(){
    var self = this;

    this.on('stop', function(){
        console.log('Calc에 stop event 전달됨.');
    });
};

util.inherits(Calc, EventEmitter);//Calc객체가 이벤트를 처리할 수 있도록 EventsEmitter를 상속하게 만든다.

Calc.prototype.add = function(a, b){
    return a + b;
}

module.exports = Calc;
module.exports.title = 'calculator';//title 속성의 값을 설정해줌.