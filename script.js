// Tesla Cars Dataset (Images, Specs, Colors)
const teslaData = [
    {
        name: "Tesla Model S",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        image: "https://i.ibb.co/6wXgB6G/model-s.png", 
        glowColor: "#0055ff", 
        themeColor: "#0055ff",
        speed: "+75",
        acc: "4.5",
        range: "520"
    },
    {
        name: "Tesla Model X",
        desc: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
        image: "https://i.ibb.co/v4b387g/model-x.png", 
        glowColor: "#ff003c", 
        themeColor: "#ff003c",
        speed: "+75",
        acc: "3.1",
        range: "520"
    },
    {
        name: "Tesla Model 3",
        desc: "Minimalist design, maximum safety, and an all-electric range optimized for everyday commuting and long road trips with family.",
        image: "https://i.ibb.co/6wXgB6G/model-s.png", 
        glowColor: "#00ffaa", 
        themeColor: "#00ffaa",
        speed: "140",
        acc: "5.8",
        range: "272"
    },
    {
        name: "Tesla Roadster",
        desc: "The quickest car in the world, with record-setting acceleration, range and performance. Experience ultimate speed aerodynamics.",
        image: "https://i.ibb.co/G370g3X/roadster.png",
        glowColor: "#e65c00", 
        themeColor: "#e65c00",
        speed: "+250",
        acc: "1.9",
        range: "620"
    },
    {
        name: "Semi Truck",
        desc: "Tesla Semi is the safest, most comfortable truck ever. Powered by four independent motors on rear axles, providing maximum power.",
        image: "https://i.ibb.co/M960Q6W/semi.png", 
        glowColor: "#ffffff", 
        themeColor: "#ffffff",
        speed: "65",
        acc: "5.0",
        range: "500"
    }
];

function changeCar(index, element) {
    // Check if clicked item is already active to prevent re-animation
    if(element.classList.contains('active')) return;

    // Update Active Menu State
    document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    const car = teslaData[index];
    
    // Elements Targeting
    const carImg = document.getElementById('car-img');
    const infoPanel = document.getElementById('info-panel');
    const specPanel = document.getElementById('spec-panel');
    const glowBg = document.getElementById('glow');
    const btnAction = document.getElementById('btn-action');

    // Trigger Fade Out Animations
    carImg.classList.add('fade-out');
    infoPanel.classList.add('fade-out-text');
    specPanel.classList.add('fade-out-text');

    // Wait for transition to complete, then change data and animate back in
    setTimeout(() => {
        // Update Text Contents
        document.getElementById('car-name').innerText = car.name;
        document.getElementById('car-desc').innerText = car.desc;
        document.getElementById('spec-speed').innerHTML = `${car.speed}<span>mph</span>`;
        document.getElementById('spec-acc').innerHTML = `${car.acc}<span>s</span>`;
        document.getElementById('spec-range').innerHTML = `${car.range}<span>mi</span>`;
        
        // Update Image Source
        carImg.src = car.image;

        // Update Ambient Glow and Button Theme Colors
        glowBg.style.background = car.glowColor;
        btnAction.style.borderColor = car.themeColor;
        
        // Mouse hover interaction dynamic styles
        btnAction.onmouseover = () => btnAction.style.background = car.themeColor;
        btnAction.onmouseout = () => btnAction.style.background = 'transparent';

        // Trigger Fade In (Remove Classes)
        carImg.classList.remove('fade-out');
        infoPanel.classList.remove('fade-out-text');
        specPanel.classList.remove('fade-out-text');
    }, 400);
}
