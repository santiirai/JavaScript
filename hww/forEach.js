const participants = ["Ram", "Hari", "Gita", "Sita"];
const participantListElement = document.getElementById("participantList");
participants.forEach(participant => {
const listItem = document.createElement("li"); 
listItem.textContent = participant;
participantListElement.appendChild(listItem); 
});
