class padsCtrl {
    constructor($rootScope, $interval) {
        let ctrl = this;
        ctrl.rootScope = $rootScope;
      

        ctrl.title = 'the pads go here';
        ctrl.rootScope.pads = [];
        ctrl.keys = [65, 83, 68, 70, 90, 88, 67, 86];

        window.addEventListener('keydown', function(e) {
        
            console.log(e.keyCode);

            ctrl.rootScope.pads.find(function(pad) {
                pad.keycode === e.keyCode ? pad.sound.play() : null;
                
            });
        });

        ctrl.soundsBasic = [];

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/clap-tape.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/crash-tape.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/hihat-acoustic01.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/kick-oldschool.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/ride-acoustic02.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/snare-acoustic02.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/tom-808.wav']
        }));

        ctrl.soundsBasic.push(new Howl({
            src: ['./app/assets/sounds/percussion/tom-rototom.wav']
        }));

        for (var i = 0; i < 8; i++) {
            ctrl.rootScope.pads.push({
                'id': (i + 1),
                'keycode': ctrl.keys[i],
                'sound': ctrl.soundsBasic[i]
            });
    }

}

    loadPad(pad) {
        let ctrl = this;

        pad.sound = ctrl.rootScope.newSnd;

        // pad.sound = new Howl({
        //     src: [ctrl.rootScope.newSnd]
        // });

    }

    playPad(pad) {
        let ctrl = this;
        console.log(pad);
        pad.sound.stop();
        pad.sound.play();
    }

}

export default padsCtrl;
