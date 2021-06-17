var player;
var death_zone=false;
var gel=0;
var ejection=false;
var contact=false;
var animation;
var Buta_normal=true;
var playerBlockedDown = false;
var inContactCaisse = false;
var cursors;
var cursor_menu;
var caisses
var caisse;
var choice=0;
var box;
var wallsLayer;
var gameOver = false;
var death;
var ground;
var Touche_Caisse=false;
var playerDirection="RIGHT";
var destroyBox;
var jumpCount=0;
var doublesaut=true;
var jump;
var background;
var jauge2;
var Jump;
var Competence_Speciale;
var death_Zone_Spawnpoint;
var hitByPlayer; 
var Recolte_Aliment;
var Recolte_Glace;
var Recolte_Piment;
var Recolte_Poulet;
var Fonction_Ennemi;
var onGround;
var image_menu = this.image_menu;
var spawnpoint=0;
//FEU
var Buta_Feu;
var piment;
var piments;
var respawn_chilli_pepper;
var lancer_boule_de_feu;
var boules_de_feu;
var destroyFireball;
var BDF_reload = true;
var count_bdf_masse = 0;
//GLACE
var Buta_Glace;
var glace;
var glaces;
var respawn_icecream;
var lancer_boule_de_glace;
var boules_de_glace;
var BDG_reload = true;
var timeoutResetSkill=1000;
//AILE
var Buta_Aile;
var poulet;
var poulets;
var respawn_chicken;
var flying_mode;
var Aile_reload = true;
var undefined_jauge=1000;
var competence=false;
//ALIMENTS
var aliment;
var aliments;
var jauge=10000;
var jaugeText;
//ENNEMI
var ennemi;
var ennemis;
var movement=true;
var timeoutDelayMovementEnnemi=5000;
var BDG_Touch=false;
var onEnnemis=false;
var bool_hide_ennemi=false;
var epeiste_death=false;
//HP
var player_hp = 5;
var invincible = false;
var full_heart_1;
var full_heart_2;
var full_heart_3;
var full_heart_4;
var full_heart_5;
var empty_heart_1;
var empty_heart_2;
var empty_heart_3;
var empty_heart_4;
var empty_heart_5;
var damageOff=false;
//////////////
//CONTROLES
var Haut;
var Bas;
var Gauche;
var Droite;
var Roulade;
var roulade = false;

