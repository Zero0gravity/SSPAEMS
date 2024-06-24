document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    if (username === 'puneet' && password === '123456') {
        showMenu();
    } else {
        alert('Incorrect username or password');
    }
});

function showMenu() {
    document.body.innerHTML = `
        <div class="container">
            <div class="menu-box">
                <h2>Menu</h2>
                <div class="menu-option" onclick="showProductionOptions()">Production</div>
                <div class="menu-option" onclick="showDispatchOptions()">Dispatch</div>
                <div class="menu-option" onclick="showInventoryOptions()">Inventory & Stock</div>
                <div class="menu-option" onclick="showHrmOptions()">HRMS</div>
                <div class="menu-option" onclick="showSalesOptions()">Sales</div>
                <div class="menu-option" onclick="showCustomizableOptions()">Customizable</div>
            </div>
        </div>
    `;
}

function showProductionOptions() {
    document.body.innerHTML = `
        <div class="container">
            <div class="menu-box">
                <h2>Production</h2>
                <div class="menu-option" onclick="showDayShift()">Day Shift</div>
                <div class="menu-option" onclick="showNightShift()">Night Shift</div>
                <div class="menu-option" onclick="showMenu()">Back</div>
            </div>
        </div>
    `;
}

function showDayShift() {
    document.body.innerHTML = `
        <div class="container">
            <div class="menu-box">
                <h2>Day Shift</h2>
                <div class="product-item">1. One litreLitre round Shrink</div>
                <div class="product-item">2. One litre Round Box</div>
                <div class="product-item">3. One Litre Square shrink</div>
                <div class="product-item">4. One Litre square Box</div>
                <div class="product-item">5. Half Litreyellow</div>
                <div class="product-item">6. Half Litre Pink</div>
                <div class="product-item">7. 200ml pink</div>
                <div class="product-item">8. Customizable </div>
                <div class="menu-option" onclick="showProductionOptions()">Back</div>
            </div>
        </div>
    `;
}

function showNightShift() {
    document.body.innerHTML = `
        <div class="container">
            <div class="menu-box">
                <h2>Night Shift</h2>
                <div class="product-item">1. One Litre round Shrink</div>
                <div class="product-item">2. One Litre Round Box</div>
                <div class="product-item">3. One Litre Square shrink</div>
                <div class="product-item">4. One Litre square Box</div>
                <div class="product-item">5. Half Litre yellow</div>
                <div class="product-item">6. Half Litre Pink</div>
                <div class="product-item">7. 200ml pink</div>
                <div class="product-item">8. Customizable</div>
                <div class="menu-option" onclick="showProductionOptions()">Back</div>
            </div>
        </div>
    `;
}

function showDispatchOptions() {
    document.body.innerHTML = `
        <div class="container">
            <div class="menu-box">
                <h2>Dispatch</h2>
                ${Array.from({ length: 15 }, (_, i) => `<div class="menu-option">Product ${i + 1}</div>`).join('')}
                <div class="menu-option" onclick="showMenu()">Back</div>
            </div>
        </div>
    `;
}

function showInventoryOptions() {
    document.body.innerHTML = `
        <div class="container">
            <div class="menu-box">
                <h2>Inventory & Stock</h2>
                <div class="menu-option">Option 1</div>
                <div class="menu-option">Option 2</div>
                <div class="menu-option" onclick="showMenu()">Back</div>
            </div>
        </div>
    `;
}

function showHrmOptions() {
    document.body.innerHTML = `
        <div class="container">
            <div class="menu-box">
                <h2>HRMS</h2>
                <div class="menu-option" onclick="showAttendance()">Attendance of Staff</div>
                <div class="menu-option" onclick="showMenu()">Back</div>
            </div>
        </div>
    `;
}

function showAttendance() {
    document.body.innerHTML = `
        <div class="container">
            <div class="menu-box">
                <h2>Attendance</h2>
                ${Array.from({ length: 15 }, (_, i) => `<div class="menu-option">Employee ${i + 1} Calendar</div>`).join('')}
                <div class="menu-option" onclick="showHrmOptions()">Back</div>
            </div>
        </div>
    `;
}

function showSalesOptions() {
    document.body.innerHTML = `
        <div class="container">
            <div class="menu-box">
                <h2>Sales</h2>
                <div class="menu-option">Today's Sales</div>
                <div class="menu-option">Ongoing Month Sale</div>
                <div class="menu-option">Download Sales Data</div>
                <div class="menu-option" onclick="showMenu()">Back</div>
            </div>
        </div>
    `;
}

function showCustomizableOptions() {
    document.body.innerHTML = `
        <div class="container">
            <div class="menu-box">
                <h2>Customizable</h2>
                <div class="menu-option">Option 1</div>
                <div class="menu-option">Option 2</div>
                <div class="menu-option" onclick="showMenu()">Back</div>
            </div>
        </div>
    `;
}
