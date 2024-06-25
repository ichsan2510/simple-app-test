## Run Locally

To run the project locally, firstly clone the project.

```bash
  git clone https://github.com/ichsan2510/simple-app-test.git
```

Go to the service directory

```bash
  cd simple-uapp-test/service/validation
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node app.js
```
## For Run With Docker

```bash
  docker build -t validation .

```
```bash
  docker run -d -p 3000:3000 validation 
```
