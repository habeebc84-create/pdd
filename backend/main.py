from fastapi import FastAPI

app = FastAPI(
    title="ReturnRoute API",
    description="Passenger and parcel return-trip matching",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "ok",
        "application": "ReturnRoute",
        "version": "0.1.0",
    }

