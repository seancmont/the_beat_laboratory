import displayComponent from './display.component';

let displayModule = angular.module('display', [])
.component('display', displayComponent);

var wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: 'violet',
    progressColor: 'purple'
});

export default displayModule;