import 'dart:ffi';
import 'dart:io';
import 'dart:convert';
void main(){
  int a=0,b=0,c=0;
  print("digite numero 1:");
  a=int.parse(stdin.readLineSync().toString());
  print("digite numero 2:");
  b=int.parse(stdin.readLineSync().toString());
  print("digite numero 3:");
  c=int.parse(stdin.readLineSync().toString());

  if(a<b && a<c){
    print(a);
    if(b<c){
      print(b);
      print(c);
    }else{
      print(c);
      print(b);
    }
  }
  if(c<a && b<c){
      if(b<c){
      print(b);
      print(c);
    }else{
      print(c);
      print(b);
    }
  }
}