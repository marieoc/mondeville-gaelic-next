export const formatPhoneNumber = (value) => {
    const numericValue = value.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/(\d{2})(?=\d)/g, '$1 ');

    return formattedValue;
};