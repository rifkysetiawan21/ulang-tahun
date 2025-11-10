const pinBenar = "0513";

function cekPIN() {
  const pinInput = document.getElementById("pinInput").value;
  const errorMsg = document.getElementById("errorMsg");

  if (pinInput === pinBenar) {
    window.location.href = "birthday.html";
  } else {
    errorMsg.textContent = "PIN salah, coba lagi 😅";
  }
}
