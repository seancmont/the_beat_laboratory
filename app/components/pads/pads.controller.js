class padsCtrl {
    constructor($rootScope, $interval, $timeout) {
        let ctrl = this;
        ctrl.rootScope = $rootScope;
      
        // This is a global array that will hold our pads and make them available in other components
        ctrl.rootScope.pads = [];

        // This is an array of keyboard keycodes which we will use to set our pads reaction to
        ctrl.keys = [65, 83, 68, 70, 90, 88, 67, 86];

        // Here we attach an event listener to the page that continuously listen for any keypress
        window.addEventListener('keydown', function(e) {
            //console.log(e.keyCode);

            // Here we search through all of our pads and look for any of their assigned keycodes
            ctrl.rootScope.pads.find(function(pad) {

                // If the key pressed matches the pads keycode, play the pad sound
                pad.keycode === e.keyCode ? pad.sound.play() : null;
                
            });
        });

        // This array will hold our initially loaded, vanilla sounds
        ctrl.soundsBasic = [];

        // Here are the eight initial sounds, initialzed as Howls from HowlerJS
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

        // Here we create eight pad objects.
        // Each pad has an id number, a keyboard activation keycode, and a sound
        for (var i = 0; i < 8; i++) {
            ctrl.rootScope.pads.push({
                'id': (i + 1),
                'keycode': ctrl.keys[i],
                'sound': ctrl.soundsBasic[i]
            });
    }

}

    //This function is called when the user hits the "add sound" button from sounds they searched
    loadPad(pad) {
        let ctrl = this;

        pad.sound = ctrl.rootScope.newSnd;

    }

    // This function is called when user clicks on a pad
    playPad(pad) {
        let ctrl = this;
        console.log(pad);

        // This will stop the sound if it is already playing and then start it again
        pad.sound.stop();
        pad.sound.play();
    }

}

export default padsCtrl;
