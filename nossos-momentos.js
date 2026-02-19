document.addEventListener("DOMContentLoaded", () => {

    console.log("JS carregado corretamente");

    /* ============================= */
    /* LIGHTBOX */
    /* ============================= */
    const photoCards = document.querySelectorAll(".photo-card img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const closeLightbox = document.getElementById("closeLightbox");

    if (photoCards.length && lightbox && lightboxImg && closeLightbox) {
        photoCards.forEach(img => {
            img.addEventListener("click", () => {
                lightbox.style.display = "flex";
                lightboxImg.src = img.src;
            });
        });

        closeLightbox.addEventListener("click", () => {
            lightbox.style.display = "none";
        });

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

    /* ============================= */
    /* SIDEBAR */
    /* ============================= */
    const menuBtn = document.getElementById("menuBtn");
    const sidebarContainer = document.getElementById("sidebarContainer");
    const closeBtn = document.getElementById("closeSidebar");
    const sidebar = document.querySelector(".sidebar");

    if (!menuBtn || !sidebarContainer || !closeBtn || !sidebar) {
        console.error("Sidebar não encontrada no DOM");
        return;
    }

    menuBtn.addEventListener("click", () => {
        sidebarContainer.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
        sidebarContainer.classList.remove("active");
    });

    sidebarContainer.addEventListener("click", (e) => {
        if (!sidebar.contains(e.target)) {
            sidebarContainer.classList.remove("active");
        }
    });

});

const addPhotoInput = document.getElementById("addPhotoInput");
const photoGrid = document.querySelector(".photo-grid");

addPhotoInput.addEventListener("change", () => {
    const file = addPhotoInput.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
        const photoCard = document.createElement("div");
        photoCard.classList.add("photo-card");

        const img = document.createElement("img");
        img.src = e.target.result;

        photoCard.appendChild(img);

        // Insere antes do botão "+"
        const addCard = document.querySelector(".add-photo-card");
        photoGrid.insertBefore(photoCard, addCard);
    };

    reader.readAsDataURL(file);
});
