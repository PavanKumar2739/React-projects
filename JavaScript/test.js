const { exec } = require('child_process');

// Replace 'your-script.ps1' with the actual path to your PowerShell script
const scriptPath = 'test.ps1';

// Run the PowerShell script
exec(`powershell -File ${scriptPath}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`PowerShell Error: ${stderr}`);
    return;
  }

  console.log(`PowerShell Output: ${stdout}`);
});
