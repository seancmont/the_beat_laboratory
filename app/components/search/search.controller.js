class searchCtrl {
    constructor($rootScope, $interval, $timeout) {
        let ctrl = this;
        ctrl.rootScope = $rootScope;
        ctrl.timeout = $timeout;
        ctrl.interval = $interval;
 
        // // Our freesound api key
        freesound.setToken(config.freesoundToken);
 
        // search holds the value of our search input
        ctrl.search = "";

        // soundList will hold the freesound ids, audio, and other info
        // as we fetch them with our readSoundId function later
        ctrl.soundList = [];

        // newSnd is a global variable that we will use to load a sound into the pad our user selects
        // We add rootScope to this variable so that we can pass it to or pads component
        ctrl.rootScope.newSnd = null;

        // We define a variable to tell if we are currently loading sounds from the api
        // Once finished we can display sounds
        ctrl.loadingSounds = false;
 
}
 
 // We use searchSound to query the freesound api for sounds with a user input string
    searchSound () {
        let ctrl = this;

        // Before searching for new sounds, we will clear out all of the previously searched sounds
        // from our array
        ctrl.soundList = [];

        // We will also clear out our previously loaded sound
        ctrl.rootScope.newSnd = null;

        console.log('fetching sound ids...')

        // Once we begin fetching sounds from freesound, we set loading to true
        ctrl.loadingSounds = true;
        console.log('loading? ' + ctrl.loadingSounds);

        // query is defined by whatever the user inputs into our search bar on the main view
        var query = ctrl.search;

        // This variable will control how many sounds we want to fetch
        // It is used in the for loop below
        var resultsNum = 3;

        // The next three variables we will use to sort through freesound's api
        var page = 1
        var filter = "tag: "
        var sort = "ratings_desc"

        // Freesound gives us this function to search their api with text input
        // It takes in a string "query", page number, and sort option
        freesound.textSearch(query, {page:page, sort:sort},
            function(sounds){

                for (var i =0;i< resultsNum;i++){

                    // Here we create a temporary variable, snd, to store the freesound sound information  
                    var snd = sounds.getSound(i);

                    // Then we log the sounds name and id
                    console.log(snd.name + ' ' + snd.id);

                    // Here we create a new sound object with all of its info from freesounds api
                    // And we push it into our empty container to be used again in the readSoundId function below
                    ctrl.soundList.push({"name": snd.name, "id": snd.id, "image": null, "soundFile": null});

                    // This is where we jump into our next function and attach the fetched audio file to our soundList object
                    ctrl.readSoundId(ctrl.soundList[i].id, i);

                    console.log('searchlist ' + i + ': ' + snd.name + ' - ' + ctrl.soundList[i].id);
                }

                console.log('Done fetching all sounds');

                // Once we're finished fetching and loading sounds we set loading to false
                ctrl.timeout(function(){
                                    ctrl.loadingSounds = false;
                                    console.log('loading? ' + ctrl.loadingSounds);
                                }, 3000);
                
            },function(){ console.log("Error while searching...")}
        );
 
    }
 
 // We use readSoundId to actually capture the freesound audio, storing it in the memory of our browser page
    readSoundId (id, i) {
        let ctrl = this;
        console.log('reading sound Ids...');
        
        freesound.getSound(id,
                function(sound){

                    // Here is where we convert our fetched audio file into a HowlerJS audio file
                    // This is so that we can have access to simple Howler function and edit our aduio more easily later on
                    ctrl.soundList[i].soundFile = new Howl({
                        src: [sound.previews['preview-hq-mp3']]
                    });
                    console.log('new sound ' + ctrl.soundList[i].soundFile);

                    ctrl.soundList[i].image = sound.images.waveform_m;
                    console.log('new sound img ' + ctrl.soundList[i].image);
                    

                    } 
                
        );
    }

// loadSound is called any time the user clicks on a fetched sound.
// This sends the audio file into a global variable, newSnd, which isd hooked up to our pads component
// so that we can attach the new sound where we like.
    loadSound (sound) {
        let ctrl = this;

        console.log(sound);

        // Set our global variable equal to the sound button that is clicked
        ctrl.rootScope.newSnd = sound.soundFile;
        
        console.log(ctrl.rootScope.newSnd);

        // We will also play the sound when button is clicked.
        // However if the sound is already playing we will set it to stop when clicked again
        if (ctrl.rootScope.newSnd.playing()){
            ctrl.rootScope.newSnd.stop();
        } else {
            ctrl.rootScope.newSnd.play();
        }
        
    }
 
 
 
}
 
export default searchCtrl;
