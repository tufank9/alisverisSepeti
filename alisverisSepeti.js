let album = ["Future Nostaliga", "Recovery", "Back in Black", "Hal Hal", "Happier Than Ever", "Tuz Buz"];
let fiyat = [20, 15, 30, 10, 25];
let sonuc = 0;
let sepet = [];

for (let i = 0; i < album.length; i++){
    if (album[i] == "Future Nostaliga" || album[i] == "Back in Black" || album[i] == "Hal Hal"){
        sepet.push(album[i]);
        sonuc += fiyat[i];
    }
}