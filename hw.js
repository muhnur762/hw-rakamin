// deklarasi 
let ganjil = [];
let genap = [];

// Buat Array dengan jumlah index 100 
const angka = [];
for (let i = 0; i < 100; i++) {
    let randomNumber = Math.floor(Math.random() * 50) + 1;
    angka.push(randomNumber);
  }
console.log(angka);
  

// pecah menjadi 2 array bedasarkan index ganjil dan genap 
function ganjilGenap (dataAngka){
// looping mendapatkan index array
for (let i = 0 ; i < dataAngka.length; i++){
    // mengeccek apakah index ke i modulus 2 sama dengan 0
    if (i % 2 == 0 ){
        genap.push(dataAngka[i]);
    }else{
        ganjil.push(dataAngka[i]);
    }
}

console.log("Angka dengan index Genap")
console.log(genap);
console.log("Angka dengan index Ganjil")
console.log(ganjil);
}

// Menentukan Nilai min 
function min (data){
    // deklarasi 
    let min = data[0];

    // looping untuk mencari minimum 
    for (let i = 1; i < data.length; i++){
        if(data[i] < min){
            min = data[i];
        }
    }
    return min;
}

// Menentukan Nilai max 
function max (data){
    // deklarasi 
    let max = data[0];

    // looping untuk mencari maksimum 
    for (let i = 1; i < data.length; i++){
        if(data[i] > max){
            max = data[i];
        }
    }
    return max;
}

// menentukan nilai Total 
function total (data){
    // deklarasi
    let total = 0;
    for(let i = 0; i < data.length; i++){
        total += data[i];
    }
 
    return total;
}

// menentukan nilai rata rata
function rataRata (data){
    // deklarasi
    let total = 0;
    let ratarata = 0;

    for(let i = 0; i < data.length; i++){
        total += data[i];
    }
    ratarata = total/data.length;
    return ratarata;
}

// membuat function perbandingan nilai
function banding (sub, ganjil, genap){
if (ganjil > genap){
        console.log(sub, " Lebih Besar Array Ganjil");
    }else if (ganjil < genap){
        console.log(sub, " Lebih besar Array Genap");
    }else{
        console.log(sub, " Memiliki Nilai Yang Sama Antara Array Ganjil dan Genap");
    }
}
// implementasi 
ganjilGenap(angka);

let minganjil = min(ganjil);
let mingenap = min(genap);
console.log("MIN array index ganjil = " ,minganjil);
console.log("MIN array index genap = " ,mingenap);
banding("MIN",minganjil,mingenap, '\n');

let maxganjil = max(ganjil);
let maxgenap = max(genap);
console.log("MAX array index ganjil = ",maxganjil);
console.log("MAX array index genap = ",maxgenap);
banding("MAX",maxganjil,maxgenap, '\n');


let totalganjil = total(ganjil);
let totalgenap = total(genap);
console.log("Total array index ganjil = ",totalganjil);
console.log("Total array index genap = ",totalgenap);
banding("Total",totalganjil,totalgenap, '\n');


let rataganjil = rataRata(ganjil);
let ratagenap = rataRata(genap);
console.log("Rata - Rata array index ganjil = ",rataganjil);
console.log("Rata - Rata array index genap = ",ratagenap);
banding("Rata - Rata",rataganjil,ratagenap, '\n');



