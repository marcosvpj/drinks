# Search drinks recipes

## Build

```bash
npm install
npm run build
```

## Usage

```bash
./dist/cli.js --ingredient vodka
./dist/cli.js --ingredient "vodka, coffee liqueur"
```

## Help

```
./dist/cli.js

usage: cli.js [--ingredient "i1, i2..."] [--all]
              [--name "drink name"]
              [--id drink-id]

ingredient  search drink by ingredients names separated by comma
   all      show drinks who fit only one of the ingredients
name        search drink by name
id          get drink recipe by id
```