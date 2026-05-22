---
title: Telstra SIM Swap Detection API
summary: A high-performance, asynchronous FastAPI microservice engineered to process real-time event-driven data streaming via Apache Kafka to detect fraudulent cellular activity with sub-100ms latency. Built as part of my university capstone project with Telstra.
tech: ["python", "fastapi", "postgresql", "docker", "kubernetes", "apache kafka", "pytest", "prometheus"]
featured: true
order: 1
---

## Industry Capstone Project

This project was built as an industry capstone project for Telstra to tackle cellular identity theft. Working in a team of 5 developers, our brief was to build an infrastructure tool that could handle heavy transactional throughput, process network events instantly, and expose a clean API surface area for real-time monitoring of SIM swap events.

### The Solution

We chose to build the microservice using **Python** and **FastAPI** because we needed a framework that supported native asynchronous event loops out of the box. This allowed us to handle rapid, concurrent network requests without blocking the entire server pipeline.

To prevent traffic spikes from dropping data, we sat **Apache Kafka** in front of our workers. Instead of forcing our database to process every network event on impact, Kafka absorbs the raw incoming stream instantly, allowing our decoupled FastAPI workers to pull from queue partitions and run fraud validation checks safely at their own pace.

### Engineering Breakdown

* **The Ingestion Layer:** Network transaction telemetries are produced asynchronously into partitioned **Apache Kafka** topics to prevent data loss during traffic spikes.
* **The Worker Layer:** A distributed **FastAPI** consumer pool processes the message logs concurrently, running state validation checks against historical network records stored in a **PostgreSQL** database cluster.
* **The Observability Layer:** **Prometheus** collectors wrap the application runtime, scraping live telemetry data to ensure operational health.

## Key Engineering Milestones

### 1. Achieving Sub-100ms Latency

To meet Telstra's low-latency constraints, we avoided synchronous database blocks. Using Python's native `async/await` runtime loops paired with asynchronous connection pooling allowed us to parse data structures, evaluate fraudulent activity flags, and return verification states in **under 100 milliseconds**.

### 2. Client Stakeholder Delivery

Because this was a corporate integration project, engineering was only half the challenge. We led weekly technical progress and synchronization meetings with the client, translating architecture decisions into clear business outcomes and managing scope adjustments across five sprints.

### 3. Container Orchestration & CI/CD

To ensure seamless handover documentation, the service was containerized using **Docker** and deployed on a **Kubernetes** environment. We enforced strict framework stability by running automated **pytest** regression suites on every GitHub Actions pull request.

While this was a complex project with many moving parts, the team's dedication to quality and collaboration resulted in a robust solution that met Telstra's requirements.
