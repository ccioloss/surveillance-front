# Survaillance System

This is the frontend web application for the Survaillance System project. This project was built using React & MUI.

## Instalation

Note: You need to have Node.js and NPM installed on your machine.

Install dependencies

```bash
  npm install
```

Run the application with the Parcel bundler:

```bash
  npm run dev
```

### EMFILE: too many open files

If you encounter 'EMFILE: too many open files' you need to change read file limit or to install a tool like `watchman`. If you don't want to change it you can just delete `.cache` folder and build the application again. (Note that the build might take up to 1s.)

## License

[MIT](https://choosealicense.com/licenses/mit/)
