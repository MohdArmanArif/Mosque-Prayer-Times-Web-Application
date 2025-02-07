

export const fetchPrayerTimes = async () => {
    try {
      const today = new Date();
      const year = today.getFullYear();
    const month = today.getMonth()+1;
    const date = today.getDate();
    const full_date= year + "-" + month + "-" + date;
    console.log(full_date+"full_date");
    const API_URL= `https://mosque-prayer-times-web-application.onrender.com/prayerTimes/${full_date}`;
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(full_date);
      console.log(data.date);
      return data;
    } catch (error) {
      console.error('Error fetching prayer times:', error);
      return [];
    }
  };