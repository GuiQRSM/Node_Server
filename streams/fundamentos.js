process.stdin.setEncoding('utf8');

console.log('Digite algo:');

process.stdin.on('data', (data) => {
  console.log(`Você digitou: ${data.trim()}`);
  process.exit();
});
