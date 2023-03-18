class Calendar {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  getFirstDay() {
    const date = new Date(this.year, this.month, 1);
    return date.getDay();
  }

  getDaysInMonth() {
    return new Date(this.year, this.month + 1, 0).getDate();
  }

  render() {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const firstDay = this.getFirstDay();
    const daysInMonth = this.getDaysInMonth();

    let calendar = '<table>';

    // render weekdays header
    calendar += '<tr>';
    for (let day of weekdays) {
      calendar += `<th>${day}</th>`;
    }
    calendar += '</tr>';

    // render days
    let day = 1;
    for (let i = 0; i < 6; i++) {
      calendar += '<tr>';
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          calendar += '<td></td>';
        } else if (day > daysInMonth) {
          break;
        } else {
          calendar += `<td>${day}</td>`;
          day++;
        }
      }
      calendar += '</tr>';
      if (day > daysInMonth) {
        break;
      }
    }

    calendar += '</table>';
    return calendar;
  }
}

export default Calendar;
