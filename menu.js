class menu extends Phaser.Scene{
    constructor(){
        super("menu");
    }
    init(data){
    }

preload(){
    this.load.image('menu', 'assets/Menu_Full.png');
    this.load.image('bg', 'assets/decor.jpg');
    this.load.image('tiles','assets/tiles/tiles.png');
    this.load.image('box','assets/box.png');
    this.load.image('bnormal','assets/buta.png');
    this.load.image('chilli_pepper','assets/piment.png');
    this.load.image('ice_cream','assets/glace.png');
    this.load.image('boule_de_feu_droit','assets/boule_de_feu_droit.png');
    this.load.image('boule_de_feu_gauche','assets/boule_de_feu_gauche.png');
    this.load.image('boule_de_glace_droit','assets/boule_de_glace_droit.png');
    this.load.image('boule_de_glace_gauche','assets/boule_de_glace_gauche.png');
    this.load.image('chicken','assets/poulet.png');
    this.load.image('food','assets/aliment.png');
    this.load.image('ennemi','assets/Perso_3.png');
    //this.load.tilemapTiledJSON('map','assets/tiles/RaionVille.json');
    this.load.tilemapTiledJSON('map','assets/tiles/Raion_Full.json');
    this.load.image('full_heart', 'assets/full_heart.png');
    this.load.image('empty_heart', 'assets/empty_heart.png');
    this.load.spritesheet('ennemi_freeze','assets/BG_FX_glace.png', {frameWidth:500, frameHeight:500});
    this.load.spritesheet('sprite', 'assets/spritesheet.png', { frameWidth:398, frameHeight:228});
    this.load.spritesheet('sprite_buta_normal', 'assets/sprite_buta_normal.png', { frameWidth:988, frameHeight:800});
    this.load.spritesheet('sprite_buta_feu', 'assets/sprite_buta_feu.png', { frameWidth:988, frameHeight:800});
    this.load.spritesheet('sprite_buta_aile', 'assets/sprite_buta_aile.png', { frameWidth:994, frameHeight:1600});
    this.load.spritesheet('sprite_buta_aile_vole', 'assets/sprite_buta_aile_vole.png', { frameWidth:951, frameHeight:1080});
    this.load.spritesheet('sprite_buta_glace', 'assets/sprite_buta_glace.png', { frameWidth:988, frameHeight:800});
}

create(){

    this.add.image(0, 0, 'menu').setOrigin(0);
    this.add.image(300, 100, 'titre').setOrigin(0);
    let jouer = this.add.image (400, 225, 'jouer').setOrigin(0);
// PointerEvents:
//   pointerover - hovering
//   pointerout - not hovering
//   pointerup - click and releae
//   pointerdown - just click

    jouer.setInteractive();
    quitter.setInteractive();

    jouer.on("pointerover", ()=>{
    })

    jouer.on("pointerout", ()=>{
    })

    jouer.on("pointerup", ()=>{
    })

    jouer.on("pointerdown", ()=>{
        this.scene.start("shittygame");
    })

    quitter.on("pointerdown", ()=>{
    })
}
}