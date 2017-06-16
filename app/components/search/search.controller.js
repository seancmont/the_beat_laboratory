class searchCtrl {
    constructor($rootScope, $interval) {
        let ctrl = this;
        ctrl.rootScope = $rootScope;
 
        // // Our freesound api key
        freesound.setToken(config.freesoundToken);
 
        // Value of our search input
        ctrl.search = "";
        ctrl.searchList = [];
        //ctrl.soundName = [];
        ctrl.soundList = [];
        ctrl.rootScope.newSnd = null;
 
}
 
 
    searchSound () {
        
           // Example 2
        // Example of searching sounds: querying the freesound db for sounds
        let ctrl = this;
        var query = ctrl.search;
        var page = 1
        var filter = "tag: mezzoforte"
        var sort = "ratings_desc"
        freesound.textSearch(query, {page:page, sort:sort},
            function(sounds){
                for (var i =0;i< 3;i++){  
                    var snd = sounds.getSound(i);
                    console.log(snd.name + ' ' + snd.id);
                    ctrl.searchList.push(snd.id);
                    // ctrl.soundName.push(snd.name);
                    ctrl.soundList.push({"name": snd.name, "soundFile": null});
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
                    // ctrl.soundList.push(new Audio(sound.previews['preview-hq-mp3']));
                    // ctrl.newSnd = new Audio(sound.previews['preview-hq-mp3']);
                    // ctrl.soundList[i].soundFile = new Audio(sound.previews['preview-hq-mp3']);

                    ctrl.soundList[i].soundFile = new Howl({
                        src: [sound.previews['preview-hq-mp3']]
                    });

                    console.log('new sound ' + ctrl.soundList[i].soundFile);
                    // console.log('new sound ' + ctrl.newSnd);
                    // ctrl.rootScope.pads[0].sound = ctrl.newSnd;
                    
                    } 
                
        );
    }

    loadSound (sound) {
        let ctrl = this;
        console.log(sound);
        ctrl.rootScope.newSnd = sound.soundFile;
        console.log(ctrl.rootScope.newSnd);
    }
 
 
 
}
 
export default searchCtrl;
