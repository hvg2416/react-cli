import { ChildProcess, exec } from "child_process";
import { ScaffoldReactAppParams } from "../models/scaffold_react_app_params";

const scaffoldReactApp = (params: ScaffoldReactAppParams) => {
  return new Promise<String>((resolve, reject) => {
    const chp: ChildProcess = exec(
      `npx create-react-app ${params.applicationName} ${!params.js? '--template typescript': ""}`
    );
    chp.stdout!.on("data", (msg: Buffer) => {
      console.log(msg.toString());
    });
    chp.on('error', (err) => {
      reject(err);
    });
    chp.addListener("exit", (code) => {
      resolve("Done");
    });
  });
};

export default scaffoldReactApp;
