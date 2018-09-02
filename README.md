# eslint-config-tierion

This is an `eslint` shareable config (https://eslint.org/docs/developer-guide/shareable-configs). It contains rules used by Tierion for both NodeJS and React code bases.

## Use this configuration in projects

### Installation

To use `eslint` with this configuration, two packages are necessary:

```bash
npm i -D eslint eslint-config-tierion
```

### Configuration

Once the packages are installed, you can create a `.eslintrc.json` file with the configuration that matches the project.

#### NodeJS

```json
{
  "extends": "eslint-config-tierion"
}
```

#### React

```json
{
  "extends": "eslint-config-tierion/react"
}
```
