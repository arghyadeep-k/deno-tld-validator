const url = "https://data.iana.org/TLD/tlds-alpha-by-domain.txt";

const response = await fetch(url);
const domainList = await response.text();

export function validateTLD(tld: string) {
  const inputRegEx = new RegExp(`\\b${tld.toUpperCase()}\\b`);
  if (domainList.search(inputRegEx) != -1) {
    return true;
  } else {
    return false;
  }
}
