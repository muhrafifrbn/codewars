function boredom(staff) {
  let total = 0;
  for (let i in staff) {
    total += getBoring(staff[i]);
  }
  console.log(total);

  if (total <= 80) return "kill me now";
  if (total < 100 && total > 80) return "i can handle this";

  return "party time!!";
}

function getBoring(department) {
  if (department == "accounts") {
    return 1;
  }
  if (department == "finance") {
    return 2;
  }
  if (department == "canteen") {
    return 10;
  }
  if (department == "regulation") {
    return 3;
  }
  if (department == "trading" || department == "change") {
    return 6;
  }

  if (department == "IS") {
    return 8;
  }

  if (department == "retail") {
    return 5;
  }
  if (department == "cleaning") {
    return 4;
  }

  if (department == "pissing about") {
    return 25;
  }
}

console.log(
  boredom({
    tim: "IS",
    jim: "finance",
    randy: "pissing about",
    sandy: "cleaning",
    andy: "cleaning",
    katie: "cleaning",
    laura: "pissing about",
    saajid: "regulation",
    alex: "regulation",
    john: "accounts",
    mr: "canteen",
  })
);
