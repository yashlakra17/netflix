const modal = document.getElementById("movieModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close-btn");

// TV show metadata by alt text
const tvShowData = {
  "Black Mirror": {
    title: "Black Mirror",
    description: "A sci-fi anthology series about dark tech futures."
  },
  "Money Heist": {
    title: "Money Heist",
    description: "A gang attacks Spain's Royal Mint in a brilliant plan."
  },
  "Stranger Things": {
    title: "Stranger Things",
    description: "A group of kids uncover supernatural events in their town."
  },
  "Brooklyn Nine-Nine": {
    title: "Brooklyn Nine-Nine",
    description: "A hilarious comedy in a Brooklyn police precinct."
  },
  "The Office": {
    title: "The Office",
    description: "Everyday chaos at a paper company in mockumentary style."
  },
  "The Mandalorian": {
    title: "The Mandalorian",
    description: "A bounty hunter protects a mysterious child in the Star Wars galaxy."
  },
  "WandaVision": {
    title: "WandaVision",
    description: "Wanda and Vision live in a sitcom — with reality bending."
  },
  "Peaky Blinders": {
    title: "Peaky Blinders",
    description: "A gangster family in 1920s Birmingham rises through crime and power."
  },
  "Dark": {
    title: "Dark",
    description: "A German town’s secrets unravel after a child's disappearance reveals time travel."
  },
  "Lucifer": {
    title: "Lucifer",
    description: "The devil takes a vacation on Earth and runs a nightclub in L.A."
  }

};

// Attach modal event to each poster
document.querySelectorAll(".row-poster").forEach((poster) => {
  poster.addEventListener("click", () => {
    const key = poster.getAttribute("alt")?.trim();
    const data = tvShowData[key];

    modalTitle.textContent = data?.title || key || "Unknown Title";
    modalDescription.textContent = data?.description || "No description available.";
    modal.style.display = "flex";
  });
});

// Close modal handlers
closeBtn.addEventListener("click", () => (modal.style.display = "none"));

window.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") modal.style.display = "none";
});
