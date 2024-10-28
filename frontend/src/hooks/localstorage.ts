"use client"

const windo = typeof window;
console.log(windo);

let localUser :string | null;
if(windo !== "undefined"){
  localUser = localStorage.getItem("user")
}else(
  localUser = "null"
)
// export const localUser = window?.localStorage.getItem("user");
export { localUser }