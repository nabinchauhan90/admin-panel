import { Injectable } from '@angular/core';
import { Archive } from '../data/archives';
import { HttpClient } from '@angular/common/http';
import { RecurseVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { ArrayType } from '@angular/compiler';
import { group } from '@angular/animations';
import { from, of, zip, concat } from 'rxjs';
import {map, groupBy, mergeMap, toArray } from 'rxjs/operators';


@Injectable()
export class ArchivesService {
  constructor(private http:HttpClient) { }
  data:Archive[]=[];  
  getData(){
    return this.data;   
  } 
  // getMessages(){
  //  return this.http.get('https://weedon-f87f4.firebaseio.com/chat_1.json').pipe(map(recivedData=>{
  //   let arrayT=[]; 
  //  for (const key in recivedData) {
  //     if (recivedData.hasOwnProperty(key)) {
  //       arrayT.push({...recivedData[key],id:key});
  //     }
  //   }
  getMessages(){
    return this.http.get('https://weedon-f87f4.firebaseio.com/chat_1.json').pipe(map(
      recivedData=>{
        let arrayT=[];
        let arrayT3=[]; 
        console.log(recivedData);
        for (const key in recivedData) {
          if (recivedData.hasOwnProperty(key)) {
            arrayT.push({...recivedData[key],id:key});
          }
        }   
        console.log(arrayT);
        for (let index = 0; index <1; index++) {
          for (const key in arrayT[index]) {
            if (arrayT[index].hasOwnProperty(key)
            ) {
              arrayT3.push({...arrayT[index][key],id:arrayT[index].id})
            }
          }
        }
        console.log(arrayT3);
        // from(arrayT3).pipe(
        //   groupBy(
        //     message=>message.from
        //   ),
        //   mergeMap(group=>zip(of(group.key),group.pipe(toArray())))
        // ).subscribe(recived=>{
        //   console.log(recived);
        // })
        //const arrayT4=[].concat.apply([],arrayT3);
        // const arrayT4 = [].concat(...arrayT3);
        // console.log(arrayT4);
        return arrayT3;
      }
    ))
  }
}