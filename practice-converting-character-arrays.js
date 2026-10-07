// Task 1: Decode the following reversed messages and log them
const reversedMessages = [
  " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC",
  "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB",
  "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY",
  ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ"
];

reversedMessages.forEach((rev, i) => {
  const decoded = rev.split('').reverse().join('').trim();
  console.log(`Message ${i + 1}: ${decoded}`);
});

// Task 2: Write your own short messages of inspiration, then reverse them and log both
const inspirations = [
  "Kay, keep going — you're capable of great things.",
  "Trust your skills and code with confidence."
];

inspirations.forEach((msg, i) => {
  const reversed = msg.split('').reverse().join('');
  console.log(`\nInspiration ${i + 1} (original): ${msg}`);
  console.log(`Inspiration ${i + 1} (reversed): ${reversed}`);
});
