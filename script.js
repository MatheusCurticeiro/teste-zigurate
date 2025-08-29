const modal = document.getElementById("photoModal");
const modalImage = document.getElementById("modalImage");
const galleryItems = document.querySelectorAll(".gallery-item");
const closeModal = document.querySelector(".close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

// Abrir modal ao clicar em uma imagem
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = item.src;
        currentIndex = index;
    });
});

// Fechar modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Navegar para a imagem anterior
prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    modalImage.src = galleryItems[currentIndex].src;
});

// Navegar para a próxima imagem
nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    modalImage.src = galleryItems[currentIndex].src;
});

// Fechar modal ao clicar fora da imagem
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
