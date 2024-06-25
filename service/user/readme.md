## Run Locally

To run the project locally, firstly clone the project.

```bash
  git clone https://github.com/ichsan2510/simple-app-test.git
```

Go to the service directory

```bash
  cd simple-uapp-test/service/user
```

Install dependencies

```bash
  go mod download
```

Start the server

```bash
  go run main.go
```
## For Run With Docker

```bash
  docker build -t user .

```
```bash
  docker run -d -p 8080:8080 user 
```
