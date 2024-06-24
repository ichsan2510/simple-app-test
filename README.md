
# Simple User Validation

This is a simple application that serves client request to register and validation of users. This application consists of two backend services, which are user service and validation service. There is no GUI serves by this application, so every interaction with the client is done via REST API call.


## Demo

The demo application could be accessed in [https://34-171-145-83.xip.io](https://34-171-145-83.xip.io). The interaction flow could be explained like below.

#### Register USer

```bash
curl -X POST https://34-171-145-83.xip.io/register -H "Content-Type: application/json" -d '{"username":"testuser", "password":"testpass", "email":"testuser@example.com"}'

```

Record the response for registration user.

```bash
{"username":"testuser","password":"testpass","email":"testuser@example.com"}
```

#### Validating a user

```bash
curl -X POST https://34.171.145.83.xip.io/validate -H "Content-Type: application/json" -d '{"username":"testuser", "password":"testpass"}'
```

Response that is received.

```bash
{"message":"User validated successfully","user":{"username":"testuser","password":"testpass","email":"testuser@example.com"}}
```

## Tech Stack

**Server:** Node, Express, Golang

**CI/CD**: GitHub Actions

**Deployment Orchestration**: Kubernetes, Containerization (e.g Docker)

**Infrastructure Provisioning**: Terraform


## Roadmap

- Migrate from self-managed in-memory database using struct to external in-memory database, such as Redis and Memcached

- Implementing ssl certificate on istio to secure the connection from the public.

- Adding unit test for make sure all function of service already handling with proper use.

- Adding Linter test schenario on pipeline step.

  
