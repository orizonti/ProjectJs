alert("TEST PHASER PROJECT");
var game = new Phaser.Game(800,500, Phaser.CANVAS,'phaser-example',
 {preload:preload,create:create,update:update,render:render});

function preload() 
{
    game.load.image('ground','D:/WorkDir/background.jpg');
}
function create()
{
    game.add.sprite(0,0,'ground');
}

function update(){};
function render(){};