import 'dart:ffi';
import 'dart:io';
import 'dart:convert';
void main(){
  String nome;
  double a=0,b=0,c=0,n=0,f=0;
  print('Digite o nome do aluno: ');
  nome = stdin.readLineSync()!;
  print("digite nota 1");
  a=double.parse(stdin.readLineSync().toString());
  print("digite nota 2");
  b=double.parse(stdin.readLineSync().toString());
  print("digite nota 3");
  c=double.parse(stdin.readLineSync().toString());
  print("digite nota 4");
  n=double.parse(stdin.readLineSync().toString());
  f=(a+b+c+n)/4;
  print("media:${f}");
  if(f>=7){
    print("${nome}foi: aprovado");
  }else{
    print("ai e foda gordox");
  }
}