const quotes = [
{text:"Believe in yourself.",category:"success"},
{text:"Never give up.",category:"success"},
{text:"Success is not final.",category:"success"},
{text:"Failure is not fatal.",category:"success"},
{text:"Work hard in silence.",category:"success"},
{text:"Dream big and act.",category:"success"},
{text:"Push yourself every day.",category:"success"},
{text:"Stay focused on your goals.",category:"success"},
{text:"Success starts with self-discipline.",category:"success"},
{text:"Be stronger than your excuses.",category:"success"},
{text:"Don’t stop until you’re proud.",category:"success"},
{text:"Make it happen.",category:"success"},
{text:"Stay hungry for success.",category:"success"},
{text:"Success is earned, not given.",category:"success"},
{text:"Be unstoppable.",category:"success"},
{text:"Keep pushing forward.",category:"success"},
{text:"Winners never quit.",category:"success"},
{text:"Stay committed.",category:"success"},
{text:"Rise and grind.",category:"success"},
{text:"Turn dreams into reality.",category:"success"},
{text:"Consistency is key.",category:"success"},
{text:"Hard work beats talent.",category:"success"},
{text:"Focus and win.",category:"success"},
{text:"Be fearless in pursuit.",category:"success"},
{text:"Success loves preparation.",category:"success"},

{text:"Study hard, your future depends on it.",category:"study"},
{text:"Learning never exhausts the mind.",category:"study"},
{text:"Education is the key to success.",category:"study"},
{text:"Focus on your studies.",category:"study"},
{text:"Practice makes perfect.",category:"study"},
{text:"Knowledge is power.",category:"study"},
{text:"Study now, shine later.",category:"study"},
{text:"Stay dedicated to learning.",category:"study"},
{text:"Every day is a chance to learn.",category:"study"},
{text:"Read more, grow more.",category:"study"},
{text:"Learn something new daily.",category:"study"},
{text:"Discipline leads to knowledge.",category:"study"},
{text:"Your books are your best friends.",category:"study"},
{text:"Study with passion.",category:"study"},
{text:"Hard study leads to success.",category:"study"},
{text:"Stay focused on education.",category:"study"},
{text:"Keep learning always.",category:"study"},
{text:"Smart work + hard work = success.",category:"study"},
{text:"Be curious and keep learning.",category:"study"},
{text:"Education builds your future.",category:"study"},
{text:"Learning is a lifelong journey.",category:"study"},
{text:"Stay sharp, keep studying.",category:"study"},
{text:"Study today, lead tomorrow.",category:"study"},
{text:"Effort in study never fails.",category:"study"},
{text:"Grow through learning.",category:"study"},

{text:"Life is beautiful.",category:"life"},
{text:"Enjoy every moment.",category:"life"},
{text:"Life is what you make it.",category:"life"},
{text:"Stay positive in life.",category:"life"},
{text:"Live without regrets.",category:"life"},
{text:"Happiness is a choice.",category:"life"},
{text:"Live your best life.",category:"life"},
{text:"Life is short, make it count.",category:"life"},
{text:"Smile and keep going.",category:"life"},
{text:"Stay strong in tough times.",category:"life"},
{text:"Life teaches valuable lessons.",category:"life"},
{text:"Be grateful for today.",category:"life"},
{text:"Live in the present moment.",category:"life"},
{text:"Life is a journey.",category:"life"},
{text:"Make memories every day.",category:"life"},
{text:"Stay calm and enjoy life.",category:"life"},
{text:"Choose happiness daily.",category:"life"},
{text:"Life is full of opportunities.",category:"life"},
{text:"Stay positive always.",category:"life"},
{text:"Live with purpose.",category:"life"},
{text:"Life is your story.",category:"life"},
{text:"Be kind and live well.",category:"life"},
{text:"Life rewards patience.",category:"life"},
{text:"Stay hopeful in life.",category:"life"},
{text:"Enjoy the little things.",category:"life"},

{text:"Be confident.",category:"success"},
{text:"Stay motivated.",category:"success"},
{text:"Keep improving.",category:"success"},
{text:"Stay disciplined.",category:"success"},
{text:"Work for your dreams.",category:"success"},
{text:"Keep achieving.",category:"success"},
{text:"Stay determined.",category:"success"},
{text:"Be bold and brave.",category:"success"},
{text:"Keep winning.",category:"success"},
{text:"Stay powerful.",category:"success"},
{text:"Be ambitious.",category:"success"},
{text:"Stay driven.",category:"success"},
{text:"Never settle.",category:"success"},
{text:"Keep grinding.",category:"success"},
{text:"Stay focused always.",category:"success"},
{text:"Be your best version.",category:"success"},
{text:"Stay strong always.",category:"success"},
{text:"Push beyond limits.",category:"success"},
{text:"Keep growing daily.",category:"success"},
{text:"Stay consistent always.",category:"success"},
{text:"Be fearless always.",category:"success"},
{text:"Stay unstoppable.",category:"success"},
{text:"Keep moving forward.",category:"success"},
{text:"Stay committed always.",category:"success"},
{text:"Win every day.",category:"success"}
];

let currentCategory = "all";

// 🎨 Display quotes
function displayQuotes(filter = "") {
    const container = document.getElementById("quotesList");
    container.innerHTML = "";

    let filtered = quotes.filter(q => {
        return (
            (currentCategory === "all" || q.category === currentCategory) &&
            q.text.toLowerCase().includes(filter.toLowerCase())
        );
    });

    filtered.forEach((q, index) => {
        let div = document.createElement("div");
        div.classList.add("quote-item");

        let text = document.createElement("span");
        text.innerText = (index + 1) + ". " + q.text;

        let btn = document.createElement("button");
        btn.innerText = "📋 Copy";

        btn.onclick = () => {
            navigator.clipboard.writeText(q.text);
            btn.innerText = "✅";
            setTimeout(() => btn.innerText = "📋 Copy", 1000);
        };

        div.appendChild(text);
        div.appendChild(btn);

        container.appendChild(div);
    });
}

// 🔍 Search
document.getElementById("search").addEventListener("input", (e) => {
    displayQuotes(e.target.value);
});

// 🎯 Category filter
function filterCategory(cat) {
    currentCategory = cat;
    displayQuotes(document.getElementById("search").value);
}

// 🚀 Load all initially
displayQuotes();    