// TUGAS KEDUA
let pertama = prompt("isi angka awal \nContoh : 3");
let kedua = prompt("isi angka awal \nContoh : 10");

let output = "";

for (let i = pertama; i <= kedua; i++) {
  if (i % 2 === 0) {
    output += "x ";
  } else {
    output += i + " ";
  }
}
alert(output);
console.log(output);
