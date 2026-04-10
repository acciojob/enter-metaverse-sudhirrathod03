//your JS code here. If required.
let btn = document.getElementById("enterBtn")
let status = document.getElementById("status")

btn.addEventListener("click", ()=>{
	status.outerHTML = "<h1>Enter Metaverse</h1>"
})