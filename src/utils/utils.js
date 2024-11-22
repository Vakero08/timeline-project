export class Utils {
  static diffDays(startDate, endDate) {
    const diffTime = Math.abs(new Date(startDate) - new Date(endDate));
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }
  static fillDates(dates) {
    // Convert dates to ISO Format
    const isoDates = dates.map(day => day.toISOString().split("T")[0]);

    // Use Set to delete duplicates
    const uniqueIsoDates = [...new Set(isoDates)];

    // Convert to string to Dates
    const uniqueDates = uniqueIsoDates.map(date => new Date(date));

    // Order Dates
    const orderDates = uniqueDates.sort((a, b) => a - b);

    const filledDates = [];
    const startDate = orderDates[0];
    const endDate = orderDates[orderDates.length - 1];

    // Fill the missing dates
    let currentDate = new Date(startDate);
    while (currentDate <= endDate) {
      filledDates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return filledDates;
  }
}
