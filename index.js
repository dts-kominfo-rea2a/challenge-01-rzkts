// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

/* firstUser Property */
const firstUserColor = ["Yellow", "Pink", "White", "Purple"];
const firstUserEducation = [
  { name: "SD 01", city: "Jakarta", graduate: "2016" },
  { name: "SMP 02", city: "Jakarta", graduate: "2019" },
  { name: "SMA 03", city: "Tangerang" },
];
const firstUserFavResto = [
  "Bento",
  "Sushi",
  "Pancake",
  "Eggy",
  "Tempura",
  "Bento",
  "Eggy",
  "Padang",
  "Tteok",
  "Sushi",
  "Sushi",
];
/* End firstUser Property */

/* secondUser Property */
const secondUserColor = ["Blue", "Black", "Grey"];
const secondUserEducation = [
  { name: "SD 02", city: "Jakarta", graduate: "2010" },
  { name: " SMP 03", city: "Bogor", graduate: "2013" },
  { name: "SMA 01", city: "Surabaya", graduate: "2016" },
  { name: "Universitas Maju", city: "Tangerang" },
];
const secondUserFavResto = [
  "Tempura",
  "Bento",
  "Sushi",
  "Pancake",
  "Padang",
  "Katsu",
  "Geprek",
  "Pancake",
  "Eggy",
];
/* End secondUser Property */

/* firstUser Data */
const firstUser = {
  nama: "Monica",
  gender: "Female",
  age: 17,
  email: "monica@dingdong.com",
  favoriteColor: firstUserColor,
  isHavePet: "Yes",
  education: firstUserEducation,
  favoriteRestaurant: firstUserFavResto,
};

/* secondUser Data */
const secondUser = {
  nama: "Wendy",
  gender: "Male",
  age: 23,
  email: "wendy@dingdong.com",
  favoriteColor: secondUserColor,
  isHavePet: "No",
  education: secondUserEducation,
  favoriteRestaurant: secondUserFavResto,
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
