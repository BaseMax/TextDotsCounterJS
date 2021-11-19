// Elements
const elm_input = document.querySelector(".input");
const elm_result = document.querySelector(".result");

// Event
document.querySelector(".btn").addEventListener("click", () => {
  let count = 0;
  const length = elm_input.value.length;
  const chars = elm_input.value.split("");
  chars.forEach((ch, index) => {
    if(ch === "ی" && index < length - 1) {
      if(chars[index + 1] === " ") { // TODO: پشتیبانی از نیم فاصله
        count += 2;
      }
    }

    const num = parseInt(obj[ch]);
    count += num || 0;
  });
  elm_result.innerText = count;
});
