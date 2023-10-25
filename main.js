function calcRank (wins, defeats) {
    let rating = wins - defeats
    
    if (rating <= 10)
        ranking = "Iron"
    else if (rating >= 11 && rating <= 20)
        ranking = "Bronze"
    else if (rating >= 21 && rating <= 50)
        ranking = "Silver"
    else if (rating >= 51 && rating <= 80)
        ranking = "Gold"
    else if (rating >= 81 && rating <= 90)
        ranking = "Diamond"
    else if (rating >= 91 && rating <= 100)
        ranking = "Legendary"
    else if (rating >= 101)
        ranking = "Imortal"  
    console.log(`O Herói tem de saldo de ${rating} vitórias está no nível de ${ranking}`)
}

calcRank(150,10)