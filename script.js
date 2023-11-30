document.addEventListener("DOMContentLoaded", function () {
    // Inisialisasi PureCounter
    const counters = document.querySelectorAll('.purecounter');
    counters.forEach(counter => {
      const start = parseInt(counter.getAttribute('data-purecounter-start')) || 0;
      const end = parseInt(counter.getAttribute('data-purecounter-end')) || 0;
      const duration = parseInt(counter.getAttribute('data-purecounter-duration')) || 1;

      let current = start;

      const updateCounter = () => {
        const increment = (end - start) / (duration * 60); // Hitung increment per frame
        current += increment;

        // Memastikan agar nilai counter tidak melebihi nilai akhir
        if (current <= end) {
          counter.innerText = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = end; // Pastikan nilai akhir yang tampil sesuai dengan yang diinginkan
        }
      };

      updateCounter();
    });
  });
  document.addEventListener('DOMContentLoaded', function () {
    let sortBtn = document.querySelector('.filter-menu').children;
    let sortItem = document.querySelector('.filter-item').children;
  
    for (let i = 0; i < sortBtn.length; i++) {
      sortBtn[i].addEventListener('click', function () {
        for (let j = 0; j < sortBtn.length; j++) {
          sortBtn[j].classList.remove('current');
        }
  
        this.classList.add('current');
  
        let targetData = this.getAttribute('data-target');
  
        for (let k = 0; k < sortItem.length; k++) {
          sortItem[k].classList.remove('active');
          sortItem[k].classList.add('delete');
  
          if (sortItem[k].getAttribute('data-item') == targetData || targetData == "all") {
            sortItem[k].classList.remove('delete');
            sortItem[k].classList.add('active');
          }
        }
      });
    }
  });



document.addEventListener("DOMContentLoaded", function () {
    let filterButtons = document.querySelectorAll('.dropdown-item');
    let flipItems = document.querySelectorAll('.flip');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Hapus kelas 'current' dari semua tombol filter
        filterButtons.forEach(btn => btn.classList.remove('current'));
        // Tambahkan kelas 'current' ke tombol filter yang dipilih
        this.classList.add('current');
  
        let targetFilter = this.getAttribute('data-filter');
  
        // Perlihatkan atau sembunyikan flip card sesuai dengan filter yang dipilih
        flipItems.forEach(item => {
          item.classList.remove('d-none');
          if (targetFilter !== 'all' && !item.classList.contains(targetFilter)) {
            item.classList.add('d-none');
          }
        });
      });
    });
});
  
