            //Genera un número aleatorio entre un rango de números (minimo y máximo)
            function aleatorio(min, max) {
                return Math.floor(Math.random()*(max-min+1)+min)
            }

            // Genera el resultado del combate de acuerdo a las elecciones
            function combate(jugador1, jugador2) {
                let resultadoJuego
                if (jugador1 == jugador2) {
                    resultadoJuego = "Empate ⏭"
                } else if ((jugador1 == 1 && jugador2 == 3) || (jugador1 == 2 && jugador2 == 1) || (jugador1 == 3 && jugador2 == 2)) {
                    resultadoJuego = "Ganaste 🎇"
                    combates_ganados++
                } else {
                    resultadoJuego = "Perdiste ⚰💀"
                    combates_perdidos++
                }
                return resultadoJuego
            }

            // Retorna la elección de cada jugador
            function mensageEleccion(jugador) {
                let eleccion
                if (jugador == 1) {
                    eleccion = "Piedra ✊"
                } else if(jugador == 2) {
                    eleccion ="Papel ✋"
                } else if(jugador == 3){
                    eleccion = "Tijera ✌"
                } else {
                    eleccion = "MUY MAL 📢❌❌"
                }
                return eleccion
            } 

            // Da inicio al juego y levanta la infomración de los jugadores
            function iniciaJuego(jugador1, jugador2) {
                let mensageJugador, mensagePc
                jugador1 = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera")
                jugador2 = aleatorio(numMin, numMax)
                mensageJugador = "Elegiste " + mensageEleccion(jugador1)
                mensagePc = "El PC Eligió " + mensageEleccion(jugador2)
                alert(mensageJugador)
                alert(mensagePc)
                alert(combate(jugador1, jugador2) + ". Has ganado "+ combates_ganados + ", el PC ha ganado " + combates_perdidos + " combates.")
                
            }

            // 1 es piedra, 2 es pale, 3 es tijera
            let numMin = 1
            let numMax = 3
            
            let jugador = 0
            let pc = 0
            let combates_ganados = 0
            let combates_perdidos = 0


            // Juego
            while (combates_ganados < 3 && combates_perdidos < 3) {
                iniciaJuego(jugador, pc)
            }
            if (combates_ganados == 3) {
                alert("Ganaste la partida 🎉🎉")
            } else if (combates_perdidos == 3) {
                alert("Perdiste la partida 😢🤦‍♀️🤦‍♂️")
            }