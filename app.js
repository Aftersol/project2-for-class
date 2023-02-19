class Card
{
    #type; // card type

    get type()
    {
        return this.type;
    }

    constructor(type)
    {
        this.type = type;
    }
}


class tileSet
{
    tiles;

    constructor(x, y)
    {
        tiles = Array(x);
        for (var i = 0; i < x; i++)
        {
            tiles[i] = Array(y);
        }
    }
}

class Game
{

    score;

    constructor() {
        this.score = 0;

    }
}

const Application = PIXI.Application;

const app = new Application({
    width: 500,
    height: 500
});

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;
const rectangle = new Graphics();
rectangle.beginFill(0xAA33BB)
.drawRect(200, 200, 100, 120)
.endFill();

app.stage.addChild(rectangle);

// calls every frame
app.ticker.add(function() {
    
});