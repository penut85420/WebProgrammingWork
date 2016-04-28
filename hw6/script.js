function shuffle() {
	var player = ["陳金鋒", "胡金龍", "林益全", "高國輝", "彭政閔", "林智勝", "鄭凱文"];
	for (var i = 0; i < player.length; i++) {
		var r = Math.floor(Math.random() * player.length);
		var t = player[r];
		player[r] = player[i];
		player[i] = t;
	}
	for (var i = 0; i < player.length; i++) {
		document.write("<img src = '" + player[i] + ".jpg'" +
			"style = 'position: absolute; top: " + Math.random() * 400 +
			"px; left: " + Math.random() * 400 + "px;'>");
	}
}
window.onload = shuffle;