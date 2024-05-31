
export const randomString = (prefix: string = "block") => `${prefix}${Array.from({ length: 5 }, () => String.fromCharCode(97 + Math.floor(Math.random() * 26))).join('') + Date.now()}`;

export const processID = (title: string, hash: boolean = true) => `${hash ? '#' : ''}${title.toLowerCase().replace(/\s+/g, '-')}`