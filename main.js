const source = document.getElementById("myHandlebarSection").innerHTML;

const template = Handlebars.compile(source);
const customValues = {
  name: "Pisto House",
  menu: ["LASANGNA", "BAKED PIGATONI", "SHRIMP FRA DIAVOLO", 'PENNE SAN REMO'],
};

const htmlInput = template(customValues);

document.getElementById("htmlSelection").innerHTML = htmlInput;
