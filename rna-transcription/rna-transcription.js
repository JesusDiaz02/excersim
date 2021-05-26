export const toRna = (dna) => {
  
  let rna = dna.split("");

  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "G":rna[i] = "C";
        break;
      case "C":rna[i] = "G";
        break;
      case "T":rna[i] = "A";
        break;
      case "A":rna[i] = "U";
        break;
    }
  }
  return rna.join("");
};
