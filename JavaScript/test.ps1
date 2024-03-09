# sample.ps1

# Sample data
$data = @"
Name, Age, City
John, 25, New York
Jane, 30, Los Angeles
Bob, 22, Chicago
"@

# Convert the string to CSV and save it to a file
$data | ConvertFrom-Csv | Export-Csv -Path "sample.csv" -NoTypeInformation
