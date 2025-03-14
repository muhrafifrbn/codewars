// let DNAtoRNA = (dna) => (dna.includes("T") ? dna.replaceAll("T", "U") : dna);
let DNAtoRNA = (dna) => dna.split("T").join("U");

console.log(DNAtoRNA("GCAT"));
