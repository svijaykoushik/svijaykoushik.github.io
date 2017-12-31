var game = new Phaser.Game(1920, 1200, Phaser.CANVAS, null,{preload: preload, create: create, update: update});

function preload(){
    //game.stage.backgroundColor = '#000';
    if(game.device.desktop){
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    }
    else{
        game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    }
    this.virtualFireworks = this.game.plugins.add(Phaser.Plugin.VirtualFireworks);
}

function create(){
    newyearText = game.add.text(game.world.width*0.5, game.world.height*0.5, 'Happy Newyear', { font: '128px Courgette, cursive', fill: 'hsla(170, 50%, 45%, 1)' });
    copyRightText = game.add.text(game.world.width*0.5, game.world.height-50, '(c) 2017 svijaykoushik', { font: '32px Courgette, cursive', fill: 'hsla(170, 50%, 45%, 1)' });
    newyearText.anchor.set(0.5);
    copyRightText.anchor.set(0.5);
    this.virtualFireworks.draw();
}

function update(){
    this.virtualFireworks.update();
}