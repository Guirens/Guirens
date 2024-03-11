import 'dart:ffi';
import 'dart:io';
import 'dart:convert';
void main(){
  int a=0;
  print("digite o numero");
  a=int.parse(stdin.readLineSync().toString());
  if(a%2==0){
    print(a);
    print("é par.");
  }else{
    print(a);
    print("impar");
  }
  if(a>0){
    print(a);
    print("positivo");
  }else{
    print(a);
    print("negativo");
  }

}