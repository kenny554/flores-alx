// Obtener el elemento de audio y el contenedor de letras
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData  = [
//   { text: "Como tú vida mía", time: 19},
//   { text: "Yo no encuentro en la tierra otra mujer", time: 20 },
//   { text: "La he buscado en Namibia, en los Alpes", time: 23},
//   { text: "Y en los Champs-Elysées", time: 26.5 },
//   { text: "He cruzado los mares", time: 20 },
//   { text: "Y de paso subí en la torre Eiffel", time: 24 },
//   { text: "Caminé por Manhattan", time: 29 },
//   { text: "Y llegué al Empire State", time: 33 },
//   { text: "No nono-no como tú no hay en ésta vida", time: 39 },
//   { text: "(Como tú no hay ninguna)", time: 45 },
//   { text: "Como tú no hay quien me comprenda", time: 49 },
//   { text: "(Como tú me comprendes)", time: 53 },
//   { text: "Como tú no hay quien me acaricie", time: 56 },
//   { text: "(Como tú me acaricias)", time: 60 },
//   { text: "Ni en la China ni en la Siberia", time: 64 },
//   { text: "(Como tú no hay ninguna)", time: 68 },

//   { text: "Vana mi travesía (oh, no)", time: 72 },
//   { text: "Al buscar otro amor igual que tú (yeah, yeah)", time: 76 },
//   { text: "No lo hallé en Barcelona, (oh, no)", time: 81 },
//   { text: "En Los Angeles ni en Kuala Lumpur (yeah, yeah)", time: 85 },
//   { text: "Recorrí Bariloche (oh, no)", time: 90 },
//   { text: "Y no pude encontrarlo en el Big Ben (yeh, yeh)", time: 94 },
//   { text: "Y de paso por Tokyo", time: 99 },
//   { text: "Yo viajé en el Shinkansen", time: 102 },
//   { text: "No nono-no como tú no hay en ésta vida", time: 107 },
//   { text: "(Como tú no hay ninguna)", time: 113 },
//   { text: "Como tú no hay quien me comprenda", time: 117 },
//   { text: "(Como tú me comprendes)", time: 121 },
//   { text: "Como tú no hay quien me acaricie", time: 124 },
//   { text: "(Como tú me acaricias)", time: 128 },
//   { text: "Ni en la China ni en la Siberia", time: 132 },
//   { text: "(Como tú no hay ninguna)", time: 136 },

//   { text: "Ojooye", time: 140 },
//   { text: "Es que un amor como el tuyo", time: 143 },
//   { text: "Es para siempre", time: 146 },
//   { text: "Vuela sobre manantiales", time: 150 },
//   { text: "Y continentes (te digo yo que sí)", time: 153 },
//   { text: "Riza las nubes del cielo", time: 158 },
//   { text: "Besa las olas del alba", time: 161 },
//   { text: "Gime con la madrugada", time: 164 },
//   { text: "Ama sin pedirme nada", time: 167 },
//   { text: "Que tú me gustas", time: 170 },
//   { text: "(Como tú no hay ninguna)", time: 174 },
//   { text: "Como tú no hay quien me comprenda", time: 178 },
//   { text: "(Como tú me comprendes)", time: 182 },
//   { text: "Como tú no hay quien me acaricie", time: 185 },
//   { text: "(Como tú me acaricias)", time: 189 },
//   { text: "Ni en la China ni en la Siberia", time: 193 },
//   { text: "(Como tú, nadie como tú, como tú)", time: 197 },

//   { text: "Como tú no hay en ésta vida", time: 201 },
//   { text: "(Como tú no hay ninguna)", time: 205 },
//   { text: "Pero que como tú no hay quien me comprenda", time: 209 },
//   { text: "(Como tú me comprendes)", time: 213 },
//   { text: "Y como tú no hay quien me acaricie", time: 216 },
//   { text: "(Como tú me acaricias)", time: 220 },
//   { text: "Ni en la China ni en la Siberia", time: 224 },
//   { text: "(Como tú)", time: 228 },

//   { text: "Como tú no hay en ésta vida, yeh", time: 232 },
//   { text: "Como tú no hay quien me comprenda", time: 235 },
//   { text: "(Como tú me comprendes)", time: 238 },
//   { text: "Y como tú no hay quien me acaricie (ye, ye, ye, ye)", time: 241 },
//   { text: "(Como tú me acaricias)", time: 245 },
//   { text: "Ni en la China ni en la Siberia", time: 248 },
//   { text: "(Como tú, nadie como tú, como tú)", time: 252 },

//   { text: "Como tú no hay quien me comprenda", time: 256 },
//   { text: "(Como tú me comprendes)", time: 260 },
//   { text: "Y como tú no hay quien me acaricie", time: 264 },
//   { text: "(Como tú me acaricias)", time: 268 },
//   { text: "Como tú no hay en ésta vida", time: 272 },
//   { text: "(Como tú, nadie como tú, como tú)", time: 276 }
// ];


// Animar las letras
function updateLyrics() {
  var currentTime = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(line => currentTime >= line.time && currentTime < line.time + 5); // Ajusta el tiempo de duración de la línea si es necesario

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (currentTime - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}


// Llamar a la función updateLyrics cada segundo
//setInterval(updateLyrics, 1000);
]
