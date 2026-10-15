# ReturnRoute
**People • Parcels • Smarter Trips**

## Project Overview
ReturnRoute is an AI-assisted passenger mobility and parcel-delivery platform. It connects people who need transportation or parcel delivery with drivers and travellers who already plan to travel along compatible routes, reducing empty return trips and unnecessary detours.

### Project Vision
The platform aims to maximize existing vehicle capacity by matching:
- Passenger ride requests with ride offers.
- Local and intercity parcel delivery.
- Route-corridor matching with proximity checks.
- Time-window compatibility.
- Capacity constraints (seats/parcel space).

## Technology Stack
- **Frontend:** React, Vite, TypeScript, Tailwind CSS, React Router, Lucide React, Recharts.
- **Backend:** Python, FastAPI, Pydantic, Uvicorn, Pytest.
- **Planned Database:** PostgreSQL with PostGIS, Supabase Auth.
- **Planned Maps:** Google Maps Platform or Mapbox.

## Project Structure
- `frontend/`: React application.
- `backend/`: FastAPI application.
- `database/`: Database schemas and migrations.
- `docs/`: Project documentation.
- `tests/`: Global tests.

## Setup Instructions

### Frontend Setup
1. Navigate to `/frontend`.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open `http://localhost:5173`.

### Backend Setup
1. Navigate to `/backend`.
2. Create virtual environment: `python -m venv .venv`.
3. Activate: `.\.venv\Scripts\Activate.ps1`.
4. Install requirements: `pip install -r requirements.txt`.
5. Start server: `uvicorn main:app --reload`.

### API Endpoints
- **Health Check:** `http://127.0.0.1:8000/health`
- **API Docs:** `http://127.0.0.1:8000/docs`

## Current Status
- [x] Development Environment Setup.
- [x] Project Structure created.
- [x] Frontend (React + Vite) initialized.
- [x] Backend (FastAPI) initialized.
- [x] Initial Git commit created.

*Note: All secrets and API keys must remain in `.env` files and never be committed to source control.*
