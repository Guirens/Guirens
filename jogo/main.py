import os
import random



def main():
    print("bem vindo ao jogo do spock")
    while True:
        player_choice = input(
            "escolha entre pedra, papel, spock, lagarto ou tesoura (ou 'sair' para encerrar o jogo): ").lower()
        if player_choice == 'sair':
            print("Obrigado por jogar!")
            break
        elif player_choice not in ['pedra', 'papel', 'tesoura', 'lagarto', 'spock']:
            print("Escolha inválida. Por favor, escolha entre pedra, papel, spock, lagarto ou tesoura.")
            continue

        ai_choice = random.choice(['pedra', 'papel', 'tesoura', 'spock', 'lagarto'])
        print("IA escolheu:", ai_choice)

        vencedor = determineVencedor(player_choice, ai_choice)
        if vencedor == 'jogador':
            print("Parabéns, você ganhou!")
        elif vencedor == 'ai':
            print("A IA ganhou. Tente novamente!")
        else:
            print("Empate!")


def determineVencedor(player_choice, ai_choice):

    if (player_choice == 'tesoura' and ai_choice == 'papel') or \
            (ai_choice == 'tesoura'and player_choice == 'papel' ):
        print("tesoura corta papel")
    if(player_choice == 'papel' and ai_choice == 'pedra') or \
            (ai_choice == 'papel' and player_choice == 'pedra' ):
        print("papel cobre pedra")
    if(player_choice == 'pedra' and ai_choice == 'lagarto') or \
            (ai_choice == 'pedra' and player_choice == 'lagarto'):
        print("pedra esmaga lagarto")
    if(player_choice == 'lagarto' and ai_choice == 'spock') or \
            (ai_choice == 'lagarto' and player_choice == 'spock'):
        print("lagarto envenena Spock")
    if(player_choice == 'spock' and ai_choice == 'tesoura') or \
            (ai_choice == 'spock' and player_choice == 'tesoura'):
        print("Spock esmaga tesoura")
    if(player_choice == 'tesoura' and ai_choice == 'lagarto') or \
            (ai_choice == 'tesoura' and player_choice == 'lagarto'):
        print(" tesoura decapita lagarto")
    if(player_choice == 'lagarto' and ai_choice == 'papel') or \
            (ai_choice == 'lagarto' and player_choice == 'papel'):
        print("lagarto come papel")
    if(player_choice == 'papel' and ai_choice == 'spock') or \
            (ai_choice== 'papel' and player_choice == 'spock'):
        print("papel refuta Spock")
    if(player_choice == 'spock' and ai_choice == 'pedra') or \
            (ai_choice == 'spock' and player_choice == 'pedra'):
        print("Spock vaporiza pedra")
    if(player_choice == 'pedra' and ai_choice == 'tesoura') or \
            (ai_choice == 'pedra' and player_choice == 'tesoura'):
        print("pedra quebra tesoura")

    if player_choice == ai_choice:
        return 'Empate'
    elif (player_choice == 'tesoura' and ai_choice == 'papel') or \
            (player_choice == 'papel' and ai_choice == 'pedra') or \
            (player_choice == 'pedra' and ai_choice == 'lagarto') or \
            (player_choice == 'lagarto' and ai_choice == 'spock') or \
            (player_choice == 'spock' and ai_choice == 'tesoura') or \
            (player_choice == 'tesoura' and ai_choice == 'lagarto') or \
            (player_choice == 'lagarto' and ai_choice == 'papel') or \
            (player_choice == 'papel' and ai_choice == 'spock') or \
            (player_choice == 'spock' and ai_choice == 'pedra') or \
            (player_choice == 'pedra' and ai_choice == 'tesoura'):
        return 'jogador'
    else:
        return 'ai'


if __name__ == "__main__":
    main()
