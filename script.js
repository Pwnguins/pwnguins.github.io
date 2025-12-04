// Team members data
const teamMembers = [
    { name: 'Shirozo', role: 'Web Wizzard', desc: 'Web exploitation', 'avatar' : 'https://avatars.githubusercontent.com/u/109609284' },
    { name: 'Slaine', role: 'Binary Ninja', desc: 'Binary Exploitation', 'avatar' : 'https://avatars.githubusercontent.com/u/178123217' },
    { name: 'Gabrielkaos', role: 'CTF Wizzard', desc: 'All around Master', 'avatar' : 'https://avatars.githubusercontent.com/u/95947441' },
    { name: 'DavonGT', role: 'Binary Ninja & Cipher Breaker', desc: 'Memory corruption & heap exploitation', 'avatar' : 'https://avatars.githubusercontent.com/u/83522516' },
    { name: 'xespa', role: 'Cipher Breaker', desc: 'Cryptanalysis & code breaking', 'avatar' : "https://avatars.githubusercontent.com/u/214936859"},
    { name: 'kayate16', role: 'Web Wizzard, Network Master & Binary Master', desc: 'Web exploitation, Networking, and Binary Master', 'avatar' : "https://avatars.githubusercontent.com/u/199811195"},
    { name: 'benogania', role: 'Web Wizzard & Cipher Breaker', desc: 'Web exploitation and Cryptanalysis & code breaking', 'avatar' : "https://avatars.githubusercontent.com/u/175018261"},
    { name: 'zxoreo', role: 'Web Wizzard', desc: 'Web exploitation', 'avatar' : "https://avatars.githubusercontent.com/u/247798468"},
    { name: 'greyx360', role: 'Digital Sleuth', desc: 'Forensics and data recovery specialist', 'avatar' : "https://avatars.githubusercontent.com/u/247801334"},
    { name: 'Eleaczar Arma', role: 'Coach', desc: 'CTF coach forging rookies into reverse-engineering warriors and exploit machines.', 'avatar' : "https://avatars.githubusercontent.com/u/114586098"},
    { name: 'Kenneth Rey Afable', role: 'Coach', desc: 'Strategist, mentor, and the silent force behind every captured flag.', 'avatar' : "#"},
    { name: 'Francis Ahmed Claro', role: 'Coach', desc: 'Guiding the squad with precision, pressure, and pure cyber grit.', 'avatar' : "#"},
];

// Competition data
const competitions = [
    { name: 'Trend Micro UCTF', year: 2024, place: 77, date: 'Aug 2024' },
    { name: 'BDSEC CTF', year: 2025, place: '82/642', date: 'Jul 2025' },
    { name: 'Kaspersky CTF', year: 2025, place: '30/716', date: 'Aug 2025' },
    { name: 'Trend Micro UCTF', year: 2025, place: '8/199', date: 'Aug 2025' },
    { name: 'Hack4Gov 2025', year: 2025, place: 4, date: 'Dec 2025' },
    { name: 'Hack4Gov 2025', year: 2025, place: 10, date: 'Dec 2025' },
];

// Populate team members
function populateMembers() {
    const grid = document.querySelector('.members-grid');
    const count = document.getElementById('member_count');
    count.innerHTML = teamMembers.length
    grid.innerHTML = teamMembers.map((member, index) => `
        <div class="member-card">
            <div class="member-avatar">
                <img style="width : 100px; border-radius: 99999%;" src="${member.avatar}"/>
            </div>
            <div class="member-name">${member.name}</div>
            <div class="member-role">${member.role}</div>
            <div class="member-desc">${member.desc}</div>
        </div>
    `).join('');
}

// Populate competitions
function populateCompetitions() {
    const grid = document.querySelector('.competitions-grid');
    const count = document.getElementById('competition_count');
    count.innerHTML = competitions.length
    grid.innerHTML = competitions.map((comp, index) => `
        <div class="comp-card">
            <div class="comp-name">${comp.name}</div>
            <div class="comp-year">${comp.year}</div>
            <div class="comp-flags">${comp.place}</div>
            <div class="comp-flags-label">Placement</div>
            <div class="comp-date">${comp.date}</div>
        </div>
    `).join('');
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateMembers();
    populateCompetitions();

    // Add hover effects to nav links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 15px var(--neon-green)';
        });
        link.addEventListener('mouseleave', function() {
            this.style.textShadow = 'none';
        });
    });
});

// Parallax effect on scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const grid = document.querySelector('.grid');
    if (grid) {
        grid.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});