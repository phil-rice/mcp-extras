# @mcpextras/loopback

A simple, efficient **in-memory Loopback Transport** implementation for the **Model Context Protocol (MCP)**, 
enabling MCP client-server interactions within the same execution context.


---

## Overview

The **Loopback Transport** simplifies development and testing of MCP-based applications by providing an in-memory communication channel.
It's ideal for browser-based applications, integration tests, rapid prototyping, and scenarios where external network transports 
(such as SSE or HTTP) add unnecessary complexity or overhead.

This transport is fully compatible with the [Model Context Protocol (MCP)](https://modelcontextprotocol.io) 
and can be seamlessly integrated into existing MCP-based projects.

---

## Installation

Install via npm or yarn. One of the following commands will work:

```bash
npm install @mcpextras/loopback
yarn add @mcpextras/loopback
```

# MCP Extras

This repository contains a collection of extra features and enhancements for the Model Context Protocol (MCP) that are not part of the official MCP specification.

* [Loopback Transport](modules/loopback/README.md): A transport implementation that allows for local communication between MCP clients and servers without the need for network communication.

# Compiling

This repository uses yarn workspaces to manage dependencies. To install the dependendencies, run the following command in the root directory:

```bash
yarn 
```

# Testing

You can individually run the tests for each package by running the following command in the package directory:

```bash
yarn test
```

Alternatively read the [CONTRIBUTING](CONTRIBUTING.md) file for more information on how to run the tests in all the packages in one command.

