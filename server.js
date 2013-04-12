var http = require("http");

var b1 = ["oven-baked", "house-cured", "butter-basted", "creamy", "crispy", "hot", "smoked", "slow-cooked", "sweet", "savory", "Ivo's", "skillet-fried", "organic", "artisan"];
var b2 = ["ham", "egg", "salmon", "strawberry", "lemon", "blueberry", "banana", "apple", "vanilla", "rosemary", "nutella", "buttermilk", "cinnamon", "molasses", "brown sugar", "pecan", "bourbon"];
var b3 = ["cheddar", "cream cheese", "mascarpone", "ricotta", "champagne", "potato", "yogurt", "bacon", "sausage", "shrimp", "pork belly", "trout", "poppy seed", "maple syrup"];
var b4 = ["omelette", "bagel", "biscuits", "waffles", "pancakes", "croque monsieur", "beignets", "dutch baby", "strata", "fritatta", "quiche", "croissant", "benedict", "scone", "muffin", "brioche", "scramble", "hash", "toast", "french toast", "grits", "salad", "tartine", "sticky buns", "chilaquiles", "spoonbread", "oatmeal"];

var brunch = function (request,response) {
    return b1[Math.floor(Math.random()*b1.length)] + " " + b2[Math.floor(Math.random()*b2.length)] + 
     " and " + b3[Math.floor(Math.random()*b3.length)] + " " + b4[Math.floor(Math.random()*b4.length)];
}

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write(brunch());
  response.end();
}).listen(process.env.PORT || 8888);

console.log("up!");