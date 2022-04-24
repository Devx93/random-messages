const messages = [
    "oscar",
    "jesus",
    "nicolas",
    "laura",
    "sara"
];

const randonMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {randonMsg};
    
