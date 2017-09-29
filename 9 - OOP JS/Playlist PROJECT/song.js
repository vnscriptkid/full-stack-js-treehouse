function Song(title, artist, duration){
	this.title = title;
	this.artist = artist;
	this.duration = duration;
	this.isPlaying = false;
}

Song.prototype.play = function(){
	this.isPlaying = true;
}

Song.prototype.stop = function(){
	this.isPlaying = false;
}

Song.prototype.toHTML = function(){
	"<div>Title : this.title <br> Artist : this.artist <br> Duration : this.duration<hr></div>";
	var html = "";
	html += "<div";
	if(this.isPlaying)
		html += ' class="isPlaying"';
	html += "> Title : " + this.title + "<br>";
	html += "Artist : " + this.artist + "<br>";
	html += "Duration : " + this.duration + "<br>";
	html += "<hr></div>";
	return html;
}
