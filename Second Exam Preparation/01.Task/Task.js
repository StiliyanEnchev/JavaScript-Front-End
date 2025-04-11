function solve(input) {
    let numberOfAstronauts = Number(input[0]);
    let crew = {};

    for (let i = 1; i <= numberOfAstronauts; i++) {
        let line = input[i];
        let parts = line.split(" ");
        let name = parts[0];
        let section = parts[1];
        let skills = [];

        if (parts.length > 2) {
            skills = parts[2].split(",");
        }

        crew[name] = {
            section: section,
            skills: skills
        };
    }

    for (let i = numberOfAstronauts + 1; i < input.length; i++) {
        let commandLine = input[i];

        if (commandLine === "End") {
            break;
        }

        let parts = commandLine.split(" / ");
        let action = parts[0];
        let name = parts[1];

        if (action === "Perform") {
            let section = parts[2];
            let skill = parts[3];

            if (crew[name].section === section && crew[name].skills.includes(skill)) {
                console.log(name + " has successfully performed the skill: " + skill + "!");
            } else {
                console.log(name + " cannot perform the skill: " + skill + ".");
            }

        } else if (action === "Transfer") {
            let newSection = parts[2];
            crew[name].section = newSection;
            console.log(name + " has been transferred to: " + newSection);

        } else if (action === "Learn Skill") {
            let newSkill = parts[2];

            if (crew[name].skills.includes(newSkill)) {
                console.log(name + " already knows the skill: " + newSkill + ".");
            } else {
                crew[name].skills.push(newSkill);
                console.log(name + " has learned a new skill: " + newSkill + ".");
            }
        }
    }

    for (let name in crew) {
        let section = crew[name].section;
        let skills = crew[name].skills.slice().sort();
        console.log("Astronaut: " + name + ", Section: " + section + ", Skills: " + skills.join(", "));
    }
}

solve([
    "2",
    "Alice command_module piloting,communications",
    "Bob engineering_bay repair,maintenance",
    "Perform / Alice / command_module / piloting",
    "Perform / Bob / command_module / repair",
    "Learn Skill / Alice / navigation",
    "Perform / Alice / command_module / navigation",
    "Transfer / Bob / command_module",
    "Perform / Bob / command_module / maintenance",
    "End"
]
)