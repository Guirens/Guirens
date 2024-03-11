import 'dart:ffi';
import 'dart:io';
import 'dart:convert';
void main(){
  double imc=0,p=0,a=0;
  print("digite seu peso");
  p=double.parse(stdin.readLineSync().toString());
  print("digite altura:");
  a=double.parse(stdin.readLineSync().toString());
  imc=p/(a*a);
  if(imc<=18.5){
    print("engorde");
  }
  if(imc>18.5 && imc<=24.9){
    print("parabens");
  }
  if(imc>25.0 && imc<=29.9){
    print("levemente gordo");
  }
  if(imc>30.0 && imc<=34.9){
    print("gordo v1");
  }
    if(imc>35.0 && imc<=39.9){
    print("gordo v2");
  }
  if(imc>40){
    print("thais carla se orgulha de você");
  }
}