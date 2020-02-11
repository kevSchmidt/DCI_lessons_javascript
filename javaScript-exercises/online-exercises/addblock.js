let add_counter = 0;
setInterval(() => {
  let long_add = document.querySelector("button.ytp-ad-skip-button");
  let short_add = document.querySelector("button.ytp-ad-overlay-close-button");
  if (long_add) {
    long_add.click();
    add_counter++;
    console.log(`You've skiped ${add_counter} add(s)!`);
  } else if (short_add) {
    short_add.click();
    add_counter++;
    console.log(`You've skiped ${add_counter} add(s)!`);
  }
}, 1000);
