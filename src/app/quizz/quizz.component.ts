import { Component, OnInit } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
export interface Item {prenom: string; nom: string; telephone: string }

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss']
})
export class QuizzComponent implements OnInit {

  private itemCollectionRef: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  item:any;
prenom:any;
personnes:any;

cpt=0;
passer=0;
next=0;
btn=0;
btnn=0;
yes=0;
no=0;
v=0;
s=0;
point=0;

premier=true;
deuxieme=false;
troisieme=false;
quatrieme=false;
connaitre=true;

reponse1;
reponse2;
reponse3;


public repoUrl:string;





  constructor(private firestore: AngularFirestore) { 
    this.itemCollectionRef = this.firestore.collection('items');
    this.items = this.itemCollectionRef.valueChanges();

    this.itemCollectionRef.doc("{{this.prenom}}").ref.get().then((doc) => {
      this.item = doc.data();
    });
    // this.items=this.firestore.collection('quizz').valueChanges();

  }
  ngOnInit() {
    this.firestore.collection('quizz', ref => ref.orderBy("prenom").startAt(1).limitToLast(1)).valueChanges(
    ).subscribe(val=>console.log(val));
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

  ajout(){
    this.btn++;
  }

  btnnon(){
    this.btnn++;
  }

  btnyes(){
    this.yes++;
  }

btnno(){
  this.no++;
  this.point++;
}

btnvalider(){
 
}

btnsauter(){
  this.s++;
}

points(){
  this.point++;
}

valider(donnee){
  console.log(donnee);
  this.v++;
  this.personnes=donnee;
  this.firestore.collection('quizz').add(donnee);
}



getQuizz(){
  return this.firestore.collection('quizz', ref => ref.orderBy("id").startAt().limitToLast(1)).valueChanges();
}
}
