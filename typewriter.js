const sentence = "hello there from lighthouse labs";

for (let i = 0; i <= sentence.length; i++) {
  let char = sentence[i];
  if (i === sentence.length) {
    char = "\n";
  };
  
  setTimeout(() => {
    process.stdout.write(char);
  }, i * 50)
}
