//
//   function log(message) {
//   console.log(message);
//
// }
//
// var message = 'Hello World';
// log(message);
// const ColorRed = 0;
// const ColorGreen = 1;
// const ColorBlue = 2;
// const ColorPurple = 3;
// enum Color{ Red = 0, Green = 1, Blue = 2, Purple = 3 };
//
// let backgroundColor = Color.Red;
// Type Assertions. Forcing type string in this scenario below
// let message;
// message = 'abc';
// let endsWithC = (<string>message).endsWith('c');
// let endsWithC = (message as string).endsWith('c');
//  Arrow functions
// let doLog = (message) => console.doLog(message)
// All about interfaces
// interface Point {
//     x: number,
//     y: number
// }
//
// let drawPoint = (point: Point) => {
// ...
// }
// All about Classes
// class Point {
//       x: number;
//       y: number;
//
//       constructor(x?: number, y?:number) {
//         this.x = x;
//         this.y = y;
//       }
//
//       draw() {
//          console.log('X: ' + this.x + ', Y:' + this.y);
//       }
// }
//
// let point = new Point(1,2);
// point.draw();
// Using access modifiers
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ', Y:' + this.y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
var x = point.x;
point.x = 10;
point.draw();
