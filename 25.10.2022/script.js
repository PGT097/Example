const divcontainer = document.createElement("div");
const body = document.querySelector("body");
const button = document.querySelector(".btn");
const text = document.createElement()
divcontainer.style.display = "flex";
divcontainer.style.flexWrap = "wrap";

body.append(divcontainer);
button.addEventListener("click", () => {
    const divsubcontainer = document.createElement("div");
    divcontainer.append(divsubcontainer);
    divsubcontainer.style.width = "100px";
    divsubcontainer.style.height = "100px";
    divsubcontainer.style.border = " 1px solid black";
    divsubcontainer.style.margin = "5px";
    divsubcontainer.style.backgroundColor =
        "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    divsubcontainer.addEventListener("mouseenter", () => {
        const p = document.createElement("p")
        p.textContent = "Hello";
        p.style.textAlign: center;
        divsubcontainer.style.backgroundColor =
            "#" + (((1 << 24) * Math.random()) | 0).toString(16);
    });
});

