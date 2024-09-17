import base64 from "base-64";

const username = "CSPsystem";
const password = "sys13";
const authorization = "Basic " + base64.encode(username + ":" + password);

export default authorization;
