# AI-Powered Placement Preparation Platform

## Overview

AI-Powered Placement Preparation Platform is a full-stack web application designed to help students prepare for campus placements through profile management, resume analysis, aptitude practice, company-specific preparation, and AI-powered mock interviews.

The platform aims to provide a single solution for students to manage their placement preparation journey instead of using multiple disconnected platforms.

---

## Problem Statement

Students preparing for placements often face challenges such as:

* Managing resumes across different platforms
* Practicing aptitude questions from multiple sources
* Preparing for company-specific recruitment processes
* Tracking placement readiness
* Receiving interview feedback

This project solves these problems by providing a centralized placement preparation platform.

---

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* Tailwind CSS

### Backend

* Python
* Django
* Django REST Framework (DRF)
* JWT Authentication

### Database

* PostgreSQL

### Version Control

* Git
* GitHub

---

## Project Architecture

Frontend (React)
↓
Axios API Calls
↓
Django REST Framework
↓
PostgreSQL Database

---

## Features

### Authentication Module ✅

* User Registration
* Secure Login
* JWT Authentication
* Access Token Generation
* Refresh Token Generation
* Local Storage Token Management

### Profile Management Module ✅

* Student Profile Creation
* Academic Information Storage
* Skills Management
* CGPA Tracking
* PostgreSQL Integration

### Resume Management Module 🚧

* Resume Upload
* Resume Storage
* Resume Analysis
* Resume Scoring
* ATS Compatibility Analysis

### Aptitude Preparation Module 🚧

* Aptitude Question Bank
* Category-wise Questions
* Performance Tracking
* Timed Assessments

### Company Preparation Module 🚧

* Company Eligibility Criteria
* Hiring Process Information
* Preparation Resources
* Company Tracking

### AI Mock Interview Module 🚧

* Interview Questions
* Answer Evaluation
* AI Feedback
* Performance Scoring

### Dashboard Module 🚧

* Placement Readiness Score
* Resume Score
* Aptitude Score
* Interview Score
* Progress Tracking

---

## Database Models

### Profile

Stores student information:

* User
* College
* Branch
* CGPA
* Skills

### Resume

Stores uploaded resumes:

* User
* Resume File
* Resume Score
* Upload Timestamp

### Company

Stores company information:

* Company Name
* Eligibility Criteria
* Hiring Process

### Aptitude Question

Stores aptitude questions:

* Question
* Options
* Correct Answer
* Category

### Interview Session

Stores interview data:

* User
* Question
* Answer
* Score
* Feedback

---

## Completed Development

### Week 1

#### Project Setup

* Django Project Setup
* React + Vite Setup
* PostgreSQL Configuration
* Environment Configuration

#### Backend Development

* Django REST Framework Setup
* PostgreSQL Integration
* Application Architecture Design

#### Database Design

* Profile Model
* Resume Model
* Company Model
* Aptitude Question Model
* Interview Session Model

#### Admin Configuration

* Django Admin Setup
* Model Registration
* Database Migration

---

### Week 2

#### Day 1

* User Registration API
* User Serializer
* Registration Endpoint

#### Day 2

* JWT Authentication Setup
* Login Endpoint
* Refresh Token Endpoint

#### Day 3

* Profile API
* Profile Serializer
* Profile Creation API
* PostgreSQL Testing

#### Day 4

* React Frontend Integration
* Axios Configuration
* Registration Form Development
* Frontend ↔ Backend Communication

#### Day 5

* React Login Page
* JWT Authentication Flow
* Access Token Storage
* Refresh Token Storage
* Login Testing

#### Day 6

* React Profile Form
* Profile Creation from Frontend
* PostgreSQL Data Storage
* API Integration Testing

#### Day 7

* Developed Dashboard page
* Implemented reusable React components
* Created Navbar component
* Created ProfileCard component
* Created StatsCard component
* Integrated Dashboard with Profile API
* Displayed profile information fetched from Django backend
* Established component-based frontend architecture


---

## Current Progress

## Current Progress

### Completed ✅

* Django Backend Setup
* PostgreSQL Integration
* REST API Development
* User Registration
* JWT Authentication
* User Login
* Profile Management API
* React Frontend Setup
* Axios Integration
* Registration Page
* Login Page
* Dashboard Page
* JWT Token Storage
* Profile Form
* Dashboard Components
* API Integration with React

### In Progress 🚧

* Resume Upload Module

### Planned 📋

* Resume Analysis
* Aptitude Practice
* Company Preparation
* AI Mock Interview
* Placement Analytics Dashboard


---

## API Endpoints

### Authentication

```http
POST /api/accounts/register/
POST /api/accounts/login/
POST /api/accounts/refresh/
```

### Profiles

```http
GET /api/profiles/
POST /api/profiles/
```

---

## Future Enhancements

* Resume ATS Score Analysis
* AI-Based Resume Suggestions
* Personalized Learning Recommendations
* Company Recommendation System
* Interview Performance Analytics
* Placement Prediction Dashboard

---

## Author

**Shrujal Soni**

B.Tech Artificial Intelligence and Data Science

A.D. Patel Institute of Technology

Graduation Year: 2027

---

## Project Status
## Project Status

🚧 Active Development

Current Milestone: Week 3 – Resume Upload & Analysis Module

Overall Progress: ~30% Complete
