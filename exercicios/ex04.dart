import 'dart:ffi';
import 'dart:io';
import 'dart:convert';
void main(){
  double a=1412;
  double b=0;
  print("digite o salario");
  b=double.parse(stdin.readLineSync().toString());
  print("resultado: ${b/a}");
}