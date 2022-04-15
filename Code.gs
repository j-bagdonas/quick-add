  var calendar = CalendarApp.getCalendarById('c_de815qvtv8g7reppjchk0cbki8@group.calendar.google.com')
  
  function doGet() {
      return HtmlService.createTemplateFromFile('Index').evaluate();
  }

  function include(filename) {
      return HtmlService.createHtmlOutputFromFile(filename)
          .getContent();
  }

  const addToCalendar = (values) => {
    calendar.createAllDayEvent((values[0] + " sell by"), new Date(values[2]), {description: "recieved on: " + values[1]})
  }
