function globalFunc() {
  let firstName = "Akhil";
  function innerFunc() {
    console.log("my first name is: ", firstName);
  }
  innerFunc();
};
globalFunc();
