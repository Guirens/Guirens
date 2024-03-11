import 'dart:ffi';
import 'dart:io';
import 'dart:convert';
void main(){
  int a=0;
  print("digite numero:");
  a=int.parse(stdin.readLineSync().toString());
  print("sucessor:${a+1}");
  print("antecessor:${a-1}");
}