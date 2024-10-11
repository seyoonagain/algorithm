const solution = (s) => s.toLowerCase()
    .split(" ")
    .map(w => w && w.replace(w[0], w[0].toUpperCase()))
    .join(" ")
