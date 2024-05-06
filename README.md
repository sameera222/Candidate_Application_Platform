# Candidate Application Platform

This is a React application that allows users to search for job postings based on various filters such as job role, experience, location, and salary. The application uses Redux for state management and Axios for making API requests.

## Tech Stack

- React
- Redux
- Redux Toolkit
- Axios
- CSS

## Running the Application Locally

To run the application locally, follow these steps:

1. Clone the repository:

2. Navigate to the project directory:

3. Install the dependencies:

4. Start the development server:

The application should now be running on `http://localhost:3000`.

## Features

- Search for job postings based on job role, experience, location, and salary
- Infinite scroll to load more job postings as the user scrolls down
- Responsive design for different screen sizes

## Additional Information

- The application fetches job posting data from the API endpoint.
- The Redux store is managed using Redux Toolkit, which provides a better developer     experience and more efficient code.
- The `JobCard` component is memoized using `React.memo` to improve performance by preventing unnecessary re-renders.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes and commit them (`git commit -am 'Add your feature'`)
4. Push the branch to your forked repository (`git push origin feature/your-feature`)
5. Create a new Pull Request

Please ensure that your code follows the project's coding style and includes appropriate tests.