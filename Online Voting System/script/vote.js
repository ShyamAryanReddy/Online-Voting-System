var candidatesData = {
    "location1": [
        { "name": "Candidate 1", "votes": 150 },
        { "name": "Candidate 2", "votes": 200 },
        { "name": "Candidate 3", "votes": 180 }
    ],
    "location2": [
        { "name": "Candidate 4", "votes": 220 },
        { "name": "Candidate 5", "votes": 190 },
        { "name": "Candidate 6", "votes": 210 }
    ],
    "location3": [
        { "name": "Candidate 7", "votes": 170 },
        { "name": "Candidate 8", "votes": 240 },
        { "name": "Candidate 9", "votes": 260 }
    ]
};

var locationsDropdown = document.getElementById("locations");
var candidatesTableBody = document.getElementById("candidatesList");

// Function to populate candidates based on selected location
function populateCandidates() {
    var selectedLocation = locationsDropdown.value;
    var candidates = candidatesData[selectedLocation];
    candidatesTableBody.innerHTML = "";

    candidates.forEach(function(candidate, index) {
        var row = document.createElement("tr");
        var nameCell = document.createElement("td");
        var votesCell = document.createElement("td");
        var voteCell = document.createElement("td");
        var radioButton = document.createElement("input");

        nameCell.textContent = candidate.name;
        votesCell.textContent = candidate.votes;

        radioButton.type = "radio";
        radioButton.name = "candidate";
        radioButton.value = index;

        voteCell.appendChild(radioButton);
        row.appendChild(nameCell);
        row.appendChild(votesCell);
        row.appendChild(voteCell);
        candidatesTableBody.appendChild(row);
    });
}

// Function to handle voting
function vote() {
    var selectedLocation = locationsDropdown.value;
    var selectedCandidateIndex = document.querySelector('input[name="candidate"]:checked');

    if (selectedCandidateIndex) {
        var candidateIndex = parseInt(selectedCandidateIndex.value);
        candidatesData[selectedLocation][candidateIndex].votes++;
        alert("Vote successful! Thank you for voting.");
        // You can update the UI here to reflect the new vote count if necessary
    } else {
        alert("Please select a candidate to vote.");
    }
}

// Event listener for location dropdown change
locationsDropdown.addEventListener("change", populateCandidates);

// Initial population of candidates based on default selected location
populateCandidates();