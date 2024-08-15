function hitungBMI() {
    // Get user inputs
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;
    const beratBadan = parseFloat(document.getElementById("berat-badan").value);
    const usia = parseInt(document.getElementById("usia").value);
    const tinggiBadan = parseFloat(document.getElementById("tinggi-badan").value);
  
    // Calculate BMI
    const tinggiMeter = tinggiBadan / 100; // Convert cm to meters
    const bmi = beratBadan / (tinggiMeter * tinggiMeter);
  
    // Display BMI result
    const bmiResult = document.getElementById("bmi-result");
    bmiResult.innerHTML = `BMI: ${bmi.toFixed(2)}`;
  
    // Determine BMI category
    let pesan = "";
    let saran = "";
    if (bmi < 18.5) {
      pesan = "Anda memiliki berat badan kurang";
      saran = "Disarankan untuk meningkatkan berat badan dengan mengonsumsi makanan bergizi seimbang dan berolahraga secara teratur.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      pesan = "Anda memiliki berat badan ideal";
      saran = "Pertahankan berat badan Anda dengan pola makan sehat dan rutin berolahraga.";
    } else if (bmi >= 25 && bmi <= 29.9) {
      pesan = "Anda memiliki berat badan berlebih (overweight)";
      saran = "Disarankan untuk menurunkan berat badan dengan mengatur asupan kalori dan berolahraga secara teratur. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan saran yang tepat.";
    } else if (bmi >= 30) {
      pesan = "Anda mengalami obesitas";
      saran = "Disarankan untuk segera menurunkan berat badan dengan program diet yang tepat dan  berolahraga secara teratur. Konsultasikan dengan dokter atau ahli gizi untuk mendapatkan saran yang tepat.";
    }
  
    // Display pesan and saran
    const pesanElement = document.getElementById("pesan");
    pesanElement.innerHTML = pesan;
  
    const saranElement = document.getElementById("saran");
    saranElement.innerHTML = saran;
  
    // Show hasil container
    document.getElementById("hasil-container").style.display = "block";
  }
  
  function resetForm() {
    // Reset input fields
    document.getElementById("berat-badan").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("tinggi-badan").value = "";
  
    // Reset result display
    document.getElementById("bmi-result").innerHTML = "";
    document.getElementById("pesan").innerHTML = "";
    document.getElementById("saran").innerHTML = "";
  
    // Hide hasil container
    document.getElementById("hasil-container").style.display = "none";
  }
