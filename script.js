const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const crumbs = document.querySelector(".crumbs");

function bread(arr, num) {
  if (bc.length - 1 != num) {
    let link = document.createElement("a");
    link.innerText = arr.name + " /";
    link.href = arr.link;
    crumbs.appendChild(link);
  } else {
    let link = document.createElement("a");
    link.innerText = arr.name;
    crumbs.appendChild(link);
  }
}

bc.forEach(bread);
