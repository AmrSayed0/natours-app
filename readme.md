<h1 align="center">
  <br>
  <a href="https://natours-api-z82r.onrender.com/"><img src="https://github.com/lgope/Natours/blob/master/public/img/logo-green-round.png" alt="Natours" width="200"></a>
  <br>
  Natours App
  <br>
</h1>
  
## Introduction 🌟

Welcome to Natours, a full stack web application designed for travel enthusiasts! This app was developed under the guidance of Jonas Schmedtmann's Node.js course, incorporating features like API creation, MVC architecture, user authentication, data modeling, file uploading, real-time map integration using Mapbox, and much more.

## Key Aspects Covered 🚀

Here are the key aspects covered in the Natours app:

- 📃 Creating an API
- 🎮 Implementing MVC Architecture
- 👩‍💻 User Authentication Mechanisms
- 📚 Data Modeling Techniques
- 🤳 Handling File Uploading
- 📌 Real-time Map Integration with Mapbox

- and much more 😉

## Technologies 🚀

- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML, CSS
- Pug (Template Engine)
- Mailtrap
- Mapbox
- Stripe
- JSON Web Token
- bcrypt
- Nodemailer
- Mailgun

## Features ✨

Explore various features Natours offers:

- 🧳Browse and book nature tours
- 📝 Signup and create an account
- 🔒 Login securely with persisted sessions
- 📊 Detailed tour information including duration, difficulty, and price
- 🗺️ Interactive tour destination maps
- ⭐ Tour reviews and ratings by travelers
- 🔑 Password reset functionality
- 🔄 Update password and profile
- 💳 Stripe payment checkout gateway
- 🖼️ Profile picture upload
- 📧 Email service integration
- 📱💻🖥️ Responsive design for mobile, laptop, and PC

## Setting Up Your Local Environment

Follow these steps to set up the Natours app on your local environment:

1. **Clone the Repository:**
   Clone this repository to your local machine:
   ```bash
   git clone https://github.com/amrsayed0/natours.git
   cd natours
   ```
2. **Install Dependencies:**
   Run the following command to install all the required dependencies:
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**

   Before you can run the Natours app, you need to set up your environment variables. These variables store sensitive information required for the app to function properly. Follow these steps to configure your environment variables:

   1. **Create a `.env` File:**
      In the root directory of the app, create a file named `.env`.

   2. **Add the Following Environment Variables:**
      Replace the placeholders with your actual information. You might need to sign up for accounts and services to obtain the required credentials.

      ```dotenv
      # App Configuration
      NODE_ENV=development
      PORT=3000

      # MongoDB Configuration
      DATABASE=your-mongodb-database-url
      DATABASE_PASSWORD=your-mongodb-password

      # JSON Web Token Configuration
      JWT_SECRET=your-json-web-token-secret
      JWT_EXPIRES_IN=90d
      JWT_COOKIE_EXPIRES_IN=90

      # Mailtrap Configuration
      EMAIL_USERNAME=your-mailtrap-username
      EMAIL_PASSWORD=your-mailtrap-password
      EMAIL_HOST=smtp.mailtrap.io
      EMAIL_PORT=2525
      EMAIL_FROM=your-email


      # Mailgun Configuration
      MAILGUN_API=your-mailgun-api-key
      MAILGUN_DOMAIN=your-mailgun-domain

      # Stripe Configuration
      STRIPE_SECRET_KEY=your-stripe-secret-key
      ```

## Test Payment

If you want to test the payment, please do not provide your secure information. So, we can use the following credit card that's available on the [stripe docs](https://stripe.com/docs/testing#use-test-cards).

```
credit card: 4242 4242 4242 4242 // VISA
m/y: 02/24
cvv: 123
```

## Request limit

The API has a request limit of 100 requests per hour.

## Query operators

Natours API supports the following query operators:

- $gt: greater than to a value specified
- $gte: greater than or equal to a value specified
- $lt: less than to a value specified
- $lte: less than or equal to a value specified

# API reference

For API handling/testing, use Postman.

- Postman collection/documentation is available on this link [click here](https://documenter.getpostman.com/view/31067324/2s9Ykrcfy3)
- Base URL endpoints: `http://127.0.0.1:3000/api/V1/` or `http://localhost:3000/api/v1/`

## Project Demo 🎬

Explore the Natours app in action:

[**Natours App Demo**]()
