# BFHL API

A Node.js Express API that processes input data and returns numbers as strings with odd/even separation.

## Features

- **POST /bfhl** - Main endpoint that processes data
- Separates odd and even numbers from input array
- Returns numbers as strings (as required)
- Detects special characters
- Calculates sum of all numbers
- Creates concatenated string from alphabets
- Includes user information in response

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Usage

### Endpoint: POST /bfhl

**Request Body:**
```json
{
  "data": ["M", "1", "334", "B", "A", "2", "AA", "3", "B", "$"]
}
```

**Response:**
```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1", "3"],
  "even_numbers": ["334", "2"],
  "alphabets": ["M", "B", "A", "AA", "B"],
  "special_characters": ["$"],
  "sum": "340",
  "concat_string": "MBAAB"
}
```

## Testing

You can test the API using:

1. **cURL:**
```bash
curl -X POST http://localhost:3000/bfhl -H "Content-Type: application/json" -d "{\"data\": [\"M\", \"1\", \"334\", \"B\", \"A\", \"2\", \"AA\", \"3\", \"B\", \"$\"]}"
```

2. **Postman** or any API testing tool
3. **Browser** - Visit http://localhost:3000 for health check

## Customization

Update the user information in `server.js`:
- `user_id`
- `email` 
- `roll_number`

## Deployment

The API is ready to be deployed to:
- Heroku
- Railway
- Render
- Vercel
- Any Node.js hosting platform

## Requirements Met

✅ Numbers returned as strings  
✅ `/bfhl` endpoint implemented  
✅ Odd and even numbers separated  
✅ Special characters detected  
✅ Sum calculation  
✅ Concatenated string from alphabets  
✅ Proper error handling  
✅ CORS enabled for cross-origin requests  
✅ Input validation 