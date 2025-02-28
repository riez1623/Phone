function openApp(app) {
    // Hide the home screen
    document.getElementById('homeScreen').style.display = 'none';

    // Show the selected app screen
    document.getElementById(app + 'Screen').style.display = 'flex';
}

function closeApp(app) {
    // Hide the app screen
    document.getElementById(app + 'Screen').style.display = 'none';

    // Show the home screen again
    document.getElementById('homeScreen').style.display = 'flex';
}
