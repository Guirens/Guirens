import 'dart:ffi';
import 'dart:io';
import 'dart:convert';

void main(){
  double b=0;
  print("digite o salario");
  b=double.parse(stdin.readLineSync().toString());
  print("o reajuste 5% é: ${b+(5*b/100)}");
  print("o reajuste 5% é: ${b*1.05}");
}