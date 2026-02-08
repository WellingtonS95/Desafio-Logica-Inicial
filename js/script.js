// Função para classificar o herói
const herois = ["Jackie Chan", "Robocop", "Batman", "Wolverine", "Homem-Aranha", "Naruto", "Saitama", "Supermam"];
const xp = [1500, 2500, 4500, 7200, 9500, 13500, 19500, 59500];

const nomeDigitado = prompt("Digite o nome de um Herói!");
const index = herois.indexOf(nomeDigitado);

if (index !== -1) {
    let nivel = "";
    let pontos = xp[index];

    // Correção: Atribuindo o valor à variável 'nivel' e usando strings ""
    if (pontos <= 1000) nivel = "Ferro";
    else if (pontos <= 2000) nivel = "Bronze";
    else if (pontos <= 5000) nivel = "Prata";
    else if (pontos <= 7000) nivel = "Ouro";
    else if (pontos <= 8000) nivel = "Platina"; // Ajustado para não repetir o 9000
    else if (pontos <= 9000) nivel = "Ascendente";
    else if (pontos <= 10000) nivel = "Imortal"; // Adicionado um limite para o Imortal
    else nivel = "Radiante";

    // Correção: Usando Template Strings (com crases ` `) para as variáveis funcionarem
    alert(`O herói ${nomeDigitado} tem ${pontos} pontos de experiência e é classificado como ${nivel}!`);
} else {
    alert("Herói não encontrado!");
}
