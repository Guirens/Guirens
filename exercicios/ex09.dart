import 'dart:ffi';
import 'dart:io';
import 'dart:convert';
void main(){
  double a=0,b=0,c=0;

  print("digite nota 1");
  a=double.parse(stdin.readLineSync().toString());
  print("digite nota 2");
  b=double.parse(stdin.readLineSync().toString());
  print("digite nota 3");
  c=double.parse(stdin.readLineSync().toString());
  print("media:${(a+b+c)/3}");
}