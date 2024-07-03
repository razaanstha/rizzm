import Rizzm from "./src/main/Rizzm";

const rizzler = new Rizzm();

setTimeout(() => {
  console.log("Rizzing up later elements");
  rizzler.updateElements(".js-rizz-later");
}, 5000);
