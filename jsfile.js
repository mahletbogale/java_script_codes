const addthree = (str) => {
  let dis = document.getElementById("display");
  let inpu = document.getElementById("inp").value;
  let charac = [];
  let strchar = inpu.split("");
  let i = 2;
  while (i < strchar.length) {
    charac.push(strchar[i]);
    i = i + 3;
    
  }
  dis.innerHTML = charac.join("");
 
};
addthree();

