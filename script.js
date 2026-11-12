const tombolMenu = document.querySelector(".menu-toggle");
const navigasi = document.querySelector(".nav-menu");

if (tombolMenu && navigasi) {
    tombolMenu.addEventListener("click", function () {

        navigasi.classList.toggle("active");

        const menuTerbuka =
            navigasi.classList.contains("active");

        tombolMenu.setAttribute(
            "aria-expanded",
            menuTerbuka
        );
    });
}

const formKontak = document.querySelector("#form-kontak");

if (formKontak) {
    formKontak.addEventListener("submit", function(event) {
        event.preventDefault();

        const pesanForm = document.querySelector("#pesan-form");

        if (formKontak.checkValidity()) {
            pesanForm.textContent =
                "Terima kasih! Formulir berhasil divalidasi.";

            pesanForm.className = "pesan-sukses";

            formKontak.reset();
        } else {
            pesanForm.textContent =
                "Mohon periksa kembali data yang kamu masukkan.";

            pesanForm.className = "pesan-error";

            formKontak.reportValidity();
        }
    });
}

const cariProyek = document.getElementById("cariProyek");
const filterKategori = document.getElementById("filterKategori");
const hasilPencarian = document.getElementById("hasilPencarian");

const daftarProyek = document.querySelectorAll(".katalog-card");

function tampilkanProyek() {

    if (!cariProyek || !filterKategori) {
        return;
    }

    const kataKunci = cariProyek.value.toLowerCase();
    const kategoriDipilih = filterKategori.value;

    let jumlahTampil = 0;

    daftarProyek.forEach(function(proyek) {

        const namaProyek = proyek.querySelector("h2")
            .textContent.toLowerCase();

        const kategori = proyek.dataset.kategori;

        const cocokNama = namaProyek.includes(kataKunci);

        const cocokKategori =
            kategoriDipilih === "semua" ||
            kategori === kategoriDipilih;

        if (cocokNama && cocokKategori) {
            proyek.style.display = "";
            jumlahTampil++;
        } else {
            proyek.style.display = "none";
        }

    });

    if (hasilPencarian) {
        hasilPencarian.textContent =
            jumlahTampil + " proyek ditemukan.";
    }
}

if (cariProyek && filterKategori) {

    cariProyek.addEventListener("input", tampilkanProyek);

    filterKategori.addEventListener("change", tampilkanProyek);

    tampilkanProyek();
}
