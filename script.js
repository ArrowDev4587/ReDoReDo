const sarkiUrl = [
    "ederlezi.jpg",
    "remembrance.jpg",
    "nilufer.jpg",
    "nothingelsematters.jpg",
    "sudabalikoynuyor.jpg",
    "izmirinkavaklari.jpg",
    "eylensunam.jpg",
    "korkmirem.jpg",
    "yesilcimen.jpg",
    "elleriellerime.jpg",
    "saydim.jpg",
    "karasevda.jpg",
    "kerimogluzeybegi.jpg",
];

const sarkiAdlari = [
    "Ederlezi",
    "Remembrance",
    "Nilufer",
    "Nothing Else Matters",
    "Suda Balık Oynuyor",
    "İzmirin Kavakları",
    "Eylen Sunam",
    "Korkmirem",
    "Yeşil Çimen",
    "Elleri Ellerime",
    "Saydım",
    "Kara Sevda",
    "Kerimoğlu Zeybeği",
];

const sarkiListeDiv = document.getElementById("sarki_liste_div");
const notaImg = document.getElementById("notaImg");
  
document.body.addEventListener('load', notaYukle());

function notaYukle(){
    notaImg.src = "notalar/" + sarkiUrl[0];
    for (let index = 0; index < sarkiAdlari.length; index++) {
        var sarki_html = '<a id="sarkiItem' + index + '" onclick="notaSec(this.id)" class="sarki-list-item list-group-item list-group-item-action py-3 lh-sm"><div class="d-flex w-100 align-items-center justify-content-between"><strong class="mb-1">' + sarkiAdlari[index] + '</strong></div></a>'
        sarkiListeDiv.innerHTML += sarki_html;
    }
};

function notaSec(tiklanan_id){  
    var index = tiklanan_id.replace('sarkiItem', '');
    notaImg.src = "notalar/" + sarkiUrl[index];
}; 
