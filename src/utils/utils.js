
const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-US', {
        style: 'currency',
        currency: "USD",
        minimumFractionDigits: 2,
    }).format(value);
};

export {
    formatCurrency
}