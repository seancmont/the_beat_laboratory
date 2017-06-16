class padsCtrl {
    constructor($rootScope, $interval) {
        let ctrl = this;
        ctrl.rootScope = $rootScope;

        // // Our freesound api key
        freesound.setToken("T7pOt1Genqrw62O6ryImY5kRT5pSXzIn1d3oDxQ9");

        // Value of our search input
        ctrl.search = "";
        ctrl.searchList = [];
        ctrl.newSnd = null;

        ctrl.title = 'the pads go here';
        ctrl.pads = [];
        ctrl.keys = [65, 83, 68, 70, 90, 88, 67, 86];

        window.addEventListener('keydown', function(e) {
            //console.log('poopy');
            console.log(e.keyCode);

            ctrl.pads.find(function(pad) {
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
            ctrl.pads.push({
                'id': (i + 1),
                'keycode': ctrl.keys[i],
                'sound': ctrl.soundsBasic[i]
            });
    }

}



    playSoundChoke(pad) {
       let ctrl = this
        if (pad.sound.playing(pad.sound)) {
            pad.sound.stop();
            pad.sound.play();
        } else {
           pad.sound.play(); 
        }
    }

    searchSound () {
        
           // Example 2
        // Example of searching sounds: querying the freesound db for sounds
        let ctrl = this;
        var query = ctrl.search;
        var page = 1
        var filter = "tag: mezzoforte"
        var sort = "rating_desc"
        freesound.textSearch(query, {page:page, sort:sort},
            function(sounds){
                for (var i =0;i< 8;i++){  
                    var snd = sounds.getSound(i);
                    console.log(snd.name + ' ' + snd.id);
                    ctrl.searchList.push(snd.id);
                    ctrl.readSoundId(ctrl.searchList[i], i);
                    console.log('searchlist ' + i + ':' + ctrl.searchList[i])
                }
            },function(){ displayError("Error while searching...")}
        );

    }

    readSoundId (id, i) {
        let ctrl = this;
        console.log('readId');
        console.log('id ' + id);
        freesound.getSound(id,
                function(sound){
                    console.log('readId2');
                    ctrl.newSnd = new Audio(sound.previews['preview-hq-mp3']);
                    console.log('new sound ' + ctrl.newSnd);
                    ctrl.pads[i].sound = ctrl.newSnd;
                    // ctrl.pads[i].sound = new Howl({src: [ctrl.newSnd]});
                    // console.log('new audio ' + new Audio(sound.previews['preview-hq-mp3']);


                    // snd = new Audio(sound.previews['preview-hq-mp3']);

                        // When we have printed the analysis, ask for similar sounds
                        // sound.getSimilar(function(sounds){
                            
                        //     for (i =0;i<=3;i++){                                
                        //         var snd = sounds.getSound(i);
                        //     }
                            
                        // }, function(){ displayError("Similar sounds could not be retrieved.")},
                        // {fields:fields});
                    } //function(){ displayError("Sound could not be retrieved.")}
                
        );
    }


// window.onload = function(){

        // freesound.setToken("T7pOt1Genqrw62O6ryImY5kRT5pSXzIn1d3oDxQ9");
        
        // var fields = 'id,name,url';
        // Example 1
        // Example of geeting the info of a sound, queying for similar sounds (content based) and showing some analysis
        // features. Both similar sounds and analysis features are obtained with additional requests to the api.
        // freesound.getSound(153766,
        //         function(sound){

        //             snd = new Audio(sound.previews['preview-hq-mp3']);

        //                 // When we have printed the analysis, ask for similar sounds
        //                 sound.getSimilar(function(sounds){
                            
        //                     for (i =0;i<=3;i++){                                
        //                         var snd = sounds.getSound(i);
        //                     }
                            
        //                 }, function(){ displayError("Similar sounds could not be retrieved.")},
        //                 {fields:fields});
        //             }, function(){ displayError("Sound could not be retrieved.")}
                
        // );


        //    // Example 2
        // // Example of searching sounds: querying the freesound db for sounds
        // var query = "drum"
        // var page = 1
        // var filter = "tag: mezzoforte"
        // var sort = "rating_desc"
        // freesound.textSearch(query, {page:page, sort:sort, fields:fields},
        //     function(sounds){
        //         var msg = ""
                
        //         msg = "<h3>Searching for: " + query + "</h3>"
        //         msg += "With filter: " + "no filter" +" and sorting: " + sort + "<br>"
        //         msg += "Num results: " + sounds.count + "<br><ul>"
        //         for (i =0;i<=10;i++){  
        //             var snd = sounds.getSound(i);
        //             msg += "<li>" + snd.name + " by " + snd.id + "</li>"
        //         }
        //         msg += "</ul>"
        //         displayMessage(msg,"resp2")
        //     },function(){ displayError("Error while searching...")}
        // );

    
}

export default padsCtrl;
