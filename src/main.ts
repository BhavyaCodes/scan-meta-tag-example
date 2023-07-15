import "./style.css";

const inputElement = document.getElementById("link-input") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", async () => {
  const link = inputElement.value;
  console.log(link);

  const html = await fetch(link).then((res) => res.text());
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  // console.log(DOMParser)
  // console.log(html);
  console.log(doc);

  const imageMetaTag = doc.querySelector("meta[property='og:image']");
  console.log(imageMetaTag);

  const imageLink = imageMetaTag?.getAttribute("content");

  console.log(imageLink);
});
