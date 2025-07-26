# ShareSpend

A bill-splitting application to track shared expenses in a group, developed with
Node and React.

## 🚀 Features

- 📊 Track who paid for what, and who owes whom
- 👥 Manage group members and shared expenses
- 💡 **Smart Debt Minimization** — reduces number of total payments
- 🔐 Secure user login and group-based tracking
- 📱 Responsive UI for mobile and desktop

## 💡 Smart Debt Minimization Example

Imagine a scenario in your group:

- `Praveen` paid ₹500 for a canteen expense shared by multiple members
- `Rishi` paid ₹100 for another shared activity
- The logged-in user is `Manisha`

After the app processes all expenses and splits:

- **Manisha** is owed ₹500
- **Harshu** is owed ₹500
- Other members (like `Akhi`, `Harsh`, etc.) owe money

➡️ Even though **Praveen** paid money, the algorithm adjusts for all shared expenses and prior payments — resulting in a net balance where **Manisha and Harshu are owed**.

✅ So instead of multiple people paying each other in circles, the app simplifies it like this:

- `Akhi` pays **Manisha** ₹500  
- `Harsh` pays **Harshu** ₹500

This minimizes confusion and settles debts in just 2 transactions instead of 4–5.

## Screenshots

![Screenshot (166)](https://github.com/RishikaHub/ShareSpend/assets/167046024/2dc75cd6-08dc-42c3-836b-5a8da7edf7eb)
![Screenshot 2024-05-31 193241](https://github.com/RishikaHub/ShareSpend/assets/167046024/b58f795a-9f27-4660-9ecc-db26332ccac1)

## Installation and Usage

### Setting up the MongoDB Database

1. Create a file in the `server` directory with the name: `.env`
2. Open the file in a text editor (such as Notepad or TextEdit).
3. Add the following line to the file, replacing `<uri>` with the URI of your
   MongoDB database:

```txt
MONGODB_URI="<uri>"
```

4. Save the file.

### Running the Server

1. Open a terminal window.
2. Ensure that you're in the root directory: `sharepend`
3. Navigate to the server directory: `cd server`
4. Install dependencies: `npm install`
5. Run the server: `node app`

### Running the Client

1. Open a new terminal window (separate to the previous one).
2. Ensure that you're in the root directory: `sharepend`
3. Navigate to the server directory: `cd client`
4. Install dependencies: `npm install`
5. Run the client: `npm start`
6. Browse to the URL provided in the terminal window.
