# @mcpextras/loopback

A simple, efficient **in-memory Loopback Transport** implementation for the **Model Context Protocol (MCP)**,
enabling MCP client-server interactions within the same execution context.

# External Links
[Github](https://github.com/phil-rice/mcp-extras)
[npmjs](https://www.npmjs.com/package/@mcp-extras/loopback)
[Discussion in modelcontextprotocol](https://github.com/orgs/modelcontextprotocol/discussions/313)

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

## Usage

```typescript
import {Client} from "@modelcontextprotocol/sdk/client/index.js";
import {Server} from "@modelcontextprotocol/sdk/server/index.js";
import {LoopbackTransport} from "@mcp-extras/loopback";

// Create server and client
const server = new McpServer({ name: "example-server", version: "1.0.0" });
const client = new Client({ name: "example-client", version: "1.0.0" });

// Create loopback transports
const clientTransport = new LoopbackTransport({ name: "client" });
const serverTransport = new LoopbackTransport({ name: "server" });

// Connect transports in-memory
clientTransport.connect(serverTransport);

// Connect to MCP
await server.connect(serverTransport);
await client.connect(clientTransport);
```

# Configuration

```typescript
export type ClientOrServer = 'client' | 'server' | 'unknown';
export type LoopbackTransportConfig = {
    /** If you give this debugging is easier, and it is included in the debug log. Should be client or server */
    name?: ClientOrServer
    /** If true then debug messages will appear in the console */
    debug?: boolean
    /** If true then messages are 'serialised/deserialised'. This means the server gets a totally different copy. While this slows things down it more closely duplicates the behavior of the other transports*/
    stringifyMessage?: boolean
}
//...
//examples:
const transport = new LoopbackTransport(); //Although this works, it's great when developing/debugging to have a name which is 'client' or 'server'
const clientTransport = new LoopbackTransport({name: "client", stringifyMessage: true});
const serverTransport = new LoopbackTransport({name: "server", debug: true});

```

