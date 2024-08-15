//define variabel gender, usia, berat dan tinggi
const gender = document.getElementsByName("gender");
const usia = document.getElementById("usia");
const berat = document.getElementById("berat");
const tinggi = document.getElementById("tinggi");

//define variable untuk validasi usia, berat dan tinggi
const usiaNull = document.getElementById('usiaNull');
const usiaRange = document.getElementById('usiaRange');
const beratNull = document.getElementById('beratNull');
const beratRange = document.getElementById('beratRange');
const tinggiNull = document.getElementById('tinggiNull');
const tinggiRange = document.getElementById('tinggiRange');

//define variable jawaban dari form
const answer = document.getElementsByName("answer");

//define variabel hasil dari kalkulasi bmi
const bmiResult = document.getElementById("bmi-result");

//define variabel kategori dan deskripsi bmi
const kategoriBMI = document.getElementById("kategori-bmi");
const deskripsiBMI = document.getElementById("deskripsi-bmi");
const deskripsiArray = [
  'Makan makanan bergizi, konsumsi protein lebih banyak dan olahraga secara teratur agar mencapai berat badan ideal',
  'Pertahankan pola makan saat ini dan lakukan aktivitas fisik 3 kali dalam seminggu agar tubuh tetap dalam kondisi optimal',
  'Jaga pola makan dengan mengurangi makanan tinggi gula ataupun lemak, serta tingkatan aktivitas dan olahraga secara teratur'
]

//define variabel untuk informasi tambahan dan arrownya
const arrowClass = document.getElementsByClassName('arrow');
const question = document.getElementsByClassName('info-question');

//fungsi submit form
function submitForm(event) {
  event.preventDefault();

  //algoritma untuk mendapatkan gender yang di input
  let selectedGender;
  for (let i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selectedGender = gender[i].value;
      break;
    }
  }
  //lakukan validasi sebelum kalkulasi
  if (validated(usia.value, berat.value, tinggi.value)) {
    const tinggiMeter = tinggi.value / 100;
    const bmi = parseFloat(berat.value / tinggiMeter ** 2).toFixed(1);

    //memberikan isi data yang di input kedalam field yang telah ditentukan
    answer[0].innerHTML = selectedGender;
    answer[1].innerHTML = usia.value;
    answer[2].innerHTML = berat.value;
    answer[3].innerHTML = tinggi.value;

    //memberikan hasil kalkulasi kedalam field yang telah ditentukan
    bmiResult.innerHTML = bmi;
    kategoriBMI.innerHTML = kategori(bmi);
    deskripsiBMI.innerHTML = deskripsi(bmi);
  };
}

// validasi usia, berat dan tinggi
function validated(age, weight, height) { 
  //return default jika validasi berhasil
  let condition = true;
  
  //age validation
  switch (true) {
    case (age == ''):
      //display error ketika terjadi error
      usiaNull.style.display = 'block';

      //sembunyikan error yang lain ketika error ini terjadi
      usiaRange.style.display = 'none';

      // return menjadi false karena terjadi error
      condition = false;
      break;
    case (age < 2 || age > 120):
      usiaNull.style.display = 'none';
      usiaRange.style.display = 'block';
      condition = false;
      break;
    default:
      usiaNull.style.display = 'none';
      usiaRange.style.display = 'none';
      break;
  }
  //weight validation
  switch (true) {
    case (weight == ''):
      beratNull.style.display = 'block';
      beratRange.style.display = 'none';
      condition = false;
      break;
    case (weight < 3 || weight > 600):
      beratNull.style.display = 'none';
      beratRange.style.display = 'block';
      condition = false;
      break;
    default:
      beratNull.style.display = 'none';
      beratRange.style.display = 'none';
      break;
  }
  //height validation
  switch (true) {
    case (height == ''):
      tinggiNull.style.display = 'block';
      tinggiRange.style.display = 'none';
      condition = false;
      break;
    case (height < 40 || height > 300):
      tinggiNull.style.display = 'none';
      tinggiRange.style.display = 'block';
      condition = false;
      break;
    default:
      tinggiNull.style.display = 'none';
      tinggiRange.style.display = 'none';
      break;
  }
  return condition;
}

// fungsi untuk mengkategorikan bmi
function kategori(bmi) {
  if (bmi < 18.5) {
    kategoriBMI.style.color = 'blue';
    return "Kekurangan berat badan";
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    kategoriBMI.style.color = 'green';
    return "Berat ideal";
  }
  if (bmi >= 25 && bmi <= 29.9) {
    kategoriBMI.style.color = 'orange';
    return "Kelebihan berat badan";
  }
  if (bmi >= 30) {
    kategoriBMI.style.color = 'red';
    return "Obesitas";
  }
}

// fungsi untuk memberikan deskripsi yang sesuai terhadap hasil kalkulasi bmi
function deskripsi(bmi) {
  if (bmi < 18.5) {
    return deskripsiArray[0];
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return deskripsiArray[1];
  }
  if (bmi >= 25 && bmi <= 29.9) {
    return deskripsiArray[2];
  }
  if (bmi >= 30) {
    return deskripsiArray[2];
  }
}

// fungsi merotasi anak panah dan melakukan collapse
function rotate(num) {
  arrowClass[num].classList.toggle('rotates');
  let content = question[num].nextElementSibling;
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
