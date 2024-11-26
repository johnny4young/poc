// Get the current timestamp
import {bgCyan, bgPurple, bgYellow, txBlue, txCyan, txGreen, txPurple, txYellow} from "./colors.js";

const timestamp = () => new Date().toLocaleString();

export const displayTimestamp = () => bgPurple(timestamp());

export const displayInfo = (msg) => bgYellow.bold(`ℹ️ ${msg ?? "Info:"}`);

export const displaySuccess = (msg = "") =>
    bgCyan.inverse.bold(`✅ Success! ${msg}`);

export const displayCategory = (category) => txGreen.bold.underline(category);

export const displayAmount = (amount) => txYellow.bold.underline(`$${amount}`);

export const displayID = (id) => txCyan.bold(id);

export const displayName = (name) => txCyan(name);

export const displayRRP = (rrp) => txYellow.bold(`$${rrp}`);

export const displayText = (msg) => txPurple(msg);

export const displayKey = (key) => txBlue.bold(key);
