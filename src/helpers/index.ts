const getUserLocation = (handleSetLatlong: (latlong: string) => void) => {
  navigator.geolocation.getCurrentPosition(
    (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords
      if (latitude && longitude) {
        handleSetLatlong(
          `${latitude}, ${longitude}`
        )
      }
    }
  );
};

const celsiusToFarenheit = (celsius: number) => (9 / 5) * celsius + 32;

export { getUserLocation, celsiusToFarenheit };
