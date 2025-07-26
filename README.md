# ShareSpend

A bill-splitting application to track shared expenses in a group, developed with
Node and React.

## Explanation of Transaction Minimisation Algorithm

We implemented a greedy algorithm to minimise the number of transactions
required to settle the debts between all members of a group. The algorithm runs in O(n log n), where n is the number
of users – this means that it scales well with the number of users.

A simple example of this algorithm . In this example, Alice owes
Bob ₹10 and Bob owes Charlie ₹10 for a total of two transactions. The algorithm
will suggest that Alice pays Charlie ₹10 directly, meaning only one transaction
is required to settle the debts.

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
