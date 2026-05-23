export type FloatingType='bubbles'|'particles'|'aurora'|'fireflies';
export interface Environment { id:string; name:string; image:string; sound:string; premium?:boolean }
export const environments: Environment[] = [
{id:'dawn',name:'Dawn Mist',image:'assets/images/dawn-mist.jpg',sound:'assets/sounds/rain-soft.mp3'},
{id:'night',name:'Midnight Lake',image:'assets/images/midnight-lake.jpg',sound:'assets/sounds/lake-night.mp3'},
{id:'forest',name:'Forest Wind',image:'assets/images/forest-wind.jpg',sound:'assets/sounds/forest-wind.mp3'}
];
export const floatingPresets = { bubbles:{count:[10,40]}, particles:{count:[20,80]}, aurora:{count:[2,8]}, fireflies:{count:[8,30], premium:true} };
export const ambientSounds=[
{id:'rain',name:'Rain',file:'assets/sounds/rain-soft.mp3'},
{id:'waves',name:'Waves',file:'assets/sounds/ocean-waves.mp3'},
{id:'brown',name:'Brown Noise',file:'assets/sounds/brown-noise.mp3'},
{id:'alpha10',name:'Binaural Alpha 10Hz',file:'assets/sounds/binaural-alpha.mp3',premium:true},
{id:'theta6',name:'Binaural Theta 6Hz',file:'assets/sounds/binaural-theta.mp3',premium:true},
{id:'delta2',name:'Binaural Delta 2Hz',file:'assets/sounds/binaural-delta.mp3',premium:true}
] as const;
