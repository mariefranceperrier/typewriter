const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  for (const letter of char) {
    setTimeout(() => {
      process.stdout.write(letter);
    }, letter.length * 50);
  }
}

setTimeout(() => {
  console.log();
}, sentence.length * 50);

