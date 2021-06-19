class victoire extends Phaser.Scene{
    constructor(){
        super("victoire");
    }
    init(data){
    }
    create(){
        this.add.image(0, 0, 'victory_screen').setOrigin(0).setScale(1);

        /* let victory_screen = this.add.image(0, 0, 'victory_screen').setOrigin(0).setScale(1);

        victory_screen.setInteractive()

        victory_screen.on("pointerdown", ()=>{
            let victory_screen_2 = this.add.image(0, 0, 'victory_screen_2').setOrigin(0).setScale(1);
            victory_screen_2.setInteractive();
            victory_screen_2.on("pointerdown", ()=>{
                let victory_screen_3 = this.add.image(0, 0, 'victory_screen_3').setOrigin(0).setScale(1);
                victory_screen_3.setInteractive();
                victory_screen_3.on("pointerdown", ()=>{
                    this.cameras.main.fadeOut(100);
                    this.cameras.main.fadeIn(1000);
                })
            })
        }) */
    }
}
