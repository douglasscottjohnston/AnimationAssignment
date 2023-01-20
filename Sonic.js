class Sonic {

    constructor(game) {
        this.game = game;
        // (spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop)
        this.animator = new Animator(ASSET_MANAGER.getAsset("./SonicSheet.png"), 0, 39, 29.1, 39, 7, 0.4, 1, false, true);
    };
    
    update() {
        console.log(this.animator.currentFrame())
        var tapping = false
        // if(this.animator.currentFrame() == 6) {
        //     this.animator = new Animator(ASSET_MANAGER.getAsset("./SonicSheet.png"), 118, 39, 29, 39, 3, 0.2, 0, false, true)
        //     tapping = true
        // }

        // if(tapping && this.animator.currentFrame() == 2) {
        //     this.animator = new Animator(ASSET_MANAGER.getAsset("./SonicSheet.png"), 118, 39, 29, 39, 3, 0.2, 0, true, true)

        // }

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 300, 200, 5);
    };
}