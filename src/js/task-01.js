const categories = {
  Animals: ["Cat", "Hamster", "Horse", "Parrot"],
  Products: ["Bread", "Prasley", "Cheese"],
  Technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
};

const keys = Object.keys(categories);
console.log("Number of categories: ", keys.length);

for (const category in categories) {
  console.log("Category: ", category);
  console.log("Elements: ", categories[category].length);
}
