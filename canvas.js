var canvas = document.querySelector('canvas');
if (!canvas) {
    throw new Error("cnavas cannot be created");
}
var c = canvas.getContext('2d');
if (!c) {
    throw new Error("context rendering is not possible");
}
canvas.width = 1024;
canvas.height = 574;
var Player = /** @class */ (function () {
    function Player(position) {
        this.position = position;
    }
    Player.prototype.read = function () {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 100, 100);
    };
    Player.prototype.update = function () {
        this.read();
        this.position.y++;
    };
    return Player;
}());
var player1 = new Player({
    x: 0,
    y: 0
});
var player2 = new Player({
    x: 300,
    y: 100
});
function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c === null || c === void 0 ? void 0 : c.fillRect(0, 0, canvas.width, canvas.height);
    player1.update();
    player2.update();
}
animate();
