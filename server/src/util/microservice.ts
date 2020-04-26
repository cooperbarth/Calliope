import axios from "axios";
import config from "../config/config";
import { Diagnostic } from "vscode-languageserver";

const BASE_URL = config.microserviceUrl;

export const sendDiagnostic = (diagnostic: Diagnostic, userId: string) => {
    axios.post(`${BASE_URL}/diagnostics`, {
        message: diagnostic.message,
        severity: diagnostic.severity,
        userId: userId
    })
    //.then(console.log)
    //.catch(console.error);
}