window.onload = function(){
  
  document.querySelector('.touch-move-scroll-blocker').addEventListener('touchmove', function(event) {                                                                                                                                                                                                                
      event.preventDefault();                                                                                                                                                                                                                                           
  }, false); 

  var audioContext = new webkitAudioContext();
  audioContext.sampleRate = 44100;

  var synth = new Synth(audioContext);

  var oscShapeSlider = document.querySelector('#osc-shape');
  synth.oscillator.type = parseInt(oscShapeSlider.value);
  oscShapeSlider.onchange = function(event){
    synth.oscillator.type = parseInt(event.target.value);
  }

  var lpfCutoffSlider = document.querySelector('#lpf-freq');
  synth.setFilterFrequency(lpfCutoffSlider.value);
  lpfCutoffSlider.onchange = function(event){
    synth.setFilterFrequency(event.target.value);
  }

  var lpfResonanceSlider = document.querySelector('#lpf-res');
  synth.setFilterResonance(lpfResonanceSlider.value);
  lpfResonanceSlider.onchange = function(event){
    synth.setFilterResonance(event.target.value);
  }

  var attackSlider = document.querySelector('#env-attack');
  synth.envelope[0] = attackSlider.value;
  attackSlider.onchange = function(event){
    synth.envelope[0] = event.target.value;
  }

  var decaySlider = document.querySelector('#env-decay');
  synth.envelope[1] = decaySlider.value;
  decaySlider.onchange = function(event){
    synth.envelope[1] = event.target.value;
  }

  var sustainSlider = document.querySelector('#env-sustain');
  synth.envelope[2] = sustainSlider.value;
  sustainSlider.onchange = function(event){
    synth.envelope[2] = event.target.value;
  }

  var releaseSlider = document.querySelector('#env-release');
  synth.envelope[3] = releaseSlider.value;
  releaseSlider.onchange = function(event){
    synth.envelope[3] = event.target.value;
  }

  var lfoShapeSlider = document.querySelector('#lfo-shape');
  synth.lfo.type = parseInt(lfoShapeSlider.value); 
  lfoShapeSlider.onchange = function(event){
    synth.lfo.type = parseInt(event.target.value); 
  }

  var lfoRateSlider = document.querySelector('#lfo-rate');
  synth.lfo.frequency.value = lfoRateSlider.value * 40;
  lfoRateSlider.onchange = function(event){
    synth.lfo.frequency.value = event.target.value * 40;
  }

  var oscLFOSlider = document.querySelector('#osc-lfo');
  synth.oscLFOGain.gain.value = oscLFOSlider.value  * -1200;
  oscLFOSlider.onchange = function(event){
    synth.oscLFOGain.gain.value = event.target.value  * -1200;
  }

  var noteOnCallback = function(note){
    
    synth.noteOn(note);

  };

  var noteSlideCallback = function(note){

    synth.noteSlide(note);

  };

  var noteOffCallback = function(){

    synth.noteOff();

  };

  var keyboard = 
  new Keyboard(
    audioContext,
    noteOnCallback,
    noteSlideCallback,
    noteOffCallback      
  );  
}
