
# MCP Extras

This repository contains a collection of extra features and enhancements for the Model Context Protocol (MCP) that are not part of the official MCP specification.

* [Loopback Transport](modules/loopback/README.md): A transport implementation that allows for local communication between MCP clients and servers without the need for network communication.

# External Links

* [Github](https://github.com/phil-rice/mcp-extras)
* [npmjs](https://www.npmjs.com/org/mcp-extras)

# Installation and compilation

This repository uses yarn workspaces to manage dependencies. Once you have cloned the repository,  to install the dependendencies, run the following command in the root directory:

```bash
yarn 
```

# Testing

You can individually run the tests for each package by running the following command in the package directory:

```bash
yarn test
```

Alternatively read the [CONTRIBUTING](CONTRIBUTING.md) file for more information on how to run the tests in all the packages in one command.

