// Padrão
console.log("always");

// Somente se for DEV
if (import.meta.env.DEV) {
  console.log("dev only");
}

// Somente se const for true
const verbose = false;
if (verbose) {
  console.log("verbose");
}

// Somente se let for true
let superVerbose;
if (superVerbose) {
  console.log("superVerbose");
}

// Somente se let for true e modificado
let hyperVerbose;
hyperVerbose = false;
if (hyperVerbose) {
  console.log("hyperVerbose");
}
