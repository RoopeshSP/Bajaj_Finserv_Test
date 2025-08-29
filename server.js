const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// BFHL endpoint
app.post('/bfhl', (req, res) => {
  try {
    const { data } = req.body;
    
    if (!data || !Array.isArray(data)) {
      return res.status(400).json({
        is_success: false,
        message: "Data must be an array"
      });
    }

    // Separate different types of data
    const oddNumbers = [];
    const evenNumbers = [];
    const alphabets = [];
    const specialCharacters = [];
    
    data.forEach(item => {
      if (typeof item === 'string') {
        // Check if it's a number string
        if (!isNaN(item) && item.trim() !== '') {
          const num = parseInt(item);
          if (num % 2 === 0) {
            evenNumbers.push(item); // Keep as string
          } else {
            oddNumbers.push(item); // Keep as string
          }
        } else if (/^[a-zA-Z]+$/.test(item)) {
          alphabets.push(item);
        } else {
          // Special characters (anything that's not alphanumeric)
          specialCharacters.push(item);
        }
      } else if (typeof item === 'number') {
        if (item % 2 === 0) {
          evenNumbers.push(item.toString()); // Convert to string
        } else {
          oddNumbers.push(item.toString()); // Convert to string
        }
      }
    });

    // Calculate sum of all numbers
    const allNumbers = [...oddNumbers, ...evenNumbers];
    const sum = allNumbers.reduce((acc, num) => acc + parseInt(num), 0).toString();

  
    const concatString = alphabets.join('');
    const reversed = concatString.split('').reverse().join('');

    let result = '';
    for (let i = 0; i < reversed.length; i++) {
      result += i % 2 === 0 
        ? reversed[i].toUpperCase()   // even index → UPPER
        : reversed[i].toLowerCase(); // odd index → lower
    }

    const response = {
      is_success: true,
      user_id: "john_doe_17091999",
      email: "john@xyz.com",
      roll_number: "ABCD123",
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialCharacters,
      sum: sum,
      concat_string: result
    };

    res.json(response);
    
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({
      is_success: false,
      message: "Internal server error"
    });
  }
});

// Health check endpoint
app.get('/', (req, res) => {
  res.json({
    message: "BFHL API is running!",
    endpoint: "/bfhl",
    method: "POST",
    description: "Process data and return numbers as strings with odd/even separation"
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
}); 