class menu extends Phaser.Scene{
    constructor(){
        super("menu");
    }
    init(data){
    }

preload(){
    this.load.image('menu', 'assets/Menu_Full_v2.png');
    this.load.image('jouer','assets/Jouer.png');
    this.load.image('quitter', 'assets/Quitter.png')
    /* this.load.image('options', 'assets/Options.png');
    this.load.image('controle', 'assets/controle.png'); */
    this.load.image('bg', 'assets/decor2.jpg');
    //this.load.image('bg_menu', 'assets/decor.jpg');
    this.load.image('tiles','assets/tiles/tiles.png');
    this.load.image('box','assets/box.png');
    this.load.image('bnormal','assets/buta.png');
    this.load.image('gamelle','assets/full_heart.png');
    this.load.image('chilli_pepper','assets/piment.png');
    this.load.image('ice_cream','assets/glace.png');
    this.load.image('boule_de_feu_droit','assets/boule_de_feu_droit.png');
    this.load.image('boule_de_feu_gauche','assets/boule_de_feu_gauche.png');
    this.load.image('boule_de_glace_droit','assets/boule_de_glace_droit.png');
    this.load.image('boule_de_glace_gauche','assets/boule_de_glace_gauche.png');
    this.load.image('chicken','assets/poulet.png');
    this.load.image('food','assets/aliment.png');
    //this.load.image('ennemi','assets/Perso_3.png');
    //this.load.tilemapTiledJSON('map','assets/tiles/RaionVille.json');
    this.load.tilemapTiledJSON('map','assets/tiles/Raion_Full.json');
    this.load.image('full_heart', 'assets/full_heart.png');
    this.load.image('empty_heart', 'assets/empty_heart.png');
    this.load.image('buta_menu', 'assets/Buta.png');
    this.load.spritesheet('ennemi_freeze','assets/BG_FX_glace.png', {frameWidth:400, frameHeight:590});
    this.load.spritesheet('ennemi_bouclier','assets/BG_FX_Shield.png', {frameWidth:290, frameHeight:440});
    this.load.spritesheet('ennemi_masse','assets/sprite_ennemi_masse.png', {frameWidth:320, frameHeight:262});
    this.load.spritesheet('ennemi_epeiste','assets/sprite_epeiste.png', {frameWidth:390, frameHeight:350});
    this.load.spritesheet('ennemi_immobile_sensible_glace','assets/Perso_BG_3.png', {frameWidth:290, frameHeight:400});
    this.load.spritesheet('sprite', 'assets/spritesheet.png', { frameWidth:398, frameHeight:228});
    this.load.spritesheet('sprite_buta_normal', 'assets/sprite_buta_normal.png', { frameWidth:988, frameHeight:800});
    this.load.spritesheet('sprite_buta_feu', 'assets/sprite_buta_feu.png', { frameWidth:988, frameHeight:800});
    this.load.spritesheet('sprite_buta_aile', 'assets/sprite_buta_aile.png', { frameWidth:994, frameHeight:1600});
    this.load.spritesheet('sprite_buta_aile_vole', 'assets/sprite_buta_aile_vole.png', { frameWidth:951, frameHeight:1080});
    this.load.spritesheet('sprite_buta_glace', 'assets/sprite_buta_glace.png', { frameWidth:988, frameHeight:800});
}

create(){
    cursors = this.input.keyboard.createCursorKeys(); 

    this.anims.create({
        key: 'buta_normal_right',
        frames: this.anims.generateFrameNumbers('sprite_buta_normal', {start: 5, end: 8}),
        frameRate: 10,
        repeat: -1
}); 

    this.add.image(0, 0, 'menu').setOrigin(0).setScale(1);
    //this.add.image(300, 100, 'titre').setOrigin(0);
    
    let playButton = this.add.image (400, 225, 'jouer').setOrigin(0.25,1.25).setScale(0.15);
    let quitter = this.add.image (400, 225, 'quitter').setOrigin(0.25,-1.25).setScale(0.15);
    let hoverSprite = this.add.sprite(0,0,"sprite_buta_normal").setScale(0.05).setVisible(false).setOrigin(-3,-1.7);
    /* let options = this.add.image (400, 225, 'options').setOrigin(0.25,-0).setScale(0.15); */

// PointerEvents:
//   pointerover - hovering
//   pointerout - not hovering
//   pointerup - click and releae
//   pointerdown - just click

    playButton.setInteractive();
    quitter.setInteractive();
    options.setInteractive();

    playButton.on("pointerover", ()=>{  
        hoverSprite.setVisible(true);
        hoverSprite.x = playButton.x - playButton.width/6;
        hoverSprite.y = playButton.y/3;
        hoverSprite.play("buta_normal_right");
    })

    playButton.on("pointerout", ()=>{
        hoverSprite.setVisible(false);
    })

    /* options.on("pointerover", ()=>{  
        hoverSprite.setVisible(true);
        hoverSprite.x = playButton.x - playButton.width/6;
        hoverSprite.y = options.y/1.25;
        hoverSprite.play("buta_normal_right");
    })

    options.on("pointerout", ()=>{
        hoverSprite.setVisible(false);
    }) */

    quitter.on("pointerover", ()=>{
        hoverSprite.setVisible(true);
        hoverSprite.x = quitter.x - quitter.width/6;
        hoverSprite.y = quitter.y/0.82;
        hoverSprite.play("buta_normal_right");
    })

    quitter.on("pointerout", ()=>{
        hoverSprite.setVisible(false);
    })

    playButton.on("pointerdown", ()=>{
        this.scene.start("shokumotsu");
    })

    quitter.on("pointerdown", ()=>{
        game.destroy(true, false);
    })

    /* options.on("pointerdown", ()=>{
        this.scene.start("controle");
    }) */
}
}