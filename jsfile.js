let dis = document.getElementById("display");

const addthree = (str) => {
  let charac = [];
  let strchar = str.split("");
  let i = 2;
  while (i < strchar.length) {
    charac.push(strchar[i]);
    i = i + 3;
  }
  dis.innerText = charac.join("");
  // console.log(charac.join());
};
addthree("iamyourlyftdriver");
