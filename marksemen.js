function startCountdown(duration, display) {
  let timer = duration, days, hours, minutes, seconds;
  setInterval(function () {
      days = parseInt(timer / (24 * 60 * 60), 10);
      hours = parseInt((timer % (24 * 60 * 60)) / 3600, 10);
      minutes = parseInt((timer % 3600) / 60, 10);
      seconds = parseInt(timer % 60, 10);

      days = days < 10 ? "0" + days : days;
      hours = hours < 10 ? "0" + hours : hours;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = days + ":" + hours + ":" + minutes + ":" + seconds;

      if (--timer < 0) {
          timer = 0;
          display.textContent = "Expired";
      }
  }, 1000);
}

function addRow() {
  const tableBody = document.getElementById('tableBody');
  const inputData = document.getElementById('inputData').value;

  if (inputData.trim() !== '') {
      const newRow = document.createElement('tr');
      const cellData = document.createElement('td');
      const cellTimer = document.createElement('td');

      cellData.textContent = inputData;
      cellTimer.textContent = "05:00:00:00";  // Initial placeholder of 5 days in format d:hh:mm:ss

      newRow.appendChild(cellData);
      newRow.appendChild(cellTimer);
      tableBody.appendChild(newRow);

      const duration = 5 * 24 * 60 * 60;  // 5 days in seconds
      startCountdown(duration, cellTimer);

      document.getElementById('inputData').value = '';  // Clear input field
  } else {
      alert('Please enter some data.');
  }
}