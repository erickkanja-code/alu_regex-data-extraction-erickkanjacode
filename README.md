# Regex Data Extraction and Validation

## About the Project

This project is part of an assignment where the goal was to explore and apply Regular Expressions (regex) to extract and validate different types of user input data. The idea is to simulate how one might handle messy or unstructured data, especially when working with large strings returned from APIs or form inputs.

The task was to write regex patterns for at least 4 out of 8 common data types. I chose to work on the following:

### What’s Covered

- **Email Addresses**  
  Examples like `user@example.com` and `firstname.lastname@company.co.uk` are supported.

- **URLs**  
  Handles URLs like `https://www.example.com` and deeper links such as `https://subdomain.example.org/page`.

- **Phone Numbers**  
  Covers multiple formats including `(123) 456-7890`, `123-456-7890`, and `123.456.7890`.

- **Credit Card Numbers**  
  Validates patterns like `1234 5678 9012 3456` and `1234-5678-9012-3456`.

### Why Regex?

Regex is a powerful way to match patterns in text — it saves time, reduces lines of code, and is extremely efficient when filtering or validating structured data hidden inside long strings.

### Final Thoughts

It’s easy to overlook how complex input validation can be, especially when supporting multiple formats. This project was a good reminder that while regex can be tricky to get right, it’s an essential tool for any developer working with real-world data.
