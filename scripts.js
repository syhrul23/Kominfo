const days = document.querySelectorAll('.weekdays li');

  days.forEach(day => {
    day.addEventListener('click', function () {
      // Hapus active-date di semua hari
      days.forEach(d => d.classList.remove('active-date'));

      // Tambahkan active-date di yang diklik
      this.classList.add('active-date');

      // Kamu juga bisa load data agenda sesuai tanggal di sini
      console.log("Kamu klik hari: ", this.dataset.day);
    });
  });