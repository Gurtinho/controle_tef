export const convertDayMonth = (date: string) => {
	const data = new Date(date);
	const month = data.getMonth() + 1;
	const day = data.getDate();
	return `${day}${month}`;
};

export const convertTime = (date: string) => {
	const d = new Date(date);
	const formated = `${d.getHours()}${d.getMinutes()}${d.getSeconds()}`;
	return formated;
};

export const convertFullDate = (date: string) => {
	const d = new Date(date);
	return `${convertDayMonth(date)}${d.getFullYear()}`;
};

export const convertDate = (date: string) => {
	const daysValue = convertDayMonth(date);
	const timeValue = convertTime(date);
	return `${daysValue}${timeValue}`;
};
