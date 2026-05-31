# Phase 1: Vulnerable Lab Setup

## Target Application
- **App:** OWASP Juice Shop (Node.js)
- **Purpose:** Deliberately vulnerable app for security scanning practice
- **Source:** https://github.com/juice-shop/juice-shop

## Setup Commands
```bash
docker run --rm -d -p 3000:3000 --name juiceshop bkimminich/juice-shop
```

## Verification
- `docker ps` → Container status: Up, Port 0.0.0.0:3000->3000/tcp
- `curl http://localhost:3000` → HTTP 200 OK
- Browser: http://localhost:3000 → Juice Shop storefront loads

## Key Concepts
- Docker `--rm` flag: auto-cleans container on stop
- `-p host:container` port mapping pattern
- Two-layer verification: container level (docker ps) + app level (curl)

## Known Vulnerabilities (OWASP Top 10)
- SQL Injection (Login bypass)
- XSS (Cross-site scripting in search)
- Broken Access Control (Admin panel exposure)
- Sensitive Data Exposure (User credentials)
