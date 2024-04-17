const speaker = document.querySelector(".speaker");
const speaker__list = document.querySelector(".speakers__list");
const program = document.querySelector("#items");
const ProgramList = document.querySelector(".items");

const mainPrograms = [
  {
    title: "National Anthum",
    description:
      "Appreciate various creations applying CC license of artists, organized from Art Centre Nabi.",
  },
  {
    title: "BoneFire",
    description:
      "Have the time to share your thoughts and opinions with experts for each topic.",
  },
  {
    title: "WMusic",
    description:
      "Try creating your own work using open source license rather than just watching at it.",
  },
];

const featuredSpeakers = [
  {
    imageSrc: "images/speaker_01.png",
    name: "yochai benkler",
    profession:
      "Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School",
  },
  {
    imageSrc: "/images/speaker_02.png",
    name: "kilnam chon",
    profession: " Qatar X-Player",
  },
  {
    imageSrc: "images/speaker_03.png",
    name: "SohYeong Noh",
    profession: "Saudi X-Player",
  },
  {
    imageSrc: "images/speaker_04.png",
    name: "julia leda",
    profession: "Brazilian X-Player",
  },
  {
    imageSrc: "images/speaker_05.png",
    name: "lila tretikov",
    profession: "Russian X-Player",
  },
  {
    imageSrc: "images/speaker_06.png",
    name: "ryan merkley",
    profession: "CEO of Creative Commons, ex COO of the Mozilla Foundation",
  },
];
featuredSpeakers.forEach((speaker) => {
  const speakerItem = document.createElement("li");
  speakerItem.classList.add("speakers__detail");
  speakerItem.innerHTML = `
        <img src="${speaker.imageSrc}" alt="Photo of Yochai" class="speakers__photo"/>
        <span class="more-info">
          <h4 class="speaker-name">${speaker.name}</h4>
          <h5 class="speaker-profession">${speaker.profession}</h5>
          
        </span> `;
  speakerList.appendChild(speakerItem);
});

mainPrograms.forEach((mainProgram) => {
  const programItem = document.createElement("li");
  programItem.classList.add("programs__list");
  programItem.innerHTML = `
  <img src="${mainProgram.imageSrc}" alt="lecture" />
              <span class="programs__details">
                <h3>${mainProgram.title}</h3>
                
              </span>
  `;
  ProgramList.appendChild(programItem);
});
