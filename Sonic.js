class Sonic {

    constructor(game) {
        this.game = game;
        // (spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop)
        this.animator = new Animator(ASSET_MANAGER.getAsset("./SonicSheet.png"), 7, 54, 30, 42, 1, 0.4, 10, false, true);
        this.frame = 0;
        this.tapping = false;
        this.starting = false;
        this.checkWatch = false;
        this.lyingDown = false;
        this.laying = false;
        this.watchCount = 0;
    };
    
    update() {
        console.log(this.animator.currentFrame())
        this.frame++;
        if(!this.starting && this.frame == 120) {
            this.startupAnim();
        }

        if(this.animator.currentFrame() == 3 || this.checkWatch && this.frame == 90) {
            console.log("tapping");
            this.tappingAnim();
        }

        if(this.tapping && this.frame == 900) {
            console.log("checked watch");
            this.checkWatchAnim();
        }

        if(!this.checkWatch && !this.lyingDown && this.animator.currentFrame() == 0 && this.watchCount == 2) {
            this.lyeDownAnim();
        }

        if(this.lyingDown && !this.laying && this.frame == 50) {
            this.layingAnim();
        }

    };

    startupAnim() {
        this.animator = new Animator(ASSET_MANAGER.getAsset("./SonicSheet.png"), 199, 54, 30, 42, 4, 0.2, 10, false, true);
        this.starting = true;
        this.frame = 0;
    }

    tappingAnim() {
        this.tapping = true;
        this.checkWatch = false;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./SonicSheet.png"), 279, 54, 30, 42, 2, 0.1, 10, false, true)
    }

    checkWatchAnim() {
        this.animator = new Animator(ASSET_MANAGER.getAsset("./SonicSheet.png"), 359, 54, 30, 42, 1, 0.4, 10, false, true)
        this.checkWatch = true;
        this.tapping = false;
        this.frame = 0;
        this.watchCount++;
    }

    lyeDownAnim() {
        this.animator = new Animator(ASSET_MANAGER.getAsset("./SonicSheet.png"), 399, 54, 32, 42, 1, 1, 10, false, true)
        this.tapping = false;
        this.lyingDown = true;
        this.frame = 0;
    }

    layingAnim() {
        this.animator = new Animator(ASSET_MANAGER.getAsset("./SonicSheet.png"), 439, 54, 40, 42, 2, 0.2, 8, false, true)
        this.laying = true;
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 300, 200, 5);
    };
}