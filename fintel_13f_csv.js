function download_csv(csv, filename) {
    var csvFile;
    var downloadLink;

    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});

    // Download link
    downloadLink = document.createElement("a");

    // File name
    downloadLink.download = filename;

    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);

    // Hide download link
    downloadLink.style.display = "none";

    // Add the link to DOM
    document.body.appendChild(downloadLink);

    // Click download link
    downloadLink.click();
}

function export_table_to_csv(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table#transactions tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push('"' + cols[j].innerText + '"'); // Ensure data that may contain commas is correctly quoted
        
        csv.push(row.join(","));
    }

    // Download CSV file
    download_csv(csv.join("\n"), filename);
}

export_table_to_csv('transactions.csv');
