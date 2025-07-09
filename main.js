
//logo 
document.getElementById('logo').addEventListener('click', () => {
  window.location.href = 'index.html';
});

//  Netflix(with sections)
document.addEventListener('DOMContentLoaded', () => {

  //Carousel Scroll In Trending, Continue Watching, Originals, Top Picks.
  function setupRow(id) {
    const row = document.getElementById(id);
    if (!row) return;

    const wrapper = row.parentElement;
    const leftBtn = wrapper.querySelector('.scroll-btn.left');
    const rightBtn = wrapper.querySelector('.scroll-btn.right');

    if (leftBtn && rightBtn) {
      leftBtn.addEventListener('click', () => {
        row.scrollBy({ left: -400, behavior: 'smooth' });
      });
      rightBtn.addEventListener('click', () => {
        row.scrollBy({ left: 400, behavior: 'smooth' });
      });
    }
  }

  setupRow('rowTrending');
  setupRow('rowContinue');
  setupRow('rowOriginals');
  setupRow('rowTopPicks');
  setupRow('rowPopular');
  setupRow('rowNewReleases');
  setupRow('rowHindiShows');  

// FAQ accordion logic
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.style.display = (answer.style.display === 'block') ? 'none' : 'block';
  });
});

  //  Modal Preview for Posters
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDescription = document.getElementById('modalDescription');
  const closeBtn = document.querySelector('.close-btn');
