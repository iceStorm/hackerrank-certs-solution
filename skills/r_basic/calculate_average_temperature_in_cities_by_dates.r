calculate_average_temperature_in_cities_by_dates <- function(df_data) {
  # Convert 'datetime' to Date type
  df_data$Date <- as.Date(as.POSIXct(df_data$datetime, format = "%Y-%m-%d %H:%M:%S"))

  # Drop the original 'datetime' column
  df_data$datetime <- NULL

  # Get the order of the city columns from the input
  city_columns <- setdiff(names(df_data), "Date")

  # Sort the city columns in descending order
  city_columns <- sort(city_columns)

  # Aggregate data to calculate the mean temperature for each city and date
  df_avg <- aggregate(. ~ Date, data = df_data, FUN = mean, na.rm = TRUE)

  # Round the temperatures to two decimal places
  df_avg <- data.frame(lapply(df_avg, function(x) if(is.numeric(x)) round(x, 2) else x))
  
  # Reorder columns based on the sorted city order
  df_avg <- df_avg[c("Date", city_columns)]
  
  # Return result
  return(df_avg)
}
