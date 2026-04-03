import React, { useState, useEffect } from 'react';
import { Text, View } from "react-native";
import * as SunCalc from 'suncalc';

export default function Index() {
  const [lat, setLat] = useState(42.2851986);
  const [lon, setLon] = useState(-83.750665);

  const [date, setDate] = useState((new Date()));
  const [fixedDate, setFixedDate] = useState((new Date((new Date).getTime() + (5 * 3600000))));
  const [fixedDate2, setFixedDate2] = useState((new Date((new Date).getTime() + (10 * 3600000))));

  useEffect(() => {
    // 2. Start a timer that updates every second
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // 3. Clean up the timer on unmount
    return () => clearInterval(timer);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>{date.toLocaleString('en-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})}</Text>
      <Text>{date.toLocaleString('he-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})}</Text>
<Text>{"Today's Sunrise and Sunset:\n"}</Text>
      <Text>{SunCalc.getTimes(date,lat,lon).sunset.toLocaleString('he-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})}</Text>
      <Text>{SunCalc.getTimes(date,lat,lon).sunrise.toLocaleString('he-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})}</Text>
<Text>{"Sunrise and Sunset for 5 hours from now:\n"}</Text>

      <Text>{fixedDate.toLocaleString('he-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})}</Text>
      <Text>{SunCalc.getTimes(fixedDate,lat,lon).sunset.toLocaleString('he-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})}</Text>
      <Text>{SunCalc.getTimes(fixedDate,lat,lon).sunrise.toLocaleString('he-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})}</Text>
<Text>{"Sunrise and Sunset for 10 hours from now:\n"}</Text>
      <Text>{fixedDate2.toLocaleString('he-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})}</Text>
      <Text>{SunCalc.getTimes(fixedDate2,lat,lon).sunset.toLocaleString('he-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})}</Text>
      <Text>{SunCalc.getTimes(fixedDate2,lat,lon).sunrise.toLocaleString('he-u-ca-hebrew', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
})}</Text>



    </View>
  );
}
