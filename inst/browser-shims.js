// This file contains shims for various browser APIs that are needed by sass.

import * as os from "os";
import * as std from "std";

class URL {
  constructor(url) {
    this.href = url;
    this.parse(url);
  }

  parse(url) {
    const protocolEndIndex = url.indexOf("://");
    if (protocolEndIndex !== -1) {
      this.protocol = url.slice(0, protocolEndIndex);
      url = url.slice(protocolEndIndex + 3);
    } else {
      this.protocol = "";
    }

    const pathStartIndex = url.indexOf("/");
    if (pathStartIndex !== -1) {
      this.hostname = url.slice(0, pathStartIndex);
      url = url.slice(pathStartIndex);
    } else {
      this.hostname = url;
      url = "";
    }

    const portStartIndex = this.hostname.indexOf(":");
    if (portStartIndex !== -1) {
      this.port = this.hostname.slice(portStartIndex + 1);
      this.hostname = this.hostname.slice(0, portStartIndex);
    } else {
      this.port = "";
    }

    const queryStartIndex = url.indexOf("?");
    if (queryStartIndex !== -1) {
      this.pathname = url.slice(0, queryStartIndex);
      this.search = url.slice(queryStartIndex);
    } else {
      this.pathname = url;
      this.search = "";
    }

    const hashStartIndex = this.search.indexOf("#");
    if (hashStartIndex !== -1) {
      this.hash = this.search.slice(hashStartIndex);
      this.search = this.search.slice(0, hashStartIndex);
    } else {
      this.hash = "";
    }
  }

  toString() {
    let result = "";
    if (this.protocol) {
      result += this.protocol + "://";
    }
    result += this.hostname;
    if (this.port) {
      result += ":" + this.port;
    }
    result += this.pathname;
    result += this.search;
    result += this.hash;
    return result;
  }
}

globalThis.URL = URL;

console.error = (...args) => {
  const stderr = std.err;
  const errorMessage = args.map(String).join(" ") + "\n";
  stderr.puts(errorMessage);
};

globalThis.console = console;

globalThis.location = new URL(`file://${os.getcwd()[0]}/`);
