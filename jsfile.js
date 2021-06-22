const addtwo = (str) => {
  let charac = [];
  let strchar = str.split("");
  let i = 2;
  while (i < strchar.length) {
    charac.push(strchar[i]);
    i = i + 3;
  }

  console.log(charac.join());
};
addtwo("iamyourlyftdriver");
