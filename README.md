# Gigi Accesorios API 🛍️

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

Backend service for the **Gigi Accesorios** e-commerce platform. This RESTful API handles product management, inventory tracking, and database integration, serving data to the React frontend.

## 🚀 Technologies

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB (via Mongoose ODM)
* **Deployment:** Render

## 🛠️ Installation & Setup

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/TU_USUARIO/gigi-accesorios-api.git](https://github.com/TU_USUARIO/gigi-accesorios-api.git)
    cd gigi-accesorios-api
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Variables**
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=4000
    MONGO_URI=your_mongodb_connection_string
    ```

4.  **Run the server**
    ```bash
    # Development mode (with nodemon)
    npm run dev

    # Production mode
    npm start
    ```

## 🔌 API Endpoints

### Products

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/products` | Retrieve all products |
| `POST` | `/api/products` | Create a new product |

**Example POST JSON Body:**
```json
{
  "name": "Collar de Perlas",
  "description": "Collar elegante hecho a mano",
  "price": 15000,
  "category": "Joyas",
  "imageUrl": "[http://example.com/image.jpg](http://example.com/image.jpg)",
  "stock": 10
}