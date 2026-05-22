---
title: SuperPrice
summary: A full-stack grocery price comparison platform built with a Java (Spring Boot) REST API and a React (TypeScript) frontend, featuring automated CI/CD validation and cloud deployment.
tech: ["java", "spring boot", "react", "typescript", "mysql", "aws", "docker", "junit"]
repo: https://github.com/Vidyut03/superprice
featured: true
order: 4
---

## Project Overview

SuperPrice is a full-stack web application engineered by a team of 5 developers over 5 months. The platform tracks and compares grocery pricing data, helping users navigate fluctuating item pricing through visual analytics and historical price tracing.

The system is built around a decoupled architecture, isolating a strongly-typed, object-oriented backend service from an interactive, state-managed user interface.

## Engineering Architecture

### 1. Robust Backend Architecture (Spring Boot)

The core backend service was built using **Java** and **Spring Boot**, adhering strictly to enterprise object-oriented programming (OOP) principles. We designed a layered controller-service-repository architecture to isolate business logic:

* **Secure Authentication:** Implemented structured JSON Web Token (JWT) request interceptors to enforce session management.
* **Database Integration:** Engineered relational schemas utilizing **MySQL** to map out cross-referenced tables for stores, product listings, user accounts, and real-time pricing histories.
* **REST API Footprint:** Designed and exposed 10+ decoupled endpoints allowing the client-side UI to fetch parameterized query data smoothly.

### 2. Interactive Client Interface (React & TypeScript)

The frontend was built using **React** and **TypeScript** to guarantee type safety across our data objects. We implemented global state handlers to manage user sessions, dynamic search filters, and an internal notification engine that updates pricing metrics dynamically.

## Collaborative Workflow & Automation

Because this platform was built in a multi-developer environment, maintaining code quality and preventing integration conflicts across parallel branches was critical.

### 1. Git Workflow & Sprints

We managed our scope and feature deliverables using **GitHub Projects**, splitting our milestone requirements across engineering sprints. We adopted a strict feature-branch git workflow, ensuring that no code merged into the main development branch without undergoing peer code reviews via GitHub pull requests.

### 2. High-Coverage CI/CD Pipeline

To enforce system stability across parallel developments, I established an automated **GitHub Actions** workflow that triggered on every single pull request.

The pipeline automated the build execution step, ran environment validations, and pushed our server through automated test suites utilizing **JUnit 5**. By committing to strict verification tracking, we achieved an overall backend testing benchmark of **95%+ code coverage**, completely eliminating regression bugs before merge phases.

### 3. Containerized Cloud Deployment

Once features passed integration validation check layers, the pipeline automatically containerized the services using **Docker** and published the system build images directly to **AWS Elastic Container Registry (ECR)**. The application was then orchestrated and deployed on **AWS Elastic Beanstalk** infrastructure for live execution.
