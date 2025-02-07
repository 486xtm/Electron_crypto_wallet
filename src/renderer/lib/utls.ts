export const formatBalance = (
	num: number,
	totalLength: number = 13,
	type = 'XMR',
) => {
	if (type != 'XMR') {
		return num.toFixed(2);
	}
	// Convert the number to a string
	let numStr = (num || 0).toString();
	// Split the number into integer and decimal parts
	let [integerPart, decimalPart] = numStr.split('.');

	// If there's no decimal part, set it to an empty string
	decimalPart = decimalPart ? decimalPart : '';

	// Calculate the current length of the formatted number
	let currentLength =
		integerPart.length + decimalPart.length + (decimalPart ? 1 : 0); // +1 for the decimal point

	// If the current length is less than totalLength, add trailing zeros
	while (currentLength < totalLength) {
		if (decimalPart.length < 6) {
			// Limit decimal places to 6
			decimalPart += '0'; // Append a trailing zero
		} else {
			break; // Stop if we reach the maximum decimal places
		}
		currentLength++;
	}

	// Reconstruct the number string
	const formattedNumber =
		integerPart + (decimalPart.length > 0 ? '.' + decimalPart : '');

	// Pad the integer part if needed (to ensure total length)
	const paddedNumber = formattedNumber.padStart(totalLength, ' '); // Pad with spaces if necessary
	return formattedNumber;
};
