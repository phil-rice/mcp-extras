# Contributing to the project


We welcome contributions to the @mcpextras! This document outlines the process for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/typescript-sdk.git`
3. Install dependencies: `yarn`                           -- This project requires [yarn workspaces](https://yarnpkg.com/features/workspaces) 
4. Install the repo management tool: `npm i -g laoban`    -- This is optional but makes running tests easier
5. Run tests: `laoban test`                               -- or go into each module and run `yarn test`

## Development Process

1. Create a new branch for your changes
2. Make your changes
3. Either `laoban lint` to run the linter everywhere or `yarn lint` in each module
4. Either `laoban test` to run the tests everywhere or `yarn test` in each module
5. Submit a pull request

## Pull Request Guidelines

- Follow the existing code style
- Include tests for new functionality
- Update documentation as needed
- Keep changes focused and atomic
- Provide a clear description of changes


## Test coverage
```shell
laoban coverage # Run tests and generate coverage reports
laoban coverage-copy # Copy coverage reports to the coverage subdirectory of the  root directory. Now yarn coverage:report will work
yarn coverage:report # Generate coverage reports
```
At this point there is a index.html file in the coverage directory. Open it in your browser to see the coverage reports.

# Repository Management

This repository uses [laoban](https:/npmjs.com/package/laoban) to manage the repository.
To install laoban, run the following command:

```bash
npm i -g laoban
```

`laoban` is only used for repository management and is not required to run the code. There are detailed instructions
at the above link.

`laoban` makes it very easy to write scripts that run across the workspaces, and to manage the packages in it.

Useful commands include:
```shell
laoban update --minor # Update all packages to the latest minor version

laoban test
laoban coverage # Run tests and generate coverage reports
laoban coverage-copy # Copy coverage reports to the coverage subdirectory of the  root directory. Now yarn coverage:report will work

laoban publish # Publish all packages to npm. Needs permissions
laoban pack    # Pack all packages into tarballs

laoban compile # Compile all packages
laoban rmDist  # Remove all dist directories
laoban rmNodeModules # Remove all node_modules directories
```

The file laoban.json contains the configuration for laoban. In it can be found variables for common version number. In addition there are
macros to help with things like code coverage

# Running tests

The tests should run in your IDE of preference.

In addition
```shell
laoban test # Run all tests
```

If there are errors it gives a summary at the end and you can look at the logs. In addition each package will have a `.log` file in it which is useful