/**
 * Enhanced print function that logs the file, line number, and data
 * @param {any} data - The data to be logged
 */
export const print = (data) => {
  // Create an Error object to capture the stack trace
  const stackTrace = new Error().stack;

  // Parse the stack trace to extract file and line information
  // The format typically looks like: "Error: \n    at print (file.js:line:column)"
  const stackLines = stackTrace.split('\n');

  // Get the caller information (skip the first two lines which are the Error and this function)
  const callerInfo = stackLines[2] ? stackLines[2].trim() : 'Unknown location';

  // Extract file and line information using regex
  const fileMatch =
    callerInfo.match(/\((.+):(\d+):(\d+)\)/) ||
    callerInfo.match(/at\s+(.+):(\d+):(\d+)/);

  let fileInfo = 'Unknown file';
  let lineInfo = 'Unknown line';

  if (fileMatch && fileMatch.length >= 3) {
    // Extract the filename (get the part after the last slash if it exists)
    const fullPath = fileMatch[1];
    const fileName =
      fullPath.split('/').pop() || fullPath.split('\\').pop() || fullPath;
    fileInfo = fileName;
    lineInfo = fileMatch[2];
  }

  // Format the output
  console.log(`[${fileInfo}:${lineInfo}]`, data);
};

// Example usage:
// print("Hello World");
// Will output something like: [app.js:42] Hello World
