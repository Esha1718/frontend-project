// Function to format the date
export const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString(undefined, options);
  };
  
  // Function to capitalize the first letter of a string
  export const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  // Function to check if a string is empty
  export const isEmpty = (str) => {
    return !str || str.trim().length === 0;
  };