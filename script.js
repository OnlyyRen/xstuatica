const texts = [
    "Selamat Datang Di Website Resmi X TKJ A!",
    "Belajar, Nyolder, dan setting router bareng!",
    "STUATICA  ARKANANTA!"
];

let i = 0;
let j = 0;
let isDeleting = false;

function typeEffect() {
    const current = texts[i];
    const typing = document.getElementById("typing");

    typing.textContent = current.slice(0, j);

    if (!isDeleting) {
        j++;
        if (j > current.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        j--;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % texts.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 80);
}

typeEffect();

// Efek hover untuk kartu struktur organisasi
document.querySelectorAll('.position-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

const students = [
    {
        name: "Abi Waqash",
        photo: "images/abi.jpg"
    },
    {
        name: "Achmad Miftakhul Haq",
        photo: "images/achmad.jpg"
    },
    {
        name: "Adinda Nabila P.S",
        photo: "images/adinda.jpg"
    },
    {
        name: "Ahnaf Naufal Prawira",
        photo: "images/ahnaf.jpg"
    },
    {
        name: "Aisyah Safa Azzahrah",
        photo: "images/aisyah.jpg"
    }
];

const grid = document.getElementById("studentGrid");

students.forEach((student) => {
    const card = document.createElement("div");
    card.className = "student-card";

    card.innerHTML = `
        <img src="${student.photo}" alt="${student.name}">
        <div class="student-name">${student.name}</div>
    `;

    grid.appendChild(card);
});
