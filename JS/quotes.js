const quotes = [
  {
    quote : "I never dreamed about success, I worked for it.",
    author : "Estee Laouder"
  },

  {
    quote : "The road to success and the road to failure are almost exactly the same.",
    author : " Colin R. Davis"
  },

  {
    quote : "It is better to fail in originality than to succeed in imitation.",
    author : "Herman Melville"
  },

  {
    quote : "Success is walking from failure to failure with no loss of enthusiasm.",
    author : "Winston Churchill"
  },

  {
    quote : "All progress takes place outside the comfort zone.",
    author : " Michael John Bobak"
  },

  {
    quote : "Success usually comes to those who are too busy to be looking for it.",
    author : "Henry David Thoreau"
  },

  {
    quote : "The way to get started is to quit talking and begin doing.",
    author : "Walt Disney"
  }
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

quote.innerHTML = quotes[Math.floor(Math.random()*quotes.length)].quote;
author.innerHTML = `- ${quotes[Math.floor(Math.random()*quotes.length)].author}`;

//Math.ceil(값) -> ex) 1.1은 2로 올려줌 1.0빼고 모두 올림
//Math.floor(값) - > ex) 1.9는 1로 내림