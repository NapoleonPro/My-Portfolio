// const starsContainer = document.querySelector('.stars');

// function createStar() {
//     const star = document.createElement('div');
//     star.className = 'star';
    
//     // Menentukan posisi acak
//     const left = Math.random() * window.innerWidth;
//     star.style.left = `${left}px`;
    
//     // Menentukan durasi animasi acak
//     const duration = Math.random() * 3 + 2; // antara 2 dan 5 detik
//     star.style.animationDuration = `${duration}s`;
    
//     starsContainer.appendChild(star);
    
//     // Menghapus bintang setelah animasi selesai
//     star.addEventListener('animationend', () => {
//         star.remove();
//     });
// }

// // Membuat bintang setiap 200ms
// setInterval(createStar, 200);


const starsContainer = document.querySelector('.stars');

function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    // Menentukan posisi acak
    const left = Math.random() * window.innerWidth;
    star.style.left = `${left}px`;

    // Menentukan durasi animasi acak
    const duration = Math.random() * 3 + 2; // antara 2 dan 5 detik
    star.style.animationDuration = `${duration}s`;

    starsContainer.appendChild(star);

    // Menghapus bintang setelah animasi selesai
    star.addEventListener('animationend', () => {
        star.remove();
    });
}

// Membuat bintang setiap 200ms
setInterval(createStar, 200);
