
// Probably extract out these functions later
function fillInForm(id, string) {
    document.getElementById(id).value = string
    console.log("test");
  }

  function clickButton(id) {
    document.getElementById(id).click();
  }

  function hasContent(id, string) {
    return document.getElementById(id).innerHTML.includes(string);
  }

  function doesntHaveContent(id, string) {
   return !(document.getElementById(id).innerHTML.includes(string));
  }
