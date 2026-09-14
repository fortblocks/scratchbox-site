const filespec = [
  { name: "Screenshot 09-12", x: 18, y: 18, toX: 210, toY: -12, tone: "" },
  { name: "Screenshot 09-11", x: 72, y: 36, toX: 180, toY: -20, tone: "blue" },
  { name: "Screen Rec 4", x: 128, y: 16, toX: 140, toY: -16, tone: "red" },
  { name: "Screenshot 09-10", x: 184, y: 48, toX: 110, toY: -24, tone: "" },
  { name: "receipt.png", x: 28, y: 88, toX: 196, toY: 6, tone: "blue" },
  { name: "notes-tmp", x: 96, y: 108, toX: 150, toY: 0, tone: "" },
  { name: "Screenshot 09-09", x: 160, y: 96, toX: 124, toY: -6, tone: "red" },
  { name: "export.pdf", x: 220, y: 28, toX: 90, toY: -12, tone: "" },
  { name: "Screenshot 09-08", x: 248, y: 82, toX: 70, toY: 6, tone: "blue" },
];

const desktop = document.getElementById("desktop");
const os = document.getElementById("os");
const tray = document.getElementById("tray");
const caption = document.getElementById("caption");
const btnDirty = document.getElementById("btnDirty");
const btnClean = document.getElementById("btnClean");

if (desktop && os) {
  desktop.innerHTML = filespec
    .map(
      (f) =>
        `<div class="file" style="left:${f.x}px;top:${f.y}px;--to-x:${f.toX}px;--to-y:${f.toY}px">
          <div class="thumb ${f.tone}"></div>${f.name}
        </div>`
    )
    .join("");

  const setClean = (on) => {
    os.classList.toggle("clean", on);
    if (tray) tray.classList.toggle("on", on);
    if (btnDirty) btnDirty.classList.toggle("active", !on);
    if (btnClean) btnClean.classList.toggle("active", on);
    if (caption) {
      caption.textContent = on
        ? "Inbox has the mess. Desktop is empty."
        : "A normal Mac after a day of screenshots.";
    }
  };

  btnDirty?.addEventListener("click", () => setClean(false));
  btnClean?.addEventListener("click", () => setClean(true));

  let clean = false;
  setInterval(() => {
    clean = !clean;
    setClean(clean);
  }, 4200);
}
