var quoteOutput = document.getElementById("quoteOutput");
var authorOutput = document.getElementById("authorOutput");
var quotes = [
    `“Be yourself; everyone else is already taken.”`,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”`,
    `“So many books, so little time.”`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
    `“A room without books is like a body without a soul.”`,
    `“You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.”`,
    `“It’s no use going back to yesterday, because I was a different person then.”`,
    `“Do one thing every day that scares you.”`,
    `“We are what we pretend to be, so we must be careful about what we pretend to be.”`,
    `“Look again at that dot. That's here. That's home. That's us…”`,
];
var authors = [
    `― Oscar Wilde`,
    `― Marilyn Monroe`,
    `― Frank Zappa`,
    `― Albert Einstein`,
    `― Marcus Tullius Cicero`,
    `― William W. Purkey`,
    `― Lewis Carroll`,
    `― Eleanor Roosevelt`,
    `― Kurt Vonnegut`,
    `― Carl Sagan`,
];
function generateQuote() {
    var number = generateNumber();
    console.log(number);

    quoteOutput.innerText = quotes[number];
    authorOutput.innerText = authors[number];
}
var current=-1;
function generateNumber(){
    var randomNumber = Math.trunc(Math.random() * 10);
    if (randomNumber===current) {
        return generateNumber();
    }
    current=randomNumber;
    return randomNumber
}