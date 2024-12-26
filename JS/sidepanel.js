document.addEventListener('DOMContentLoaded', function () {
    const cookieContainer = document.getElementById('cookieContainer');

    // Get the current active tab URL
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const activeTab = tabs[0];
        const url = new URL(activeTab.url);

        // Fetch all cookies for the current tab
        chrome.cookies.getAll({ domain: url.hostname }, function (cookies) {
            cookies.forEach(function (cookie) {
                const cookieDiv = document.createElement('div');
                cookieDiv.classList.add('cookie-details');

                const cookieHeader = document.createElement('div');
                cookieHeader.classList.add('cookie-header');
                cookieHeader.textContent = `Cookie: ${cookie.name}`;
                cookieDiv.appendChild(cookieHeader);

                const table = document.createElement('table');
                const tableHeader = table.createTHead();
                const headerRow = tableHeader.insertRow();
                headerRow.insertCell(0).textContent = "Attribute";
                headerRow.insertCell(1).textContent = "Value";

                const tableBody = table.createTBody();

                const attributes = [
                    { name: 'Name', value: cookie.name },
                    { name: 'Value', value: cookie.value },
                    { name: 'Domain', value: cookie.domain },
                    { name: 'Expires', value: cookie.expirationDate ? new Date(cookie.expirationDate * 1000).toLocaleString() : 'Session' },
                    { name: 'Secure', value: cookie.secure ? 'Yes' : 'No' },
                    { name: 'HttpOnly', value: cookie.httpOnly ? 'Yes' : 'No' },
                    { name: 'SameSite', value: cookie.sameSite || 'None' }
                ];

                attributes.forEach(attr => {
                    const row = tableBody.insertRow();
                    row.insertCell(0).textContent = attr.name;
                    row.insertCell(1).textContent = attr.value;
                });

                cookieDiv.appendChild(table);
                cookieContainer.appendChild(cookieDiv);
            });
        });
    });
});
