var canvas = document.querySelector('canvas');
if (!canvas) {
    throw new Error("Canvas element not found");
}
var c = canvas.getContext('2d');
if (!c) {
    throw new Error("2D context not supported");
}
canvas.width = 1024;
canvas.height = 574;
var gravity = 0.5;
var scaledCanvas = {
    width: canvas.width / 4,
    height: canvas.height / 4
};
var Sprite = /** @class */ (function () {
    function Sprite(_a) {
        var position = _a.position, imageSrc = _a.imageSrc;
        this.position = position;
        this.image = new Image();
        this.image.src = imageSrc;
    }
    Sprite.prototype.draw = function () {
        if (!this.image)
            return;
        c === null || c === void 0 ? void 0 : c.drawImage(this.image, this.position.x, this.position.y);
    };
    Sprite.prototype.update = function () {
        this.draw();
    };
    return Sprite;
}());
var Player = /** @class */ (function () {
    function Player(position) {
        this.position = position;
        this.velocity = { x: 0, y: 0 };
        this.height = 100;
    }
    Player.prototype.draw = function () {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 100, this.height);
    };
    Player.prototype.update = function () {
        this.draw();
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y < canvas.height) {
            this.velocity.y += gravity;
        }
        else {
            this.velocity.y = 0;
        }
    };
    return Player;
}());
var background = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/background.png'
});
var player1 = new Player({ x: 0, y: 0 });
var player2 = new Player({ x: 300, y: 100 });
var keys = {
    d: {
        pressed: false
    },
    a: {
        pressed: false
    }
};
function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c === null || c === void 0 ? void 0 : c.save();
    c === null || c === void 0 ? void 0 : c.scale(4, 4);
    c === null || c === void 0 ? void 0 : c.translate(0, -background.image.height + scaledCanvas.height);
    background.update();
    c === null || c === void 0 ? void 0 : c.restore();
    player1.update();
    player2.update();
    player1.velocity.x = 0;
    if (keys.d.pressed) {
        player1.velocity.x = 1;
    }
    else if (keys.a.pressed) {
        player1.velocity.x = -1;
    }
}
animate();
window.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'd':
            keys.d.pressed = true;
            player1.velocity.x = 1;
            break;
        case 'a':
            keys.a.pressed = true;
            player1.velocity.x = -1;
            break;
        case 'w':
            player1.velocity.y = -20;
    }
});
window.addEventListener('keyup', function (event) {
    switch (event.key) {
        case 'd':
            keys.d.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
    }
});
