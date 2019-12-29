import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

cpt=0;
next=0;
passer=0;
premier=true;
deuxieme=false;
troisieme=false;
quatrieme=false;
connaitre=true;

reponse1;
reponse2;
reponse3;

  constructor() { 
   
  }
  ngOnInit() {
  
  } 

  
  users= new FormGroup({
    prenom: new FormControl('',Validators.required),
    nom: new FormControl('',Validators.required),
    telephone: new FormControl('',Validators.required),
  })



  score(number){
    if(number==1){
      this.cpt++;
    }
    this.passer++;
   
  }

  pf(number,valeur){
    if(number==1){
      this.cpt++;
    }

    this.reponse1=valeur;
    this.reponse2=valeur;
    this.reponse3=valeur;

    this.premier=false;
    this.deuxieme=true;



  }

  df(number,valeur){
    if(number==1){
      this.cpt++;
      
    }

    this.reponse1=valeur;
    this.reponse2=valeur;
    this.reponse3=valeur;

    this.deuxieme=false;
    this.troisieme=true;

  }

tf(number,valeur){
  if(number==1){
    this.cpt++;
  }

  this.reponse1=valeur;
    this.reponse2=valeur;
    this.reponse3=valeur;

  this.troisieme=false;
  this.quatrieme=true;

}

qf(number,valeur){
  if(number==1){
    this.cpt++;
  }

  this.reponse1=valeur;
    this.reponse2=valeur;
    this.reponse3=valeur;

this.passer++;
this.quatrieme=false;
this.connaitre=false

}

clique(){
  this.next++;
}

scrollToElement($element): void {
  console.log($element);
  $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}
}
