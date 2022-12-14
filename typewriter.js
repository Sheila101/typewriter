const sentence = 'hello there from lighthouse labs \n';
let timeIncrement = 0; 
for(const char of sentence){
  timeIncrement += 100;
  setTimeout(() => {
    process.stdout.write(char);
  }, timeIncrement);
}
