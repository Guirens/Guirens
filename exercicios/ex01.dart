import 'dart:ffi';
import 'dart:io';
import 'dart:convert';
void main(){
    int a=0,b=0,c=0;
    print("digite 1º numero intero:");
    a=int.parse(stdin.readLineSync().toString());
    print("digite 2º intero:");
    b=int.parse(stdin.readLineSync().toString());
    print("digite o valor de um numero intero qualquer");
    c=int.parse(stdin.readLineSync().toString());
    if((a+b)>c){
        print(a+b);
        print("soma e maior que");
        print(c);
    }
    if((a+b)==c){
        print(c);
        print("tem o mesmo valor");
    }
    if((a+b)<c){
        print(c);
        print("o numero e maior que a soma:");
        print(a+b);
    }
}