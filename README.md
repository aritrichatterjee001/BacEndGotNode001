## Aritri Cha — Build & Deploy Multi-Container Applications to AWS

A containerized full-stack application using **Nginx, React, Node.js, and MongoDB**, with automated deployment via a **CI/CD pipeline** and infrastructure provisioned using **Terraform (IaC)**.

---

### Features

- **Multi-container architecture**
  - Frontend: React  
  - Backend: Node.js (Express)  
  - Database: MongoDB  
  - Reverse Proxy: Nginx  

- **Cloud deployment**
  - Scalable deployment on AWS  

- **CI/CD pipeline**
  - Automated build and push of Docker images to DockerHub  
  - Continuous deployment workflow  

- **Infrastructure as Code**
  - AWS resources provisioned and managed using Terraform  

---

### Architecture Diagram

<p align="center">
  <img src="./assets/architecture-diagram.png" width="85%" alt="Architecture Diagram"/>
</p>

---

### Demo

> Demo preview (GIF currently unavailable)

<!--
Replace with a working hosted GIF when available:

<p align="center">
  <img src="https://user-images.githubusercontent.com/XXXX/demo.gif" width="85%" />
</p>
-->

---

### Tech Stack

- React  
- Node.js / Express  
- MongoDB  
- Docker / Docker Compose  
- AWS  
- Terraform  
- CI/CD (GitHub Actions or similar)

---

### Deployment Flow

1. Code pushed to repository  
2. CI/CD pipeline triggers  
3. Docker images built and pushed to DockerHub  
4. Terraform provisions or updates AWS infrastructure  
5. Containers deployed and served via Nginx  

---

### Project Structure
