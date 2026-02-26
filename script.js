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

// Threat details
const threatInfo = {
    phishing: {
        title: 'Phishing',
        description: `Fraudulent messages or websites that trick users into giving away passwords, OTPs or
        other sensitive data.`,
        prevention: `Check link URLs carefully, never enter credentials on unknown pages, and
        enable two-factor authentication.`,
        page: 'phishing.html'
    },
    weakPassword: {
        title: 'Weak / Reused Passwords',
        description: `Using easy‑to‑guess passwords or the same password across services lets attackers
        break into accounts.`,
        prevention: `Create long, unique passwords for each site and use a password manager.`,
        page: 'weak-passwords.html'
    },
    malware: {
        title: 'Malware',
        description: `Malicious software (viruses, trojans, ransomware) installed via downloads or
        infected attachments.`,
        prevention: `Only install from trusted sources, keep antivirus updated, and avoid
        opening unknown files.`,
        page: 'malware.html'
    },
    socialEngineering: {
        title: 'Social Engineering',
        description: `Manipulating people into revealing confidential information by impersonation or
        pressure.`,
        prevention: `Be skeptical of unsolicited requests and verify identity before sharing data.`,
        page: 'social-engineering.html'
    },
    unsecuredWiFi: {
        title: 'Unsecured Wi‑Fi',
        description: `Using public or open wireless networks that attackers can monitor to steal
        credentials.`,
        prevention: `Avoid logging into sensitive accounts on public Wi‑Fi or use a VPN.`,
        page: 'unsecured-wifi.html'
    },
    outdatedSoftware: {
        title: 'Outdated Software',
        description: `Old operating systems and apps may have security holes that hackers exploit.`,
        prevention: `Install updates and patches promptly.`,
        page: 'outdated-software.html'
    }
};

function showThreat(key) {
    const info = threatInfo[key];
    if (!info) return;
    const container = document.getElementById('threat-details');
    const contentDiv = document.getElementById('threat-content');
    contentDiv.innerHTML = `
        <h3>${info.title}</h3>
        <p><strong>What is it?</strong><br>${info.description}</p>
        <p><strong>How to prevent:</strong><br>${info.prevention}</p>
    `;
    container.classList.remove('hidden');
}

function closeThreat() {
    document.getElementById('threat-details').classList.add('hidden');
}

// safety checklist calculation
function calculateSafety() {
    const form = document.getElementById('safety-checklist');
    if (!form) return;
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    let score = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) score += parseInt(cb.value, 10) || 0;
    });
    const total = checkboxes.length;
    const result = document.getElementById('safety-score');
    result.innerText = `You checked ${score} of ${total} items. ${score===total ? 'Great job!' : 'Consider improving these habits.'}`;
}

function calculateRights() {
    const form = document.getElementById('rights-checklist');
    if (!form) return;
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    let score = 0;
    checkboxes.forEach(cb => {
        if (cb.checked) score += parseInt(cb.value, 10) || 0;
    });
    const total = checkboxes.length;
    const result = document.getElementById('rights-score');
    let message;
    switch (score) {
        case 0: message = 'Very bad'; break;
        case 1: message = 'Bad'; break;
        case 2: message = 'Good'; break;
        case 3: message = 'Very good'; break;
        case 4: message = 'Excellent'; break;
        case 5: message = 'You are safe'; break;
        default: message = score === total ? 'You are safe' : '';
    }
    result.innerText = `You checked ${score} of ${total} rights. ${message}`;
}

// initialize threat-box click listeners after DOM loaded
function initThreatListeners() {
    const boxes = document.querySelectorAll('.threat-box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
            const key = box.getAttribute('data-key');
            if (!key) return;
            const info = threatInfo[key];
            if (info && info.page) {
                // go to dedicated page
                window.location.href = info.page;
            } else {
                showThreat(key);
            }
        });
    });
}

// call init on page load
document.addEventListener('DOMContentLoaded', initThreatListeners);
