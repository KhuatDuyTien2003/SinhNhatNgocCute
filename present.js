var to = nameGirl;
var gift_url = giftUrl;
var gift_image_url = giftImage || giftImageBase64;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");
var cancel = document.getElementById("cancel");
function changePosision() {
  let top = Math.floor(Math.random() * 100);
  let left = Math.floor(Math.random() * 300);
  console.log(top);
  document.getElementById("cancel").style.top = top + "px";
  document.getElementById("cancel").style.left = left + "px";
}
function Suceed() {
  document.getElementById("dieuuoc").classList.add("hidden");
  document.getElementById("dieuuoc").classList.remove("dieu-uoc");
  document.getElementById("hidden").classList.remove("hidden");
  document.getElementById("hidden").classList.add("dieu-uoc");
}
var chu = "Cảm ơn cậu rất nhiều, cậu làm người iu tớ nhé❤️❤️❤️❤️ !!??";
var dem = 0;
function wordRun() {
  document.getElementById("input-uoc").value = "";
  let aa = chu.split("");
  if (dem == aa.length - 1) {
    dem = 0;
  }
  dem++;
  let chuoi = [];
  let word = document.getElementById("input-uoc");

  for (let i = 0; i <= dem; i++) {
    chuoi += aa[i];
  }
  console.log(chuoi);
  document.getElementById("input-uoc").value = chuoi;
}
function init() {
  var graphElem = document.querySelector(".present-box > .side.top .to");
  graphElem.setAttribute("data-before", eventName);
  document.querySelector("#card .title-card").innerHTML = `💘${titleCard}💘`;
  document.querySelector("#card .content-card").innerHTML = `${contentCard}`;
  document.querySelector("#card .honey").setAttribute("src", `${giftImage}`);

  var _giftLink, _giftImg;

  if (gift_url) {
    _giftLink = document.createElement("a");
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener(
    "click",
    function (e) {
      present.classList.toggle("open");
      document.getElementById("card").classList.add("card-show");
      document.getElementById("wrap-present").classList.add("hidden");
      document.getElementById("dieuuoc").classList.remove("hidden");
      document.getElementById("dieuuoc").classList.add("dieu-uoc");
      document.getElementById("card1").classList.add("card-show1");
      document.getElementById("card2").classList.add("card-show2");
      document.getElementById("card3").classList.add("card-show3");
    },
    false
  );

  nametag.innerText = to;
}

init();
