const textRandom = async () => {
  try {
    const res = await axios.get(`https://api.quotable.io/random`);
    return { success: true, data: res.data };
  } catch (error) {
    console.log("Xatolik sodir boldi" + error);
    return { success: false };
  }
};

const setRandom = async () => {
  const text = document.getElementById("text");
  const span = document.getElementById("span");

  const res = await textRandom();
  if (res.success) {
    console.log(res);
    text.innerHTML = `<i class="fa-solid fa-quote-left" style="font-size: 20px"></i>
    <span class = "text-center p-0" style = "font-size:20px" >${res.data.content}</span>
   `;
    span.innerHTML = `<span class = "p-0 d-flex justify-content-end">- ${res.data.author}</span>`;
  }
};
const bgBtn = document.getElementById("genNew");
const copyBtn = document.getElementById("btnColor");
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
  // color.innerHTML = "#" + randomColor;

  text.style.color = "#" + randomColor;
  span.style.color = "#" + randomColor;
  copyBtn.style.backgroundColor = "#" + randomColor;
  bgBtn.style.backgroundColor = "#" + randomColor;

  setRandom();
};

genNew.addEventListener("click", setBg);
setBg();
const copyText = () => {
  const textToCopy = document.getElementById("text").innerText;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      // Success
      alert("Text copied to clipboard:", textToCopy);
      // You can also show a success message or update UI here
    })
    .catch((error) => {
      // Handle errors
      alert("Unable to copy text to clipboard", error);
      // You can also show an error message or update UI here
    });
};
