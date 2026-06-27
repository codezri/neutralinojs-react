import { app, events, init, os } from "@neutralinojs/lib";

export let globalVariables = {
  NL_MODE: window.NL_MODE,
  NL_PORT: window.NL_PORT,
  NL_ARGS: window.NL_ARGS,
  NL_TOKEN: window.NL_TOKEN,
  NL_CVERSION: window.NL_CVERSION,
  NL_APPID: window.NL_APPID,
  NL_APPVERSION: window.NL_APPVERSION,
  NL_PATH: window.NL_PATH,
  NL_DATAPATH: window.NL_DATAPATH,
  NL_EXTENABLED: window.NL_EXTENABLED,
  NL_GINJECTED: window.NL_GINJECTED,
  NL_CINJECTED: window.NL_CINJECTED,
  NL_OS: window.NL_OS,
  NL_ARCH: window.NL_ARCH,
  NL_VERSION: window.NL_VERSION,
  NL_CWD: window.NL_CWD,
  NL_PID: window.NL_PID,
  NL_RESMODE: window.NL_RESMODE,
  NL_CCOMMIT: window.NL_CCOMMIT,
  NL_CMETHODS: window.NL_CMETHODS,
};

// View globalVariables
// console.log(globalVariables);

export function neuInit() {
  init();

  events.on("trayMenuItemClicked", (event) => {
    switch (event.detail.id) {
      case "VERSION":
        os.showMessageBox(
          "Version information",
          `Neutralinojs server: v${globalVariables.NL_VERSION} | Neutralinojs client: v${globalVariables.NL_CVERSION}`,
        );
        break;
      case "DOCS":
        os.open("https://neutralino.js.org/docs");
        break;
      case "QUIT":
        app.exit();
        break;
    }
  });

  events.on("windowClose", () => {
    app.exit();
  });

  if (globalVariables.NL_OS != "Darwin") {
    if (globalVariables.NL_MODE != "window") {
      console.log("INFO: Tray menu is only available in the window mode.");
      return;
    }

    let isDEV = import.meta.env.DEV;

    let tray = {
      icon: `/react-src/${isDEV ? "public" : "dist"}/trayIcon.png`,
      menuItems: [
        { id: "VERSION", text: "Show Version" },
        { id: "DOCS", text: "Open Docs" },
        { id: "SEP", text: "-" },
        { id: "QUIT", text: "Quit" },
      ],
    };

    os.setTray(tray);
  }
}
