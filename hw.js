// deklarasi 
let ganjil = [];
let genap = [];

// Buat Array dengan jumlah index 100 
const angka = [
    13, 40, 16, 33, 27, 49, 25, 24, 39,  4, 34, 37,
    13, 45,  3, 17,  7, 24,  7, 50, 20, 21, 43,  7,
    25, 48,  4, 42, 20, 37, 19, 23, 49, 36, 48, 23,
    15, 28, 48, 33, 37, 42, 25, 10,  5, 35, 41, 42,
    27, 34, 23,  8, 16, 24, 35, 45, 28, 10, 17, 42,
    10, 14,  2, 30,  8, 24, 28, 29,  1, 18, 39, 39,
    14,  6, 46, 13,  5, 17, 13, 43,  5, 17, 19,  1,
     3,  6, 43, 16, 42,  1, 19, 30,  5, 15, 41, 16,
     8, 32,  6, 26
    ];

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
        console.log(sub + " Lebih Besar Array Ganjil");
    }else if (ganjil < genap){
        console.log(sub + " Lebih besar Array Genap");
    }else{
        console.log(sub + " Memiliki Nilai Yang Sama Antara Array Ganjil dan Genap");
    }
}
// implementasi 
ganjilGenap(angka);

let minganjil = min(ganjil);
let mingenap = min(genap);
console.log("MIN array index ganjil = " +minganjil);
console.log("MIN array index genap = " +mingenap);
banding("MIN",minganjil,mingenap);

let maxganjil = max(ganjil);
let maxgenap = max(genap);
console.log("MAX array index ganjil = "+maxganjil);
console.log("MAX array index genap = "+maxgenap);
banding("MAX",maxganjil,maxgenap);


let totalganjil = total(ganjil);
let totalgenap = total(genap);
console.log("Total array index ganjil = "+totalganjil);
console.log("Total array index genap = "+totalgenap);
banding("Total",totalganjil,totalgenap);


let rataganjil = rataRata(ganjil);
let ratagenap = rataRata(genap);
console.log("Rata - Rata array index ganjil = "+rataganjil);
console.log("Rata - Rata array index genap = "+ratagenap);
banding("Rata - Rata",rataganjil,ratagenap);



