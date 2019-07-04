import { Component } from '@angular/core';
declare var Tone: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],





})
export class HomePage {
    play = "hand-right play-1";
    noplay = "hand-right";
    condition1 = false;
    condition2 = false;
    condition3 = false;
    condition4 = false;
    condition5 = false;
    condition6 = false;
    condition7 = false;
    condition8 = false;
    

  sounds = {
    sound1: new Tone.Player("./wav/G_1_S_1.wav").toMaster(),
    sound2: new Tone.Player("./wav/G_1_S_2.wav").toMaster(),
    sound3: new Tone.Player("./wav/G_1_S_3.wav").toMaster(),
    sound4: new Tone.Player("./wav/G_1_S_4.wav").toMaster(),
    sound5: new Tone.Player("./wav/G_1_S_5.wav").toMaster(),
    sound6: new Tone.Player("./wav/G_1_S_6.wav").toMaster(),
    sound7: new Tone.Player("./wav/G_1_S_7.wav").toMaster(),
    sound8: new Tone.Player("./wav/G_1_S_8.wav").toMaster()
  }
  

    G_1_S_1() { 
      this.condition1 = true;
      Tone.context.resume().then(() => { this.sounds.sound1.start() }) }
    G_1_S_2() { 
      this.condition1 = true;
      Tone.context.resume().then(() => { this.sounds.sound2.start() }) }
    G_1_S_3() { 
      this.condition1 = true;
      Tone.context.resume().then(() => { this.sounds.sound3.start() }) }
    G_1_S_4() { 
      this.condition1 = true;
      Tone.context.resume().then(() => { this.sounds.sound4.start() }) }
    G_1_S_5() { 
      this.condition1 = true;
      Tone.context.resume().then(() => { this.sounds.sound5.start() }) }
    G_1_S_6() { 
      this.condition1 = true;
      Tone.context.resume().then(() => { this.sounds.sound6.start() }) }
    G_1_S_7() { 
      this.condition1 = true;
      Tone.context.resume().then(() => { this.sounds.sound7.start() }) }
    G_1_S_8() { 
      this.condition1 = true;
      Tone.context.resume().then(() => { this.sounds.sound8.start() }) }
  
      end1(){
      this.condition1 = false;
      }



    constructor() {}
}


