# parcel-transformer-mattercraft-example

## Overview

This example project, originally exported from Mattercraft, demonstrates how to set up and serve a [Mattercraft](https://zap.works/mattercraft/) project using Parcel and the [@zappar/parcel-transformer-mattercraft](https://www.npmjs.com/package/@zappar/parcel-transformer-mattercraft) plugin.

The source files of the Mattercraft project have been relocated to a custom directory named `project` for organizational purposes. This project focuses on integrating HTML within Mattercraft scenes to create interactive user interfaces.

### Key Features

- Integration of HTML and Button nodes for user interaction.
- Use of Animation states in the 'UI' layer for UI visibility control.
- A customizable splash page for a better user experience.

### Prerequisites

- Ensure `Parcel` `@zappar/parcel-transformer-mattercraft` are installed. If not, install via npm:

```bash
npm i --save-dev parcel @zappar/parcel-transformer-mattercraft
```

## Installation

1 - Clone or download this example project.
2 - Navigate to the project's root directory.
3 - Install the necessary dependencies:

```bash
npm install
```

## Project Structure

- `/project`: Contains the Mattercraft project files that were exported and then moved into this directory.
- `Root Directory`: Contains package.json and .parcelrc.

## Configuration

### Parcel Configuration

The `.parcelrc` file in the root directory is configured as follows:

```json
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.zcomp": ["@zappar/parcel-transformer-mattercraft"]
  }
}
```

This setup instructs Parcel to process `.zcomp` files using the `@zappar/parcel-transformer-mattercraft.`

### Package.json Scripts

The `package.json` file includes these scripts:

```json
"scripts": {
  "start": "parcel serve ./project/index.html",
  "build": "parcel build ./project/index.html"
}
```

These scripts reference the relocated project files in the `/project` directory.

## Usage

To start the development server, run:

```bash
npm run start
```

To build the project for production, run:

```bash
npm run build
```

### HTTPS Requirement

For camera access, secure context (HTTPS) is required. The start script can be modified to include the --https flag:

```json
"scripts": {
  "start": "parcel serve ./project/src/index.html --https",
  "build": "parcel build ./project/src/index.html"
}
```

This README provides a complete guide for setting up and running the local Mattercraft project.

For more detailed information on Mattercraft's specific features and configurations, please refer to the Mattercraft, Parcel and transformer documentation pages.

- <https://docs.zap.works/mattercraft>
- <https://parceljs.org/docs/>
- <https://www.npmjs.com/package/@zappar/parcel-transformer-mattercraft>
