"use strict";const o=require("electron"),n=require("path");require("electron-squirrel-startup")&&o.app.quit();let e;o.app.on("ready",a);o.app.on("activate",()=>{o.BrowserWindow.getAllWindows().length===0&&a()});o.app.on("window-all-closed",()=>{process.platform!=="darwin"&&o.app.quit()});function a(){return e=new o.BrowserWindow({width:860,height:600,backgroundColor:"#202020",show:!1,autoHideMenuBar:!0,icon:n.resolve("assets/favicon.ico"),webPreferences:{nodeIntegration:!1,contextIsolation:!0,nodeIntegrationInWorker:!1,nodeIntegrationInSubFrames:!1,preload:n.join(__dirname,"preload.js"),sandbox:!1}}),e.loadURL("http://localhost:5173"),e.on("ready-to-show",()=>{e&&e.show()}),e.on("close",()=>{e=null,o.app.quit()}),e}