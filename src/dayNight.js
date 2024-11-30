import daynight from "daynight";

const isLight = daynight().light;
console.log(`Is it light outside? ${isLight ? "Yes" : "No"}`);
