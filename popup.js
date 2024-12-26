document.addEventListener('DOMContentLoaded', function() {
    const cookiesTableBody = document.getElementById('cookiesTable').getElementsByTagName('tbody')[0];

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const activeTab = tabs[0];
        const url = new URL(activeTab.url);

        // Fetch all cookies for the current tab
        chrome.cookies.getAll({domain: url.hostname}, function(cookies) {
            cookies.forEach(function(cookie) {
                const row = cookiesTableBody.insertRow();

                // Insert cookie details in each row
                const nameCell = row.insertCell(0);
                const valueCell = row.insertCell(1);
                const domainCell = row.insertCell(2);
                const expiresCell = row.insertCell(3);
                const secureCell = row.insertCell(4);
                const httpOnlyCell = row.insertCell(5);
                const sameSiteCell = row.insertCell(6);

                nameCell.textContent = cookie.name;
                valueCell.textContent = cookie.value;
                domainCell.textContent = cookie.domain;
                expiresCell.textContent = cookie.expirationDate ? new Date(cookie.expirationDate * 1000).toLocaleString() : 'Session';
                secureCell.textContent = cookie.secure ? 'Yes' : 'No';
                httpOnlyCell.textContent = cookie.httpOnly ? 'Yes' : 'No';
                sameSiteCell.textContent = cookie.sameSite || 'None';
            });
        });
    });
});
