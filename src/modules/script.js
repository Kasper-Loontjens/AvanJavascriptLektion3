const p = document.querySelector("#helloP");
p.innerHTML = "Tjo";

const img = document.createElement('img');
document.body.append(img);

//URL(relativePath, moduleUrl)
const imgUrl = new URL('../media/placeholder.jpg', import.meta.url);
img.src = imgUrl.href;

console.log(imgUrl);
console.log(import.meta);

