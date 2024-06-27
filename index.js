function shout(string) {
  return string.toUpperCase();
  "Hello!".toUpperCase();
}
function logShout(string) {
    console.log(string.toUpperCase());

  }
  logShout("Hello"); // Outputs: HELLO
  logShout("It's me!"); //Outputs; IT'S ME!
  
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }

  logWhisper("HELLO!"); // Outputs: hello!
  logWhisper("IT'S ME!");//Outputs:its me!  

  function whisper(string) {
    return string.toLowerCase();
  }
  
  console.log(whisper("HELLO")); // Outputs: hello
  
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else {
      return "YES INDEED!";
    }
}


