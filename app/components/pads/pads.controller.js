class padsCtrl {
    constructor($rootScope, $interval) {
        let ctrl = this;
        ctrl.title = 'the pads go here';
        ctrl.pads = [];
        ctrl.keys = [65, 83, 68, 70, 90, 88, 67, 86];

        window.addEventListener('keydown', function(e) {
        	console.log('poopy');
        	console.log(e.keyCode);

        	ctrl.pads.find(function(a) {
        		a.keycode === e.keyCode ? a.sound.play() : null;
        		
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
            ctrl.pads.push({
                'id': (i + 1),
                'keycode': ctrl.keys[i],
                'sound': ctrl.soundsBasic[i]
            });
    }

}



    hello() {
        console.log('hello world');
    }
}

export default padsCtrl;
