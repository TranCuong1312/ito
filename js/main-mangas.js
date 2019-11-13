const mangasData = [
{
	"name":"Gyo-Quái vật biển",
    "image":"https://3.bp.blogspot.com/-rHjS8rs4et4/V5amwfcA5vI/AAAAAAAAERk/bbE68nvXfHQ/quai-vat-bien.jpg",
    "link":"https://truyenmoi.xyz/doc-truyen-tranh-tong-hop-gyo",
    "dercribe":"Drama - Horror - Mystery - Psychological - Sci-fi - Seinen - Tragedy"
},
{
	"name":"Frankenstein",
	"image":"https://truyenmoi.xyz/truyenmoi_net_thumb/doc-truyen-tranh-frankenstein-truyen-manga-4fe33b75d559cc687e8e4cf75cdca438.jpg",
	"link":"https://truyenmoi.xyz/doc-truyen-tranh-frankenstein-truyen-manga",
	"dercribe":"Horror - Mystery - Psychological - Sci-fi"
},
{
	"name":"New voices in the dark",
	"image":"https://truyenmoi.xyz/truyenmoi_net_thumb/doc-truyen-tranh-new-voices-in-the-dark-manga-062ada76851efdb8f4376070e99263af.jpg",
	"link":"https://truyenmoi.xyz/doc-truyen-tranh-new-voices-in-the-dark-manga",
	"dercribe":"Mystery , Drama , Supernatural , Psychological , Horror , Tragedy"
},
{
	"name":"Tomie",
	"image":"https://truyenmoi.xyz/truyenmoi_net_thumb/doc-truyen-tranh-tomie-manga-a37a3e61fc89cafde7f2d7342acb18f2.jpg",
	"link":"https://truyenmoi.xyz/doc-truyen-tranh-tomie-manga",
	"dercribe":"Drama , Supernatural , Horror , Josei"
},
{
	"name":"Uzumaki – Vòng Xoắn Ốc",
	"image":"https://truyenmoi.xyz/truyenmoi_net_thumb/doc-truyen-tranh-uzumaki-vong-xoan-oc-manga-e91b3cd6274214e60a3b9799d1622645.jpg",
	"link":"https://truyenmoi.xyz/doc-truyen-tranh-uzumaki-vong-xoan-oc-manga",
	"dercribe":" Mystery , Drama , Supernatural , Psychological , Horror , Seinen , Tragedy"
}
];


function name(name) {
  return `
 <h2 class="manga-name">${pet.name}<h2>

`;
}

function petTemplate(pet) {
  return `
    <div class="animal">
    <img class="pet-photo" src="${pet.image}">
    <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
    
    
    </div>
  `;
}

document.getElementById("app").innerHTML = `
  <h1 class="app-title">Pets (${petsData.length} results)</h1>
  ${petsData.map(petTemplate).join("")}
  <p class="footer">These ${petsData.length} pets were added recently. Check back soon for updates.</p>
`;
