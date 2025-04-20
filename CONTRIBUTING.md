# Contributing to the project

We welcome contributions to the @mcpextras! This document outlines the process for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR-USERNAME/typescript-sdk.git`
3. Install dependencies: `yarn`                           -- This project
   requires [yarn workspaces](https://yarnpkg.com/features/workspaces)
4. Run tests: `yarn test`                                  -- or go into each module and run `yarn test`

## Development Process

1. Create a new branch for your changes
2. Make your changes
3. `yarn lint`  -- runs the linter in every package
4. `yarn test`  -- runs the tests in every package
5. `yarn coverage` -- runs the tests and generates coverage reports
6. `yarn coverage:open` -- opens the coverage reports in your browser
7. Submit a pull request

## Pull Request Guidelines

- Follow the existing code style
- Include tests for new functionality. 
- Update documentation as needed
- Keep changes focused and atomic
- Provide a clear description of changes


# Repository Management

This repository uses [laoban](https:/npmjs.com/package/laoban) to manage the repository.
To install laoban, run the following command. Note you can use it without installing it globally and use `yarn laoban` instead

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
laoban status   # reports the 'status' of all packages. Importantly if tests have failed it sets the exit code to 1
laoban clean    # removes most temporary files associated with laoban
laoban admin profile  # How long do things like tests take to run?
laoban coverage # Run tests and generate coverage reports
laoban coverage-copy # Copy coverage reports to the coverage subdirectory of the  root directory. Now yarn coverage:report will work

laoban publish # Publish all packages to npm. Needs permissions
laoban pack    # Pack all packages into tarballs

laoban compile # Compile all packages
laoban rmDist  # Remove all dist directories
laoban rmNodeModules # Remove all node_modules directories
```

The file laoban.json contains the configuration for laoban. 
In it can be found variables for common version number. In addition there are
macros to help with things like code coverage