// img , and their description 
  const showData = {
    "Spider-Man": { title: "Spider-Man", description: "Peter Parker returns to high school and heroism." },
    "Dragon Ball": { title: "Dragon Ball", description: "Goku and friends battle powerful foes in epic sagas." },
    "The Godfather": { title: "The Godfather", description: "A mafia family's powerful rise and legacy." },
    "Doctor Strange": { title: "Doctor Strange", description: "A surgeon becomes a master of the mystic arts." },
    "Money Heist": { title: "Money Heist", description: "A criminal mastermind plans a grand robbery." },
    "Avengers": { title: "Avengers", description: "Thanos threatens Earth's mightiest heroes." },
    "The Batman": { title: "The Batman", description: "Bruce Wayne faces Gotham's darkest forces." },
    "Encanto": { title: "Encanto", description: "A magical family and their enchanted home." },
    "The Matrix": { title: "The Matrix", description: "A hacker fights machines in a simulated world." },
    "Breaking Bad": { title: "Breaking Bad", description: "A chemistry teacher turns drug kingpin." },
    "How to Train Your Dragon: Homecoming": { title: "How to Train Your Dragon: Homecoming", description: "Hiccup reunites with Toothless during the holidays." },
    "All of Us Are Dead": { title: "All of Us Are Dead", description: "Zombie outbreak traps students in a school." },
    "Ozark": { title: "Ozark", description: "A financial adviser launders money in the Ozarks." },
    "Ginny & Georgia": { title: "Ginny & Georgia", description: "A mother and daughter's messy, heartfelt journey." },
    "Joker": { title: "Joker", description: "A failed comedian spirals into madness in Gotham." },
    "The Night Agent": { title: "The Night Agent", description: "An FBI agent uncovers a deadly conspiracy." },
    "Cobra Kai: Inside the Dojo": { title: "Cobra Kai: Inside the Dojo", description: "Behind-the-scenes look at Cobra Kai's finale." },
    "The Umbrella Academy": { title: "The Umbrella Academy", description: "Superpowered siblings prevent the apocalypse." },
    "Outer Banks": { title: "Outer Banks", description: "Teens hunt treasure in a coastal mystery." },
    "You": { title: "You", description: "An obsessive man infiltrates his target's life." },
    "The Sandman": { title: "The Sandman", description: "The Dream King seeks to restore his realm." },
    "Brooklyn Nine-Nine": { title: "Brooklyn Nine-Nine", description: "A comedy about quirky NYPD detectives." },
    "Thunderbolts*": { title: "Thunderbolts*", description: "Disillusioned castoffs face a dangerous mission." },
    "Gachiakuta ": { title: "Gachiakuta", description: "Framed and cast into hell, Rudo fights for justice." },
    "Ballerina": { title: "Ballerina", description: "Eve Macarro trains in Ruska Roma's deadly ways." },
    "Dan Da Dan": { title: "Dan Da Dan", description: "Two teens bet on ghosts vs aliens—and get powers." },
    "The Girl in the Mirror": { title: "The Girl in the Mirror ", description: "After losing her memory in a bizarre accident that kills most of her classmates, Alma tries to unravel what happened that day — and regain her identity." },
    "Alice in Terrorland": { title: "Alice in Terrorland ", description: "A recently bereaved teenage girl goes to live with her aunt in a secluded woodland house, unaware that sinister forces lurk within." },
    "The Walking Dead": { title: "The Walking Dead", description: "Stars of 'The Walking Dead', Andrew Lincoln and Danai Gurira, walk down memory lane and visit iconic locations where pivotal moments between their characters, Rick and Michonne, were filmed." },
    "Thug Life": { title: "Thug Life", description: "In a world ruled by crime and betrayal, mafia kingpin Sakthivel and his brother Manikkam rescue a young boy, Amaran, during a violent police shootout and raise him as their own. " },
    "The Vikings Myths": { title: "The Vikings Myths", description: "A fascinating journey through Norse mythology, a huge universe inhabited by gods and mysterious creatures." },
    "When Life Gives You Tangerines": { title: "When Life Gives You Tangerines ", description: "In Jeju, a spirited girl and a steadfast boy's island story blossoms into a lifelong tale of setbacks and triumphs — proving love endures across time." },
    "Mercy for None": { title: "Mercy for None", description: "After severing ties with his gang, a former gangster returns to uncover the truth behind his brother's death — embarking on a relentless path of revenge." },
    "Manifest": { title: "Manifest ", description: "After landing from a turbulent but routine flight, the crew and passengers of Montego Air Flight 828 discover five years have passed in what seemed like a few hours. " },
    "Karate Kid: Legends": { title: "Karate Kid: Legends", description: "After a family tragedy, kung fu prodigy Li Fong is uprooted from his home in Beijing and forced to move to New York City with his mother." },
    "Bring Her Back": { title: "Bring Her Back", description: "Following the death of their father, a brother and sister are introduced to their new sibling by their foster mother, only to learn that she has a terrifying secret." },
    "Ziam": { title: "Ziam", description: "In a world succumbing to hunger, a determined Muay Thai fighter fends off a zombie outbreak inside a hospital to save his beloved." },
    "KPop Demon Hunters": { title: "KPop Demon Hunters", description: "When K-pop superstars Rumi, Mira and Zoey aren't selling out stadiums, they're using their secret powers to protect their fans from supernatural threats." },
    "Lost in Starlight": { title: "Lost in Starlight", description: "When an astronaut leaves Earth for Mars, the vast infinite space divides star-crossed lovers in this animated romance that crosses the cosmos." },
    "Exploring the Set of 'Moonrise Kingdom'": { title: "Exploring the Set of 'Moonrise Kingdom'", description: "Martin Scali, who was Wes Anderson's assistant on 'Fantastic Mr. Fox', " },
    "Devil May Cry": { title: "Devil May Cry", description: "When a mysterious villain threatens to open the gates of Hell, a devilishly handsome demon hunter could be the world's best hope for salvation." },
    "YAIBA: Samurai Legend": { title: "YAIBA: Samurai Legend", description: "Yaiba's journey to becoming a true samurai takes him from his home in the forest to a bustling city full of rivals, friends and ancient powers." },
    "Witch Watch": { title: "Witch Watch", description: "A diligent teen winds up living with his spunky childhood friend, a trainee witch, to protect her from a dire prophecy. " },
    "Moonrise": { title: "Moonrise", description: "After rebel forces attack Earth, a carefree heir becomes the prime suspect and joins a special military unit to find the true mastermind on the Moon." },
    "Rana Naidu": { title: "Rana Naidu", description: "Rana Naidu can solve any problem in Bollywood. But when his father is suddenly released from prison, the one mess he can’t handle may be his own." },
    "The Great Indian Kapil Show": { title: "The Great Indian Kapil Show", description: "Comedian Kapil Sharma hosts this laugh-out-loud variety talk show with celebrity guests, hilarious antics and his signature supporting cast." },
    "Kota Factory": { title: "Kota Factory", description: "In a city of coaching centers known to train India’s finest collegiate minds, an earnest but unexceptional student and his friends navigate campus life." },
    "Guns & Gulaabs": { title: "Guns & Gulaabs", description: "In the cartel-run town of Gulaabgunj, an unprecedented opium deal pulls a big-city cop and a lovesick mechanic into its chaotic clutches." },
    "Delhi Crime": { title: "Delhi Crime", description: "Following the police force as they investigate high-profile crimes in Delhi, this series has seasons inspired by both real and fictional events." },
    "CAT": { title: "CAT", description: "Living under an alias, a former police informant is summoned to infiltrate a major drug empire but uncovers a dangerous connection to his dark past." },
    "Raid 2 ": { title: "Raid 2 ", description: "Set seven years after the events of the first film, it follows the return of IRS officer Amay Patnaik, who is attempting to take down a seemingly benevolent politician." },
    "Kaala Paani": { title: "Kaala Paani", description: "Set in the near future, the Andaman and Nicobar Islands are quarantined from the rest of the world as a mystery disease engulfs them, prompting the islanders to attempt an unprecedented feat in human history - escaping the Kaala Paani." },
  };

  document.querySelectorAll('.row-poster').forEach(poster => {
    poster.addEventListener('click', () => {
      const key = poster.alt.trim();
      const info = showData[key] || { title: key, description: "No description available." };
      modalTitle.textContent = info.title;
      modalDescription.textContent = info.description;
      modal.style.display = 'flex';
    });
  });

  //Close modal
  closeBtn.addEventListener('click', () => modal.style.display = 'none');
  window.addEventListener('click', e => {
    if (e.target === modal) modal.style.display = 'none';
  });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') modal.style.display = 'none';
  });

  // Navbar Avatar , Profile Modal Remove , Add Function , Password Protect
  const profileIcon = document.querySelector('.avatar');
  const profileModal = document.getElementById('profileModal');

  // avatar images in profile 
  const avatarImages = [
    "assests/avatar.jpeg",
    "assests/avatar2.jpeg",
    "assests/avatar3.jpeg",
    "assests/avatar4.jpeg",
  ];

  // passwords for  profile
  const profilePasswords = {
    "yash lakra": "12345",
    "Harsh lakra": "12345",
    "Krish Suar": "12345"
  };

  if (profileIcon && profileModal) {
    profileIcon.addEventListener('click', () => {
      profileModal.style.display = 'flex';
    });

    function attachProfileEvents(profile) {
      const name = profile.dataset.name;

      //  Password prompt of  profile click
      profile.querySelector('img').addEventListener('click', () => {
        const entered = prompt(`Enter password for ${name}:`);
        if (entered === profilePasswords[name]) {
          alert(`Welcome, ${name}!`);
          profileModal.style.display = 'none';
        } else {
          alert("Incorrect password. Access denied.");
        }
      });

      //  Remove profile btn
      const removeBtn = profile.querySelector('.remove-btn');
      if (removeBtn) {
        removeBtn.addEventListener('click', e => {
          e.stopPropagation();
          if (confirm(`Remove profile '${name}'?`)) {
            delete profilePasswords[name];
            profile.remove();
          }
        });
      }
    }

    //  Attach  to existing profiles
    document.querySelectorAll('.profile[data-name]').forEach(profile => {
      if (!profile.querySelector('.remove-btn')) {
        const btn = document.createElement('button');
        btn.textContent = "Remove";
        btn.className = 'remove-btn';
        profile.appendChild(btn);
      }
      attachProfileEvents(profile);
    });

    //  Add Profile with random image
    document.querySelector('.add-profile').addEventListener('click', () => {
      const newName = prompt("Enter name for new profile:");
      const newPass = prompt("Set password for this profile:");
      if (newName && newPass) {
        profilePasswords[newName] = newPass;

        const randomAvatar = avatarImages[Math.floor(Math.random() * avatarImages.length)];

        const newProfile = document.createElement('div');
        newProfile.classList.add('profile');
        newProfile.setAttribute('data-name', newName);
        newProfile.innerHTML = `
          <img src="${randomAvatar}" alt="${newName}" />
          <span>${newName}</span>
          <button class="remove-btn">Remove</button>
        `;

        const addBox = document.querySelector('.add-profile');
        addBox.parentNode.insertBefore(newProfile, addBox);

        attachProfileEvents(newProfile);
      }
    });
  }
});
