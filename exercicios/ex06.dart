import 'dart:ffi';
import 'dart:io';
import 'dart:convert';
void main(){
  bool a=true, b=true;
  print("digite true(verdadeiro) ou false(falso)");
  a= bool.parse(stdin.readLineSync().toString());
  print("digite true(verdadeiro) ou false(falso)");
  b=bool.parse(stdin.readLineSync().toString());
  if(a==true && b==true){
    print("verdadeiro");
  }
  if(a!=true && b!=true){
    print("não verdadeiro");
  }
  if (a!=b){
    print("discordancia");
  }
}