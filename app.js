"use strict"

const paragrafo = document.getElementById('code')
const containerStacks = document.getElementById('container-stacks')

function digitacao(codigo, qtd) {

    if (qtd < codigo.length) {
        
        setTimeout( () => {

            // Pega cada letra e coloca dentro do parágrafo
            paragrafo.textContent += codigo.charAt(qtd)
            qtd++
            digitacao(codigo, qtd)
            
        }, 10)
        
    }

    if (qtd == codigo.length) {
        containerStacks.classList.add("active")
    }
}

const textCode = `

import javax.swing;
import src.main.java.com.gabriel.portfolio;

public static void Main(String[], args) {
⠀⠀⠀Portfolio portfolio = new Portfolio();
⠀⠀⠀System.out.println(portfolio.getDadosPortfolioStacks());
}; 

F5!

`

digitacao(textCode, 0)