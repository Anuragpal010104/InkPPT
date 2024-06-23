# InkPPT
 A platform to generate a presentation from images

## Backend

### Instructions

- Go to backend folder
    ```bash
    cd backend
    ```
- Create a virtual environment
    ```bash
    python -m venv venv
    ```
- Activate the virtual environment
    ```bash
    # Linux and mac
    source venv/bin/activate
    # Windows
    venv/Scripts/activate.bat
    ```
- Install the dependencies
    ```bash
    pip install -r requirements.txt
    ```
- Apply the migrations
    ```bash
    python manage.py migrate
    ```
- Run the backend
    ```bash
    cd inkPPTbackend
    python manage.py runserver
    ```
- To deactivate the environment
    ```bash
    deactivate
    ```

## Frontend

### Instructions

- Navigate to the frontend folder
    ```bash
    cd frontend
    ```
- Install the dependencies
    ```bash
    npm install
    ```
- Run the dev server
    ```bash
    npm run dev
    ```