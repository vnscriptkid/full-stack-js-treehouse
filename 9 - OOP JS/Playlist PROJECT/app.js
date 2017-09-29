var myPlaylist = new Playlist();

var coGaiNgayHomQua = new Song('Co Gai Ngay Hom Qua', 'Vu Cat Tuong', '5:13');
var theOneThatGotAway = new Song('The One That Got Away', 'ADAM STANTON', '5:38');
var nguoiTaNoi = new Song('Nguoi Ta Noi', 'Truc Nhan', '4:12')

const viewDiv = document.getElementById('viewDiv');
const playButton = document.getElementById('play');
const stopButton = document.getElementById('stop');
const nextButton = document.getElementById('next');

myPlaylist.add(coGaiNgayHomQua);
myPlaylist.add(theOneThatGotAway);
myPlaylist.add(nguoiTaNoi);


myPlaylist.renderInElement(viewDiv);

playButton.addEventListener('click', function(){
	myPlaylist.play();
	myPlaylist.renderInElement(viewDiv);
});

stopButton.addEventListener('click', function(){
	myPlaylist.stop();
	myPlaylist.renderInElement(viewDiv);
});

nextButton.addEventListener('click', function(){
	myPlaylist.next();
	myPlaylist.renderInElement(viewDiv);
});

