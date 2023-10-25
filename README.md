
# React Test Task

## Requirements

Implement a solution to display price tickers data on the UI in realtime.

Price data is available from a locally running service (see information below). 

Requirements:
- application should connect to the locally running service
- application should render price changes for some tickers in real time

 

## Technologies:
- React with hooks
- RTK with Redux-Thunk
- Socket.io (to connect to the service)
- MUI library and CSS
- Testing Library
 

## Running the local service
1. Open a new bash shell
2. ```cd server```
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```
5. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

## Running your application
1. Open a new bash shell
2.  ```node -v```  and if you have newer version ```nvm install 15.0.1```

Then:
1. Open a new bash shell
2. ```cd client``` 
3. ```npm install``` or ```yarn install```
4. ```npm run start``` or ```yarn start```
5.You can visit [http://localhost:3000](http://localhost:3000) to check that the client side is working correctly.

## Run the tests
1. Open a new bash shell
2. ```cd client```
3. ```npm run test``` or ```yarn test```

# Price Service Usage

URL:
```http://localhost:4000```

Price tickers are real-time via web-sockets.

## Example JSON Response from the Price Ticker service
```json
[
  {
    "ticker": "AAPL",
    "exchange": "NASDAQ",
    "price": 279.29,
    "change": 64.52,
    "change_percent": 0.84,
    "dividend": 0.56,
    "yield": 1.34,
    "last_trade_time": "2021-04-30T11:53:21.000Z"
  },
  {"ticker":"GOOGL","exchange":"NASDAQ","price":237.08,"change":154.38,"change_percent":0.10,"dividend":0.46,"yield":1.18,"last_trade_time":"2021-04-30T11:53:21.000Z"},
  {"ticker":"MSFT","exchange":"NASDAQ","price":261.46,"change":161.45,"change_percent":0.41,"dividend":0.18,"yield":0.98,"last_trade_time":"2021-04-30T11:53:21.000Z"},
  {"ticker":"AMZN","exchange":"NASDAQ","price":260.34,"change":128.71,"change_percent":0.60,"dividend":0.07,"yield":0.42,"last_trade_time":"2021-04-30T11:53:21.000Z"},
  {"ticker":"FB","exchange":"NASDAQ","price":266.77,"change":171.92,"change_percent":0.75,"dividend":0.52,"yield":1.31,"last_trade_time":"2021-04-30T11:53:21.000Z"},
  {"ticker":"TSLA","exchange":"NASDAQ","price":272.13,"change":158.76,"change_percent":0.10,"dividend":0.96,"yield":1.00,"last_trade_time":"2021-04-30T11:53:21.000Z"}
]
```

 