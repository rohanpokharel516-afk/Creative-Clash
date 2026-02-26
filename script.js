const video = document.getElementById("introVideo");

// When video ends, show website
video.onended = () => {
    showWebsite();
};

// Skip intro
function skipIntro() {
    showWebsite();
}

// Show main site
function showWebsite() {
    document.getElementById("videoIntro").style.display = "none";
    document.getElementById("mainSite").classList.remove("hidden");
}

// Cyber tip
function showTip() {
    document.getElementById("tip").innerText =
        "Cyber Tip: Banks in Nepal never ask for OTP or PIN. Never share it.";
}

// Safety alert
function alertSafety() {
    alert("Always verify messages and links before clicking.");
}