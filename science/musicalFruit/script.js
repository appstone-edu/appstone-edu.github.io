window.onload = function () {
  document.getElementsByTagName("input")[0].oninput = function () {
    var note = this.value;
    var noteData = {
      "w" : "c.wav",
      "a" : "d.wav",
      "s" : "e.wav",
      "d" : "f.wav",
      "f" : "g.wav",
      "g" : "a.wav"
    };
    if (noteData[note] != undefined) {
      var noteAudio = document.getElementsByTagName("audio")[0];
      noteAudio.src = noteData[note];
      noteAudio.play();
    }
    this.value = "";
  };
};
