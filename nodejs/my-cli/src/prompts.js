import Enquirer from "enquirer";
import {add, categories, error, listCategories, listCategoryItems, log, update} from "./utils.js";
import {displayInfo, displayText} from "./displays.js";
import {program} from "commander";
// Import the Enquirer prompt types
const {prompt} = Enquirer;

const categoryQuestions = [
    {
        type: "autocomplete",
        name: "category",
        message: "Category",
        choices: categories,
    },
];

export const promptListIds = async () => {
    const {category} = await prompt(categoryQuestions);
    return listCategoryItems(category);
};

const orderQuestions = [
    ...categoryQuestions,
    {
        type: "input",
        name: "id",
        message: "ID",
    },
    {
        type: "input",
        name: "name",
        message: "Name",
    },
    {
        type: "input",
        name: "amount",
        message: "Amount",
    },
    {
        type: "input",
        name: "info",
        message: "Info",
    },
];

export const promptAddOrder = async () => {
    const {category, id, name, amount, info} = await prompt(orderQuestions);
    return add(category, id, name, amount, info);
};

const updateQuestions = [
    {
        type: "input",
        name: "id",
        message: "ID",
    },
    {
        type: "input",
        name: "amount",
        message: "Amount",
    },
];

export const promptUpdate = async () => {
    const {id, amount} = await prompt(updateQuestions);
    return update(id, amount);
};

const commandsList = ["add", "update", "list", "list by ID's", "help", "exit"];
const commandsQuestions = [
    {
        type: "autocomplete",
        name: "command",
        message: "Command",
        choices: commandsList,
    },
];
export const promptCommand = async () => {
    const {command} = await prompt(commandsQuestions);
    return command;
};


export const interactiveApp = async (cmd) => {
    log(displayText(`Back office for My App`));
    log(displayInfo(`Interactive Mode`));
    try {
        const command = cmd ?? await promptCommand();
        switch (command) {
            case "add":
                log(displayInfo(`Add Order`));
                await promptAddOrder();
                return interactiveApp();
            case "update":
                log(displayInfo(`Update Order`));
                await promptUpdate();
                return interactiveApp();
            case "list":
                log(displayInfo(`List Categories`));
                await listCategories();
                return interactiveApp();
            case "list by ID's":
                log(displayInfo(`List Category Items`));
                await promptListIds();
                return interactiveApp();
            case "help":
                program.help();
            case "exit":
                process.exit(0);
                break;
        }
    } catch (err) {
        error(err);
        process.exit(1);
    }
};

await interactiveApp();
