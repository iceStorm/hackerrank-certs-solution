# Complete the 'pivot_data_by_years_and_months' function below.
library(dplyr)
library(lubridate)
library(tidyr)

#' Pivot data frame by years and months based on orders from input 'csv' file
#' @param df_orders Data frame data from 'csv' file
#' @return Data frame with pivoted data


pivot_data_by_years_and_months <- function(df_orders) {
  # Convert date to Date type and extract year and month
  df_orders$date <- as.Date(df_orders$date)
  df_orders$Year <- year(df_orders$date)
  df_orders$Month <- format(df_orders$date, "%b")

  # Summarize revenue by year and month
  pivot_table <- df_orders %>%
    group_by(Year, Month) %>%
    summarise(Revenue = sum(revenue, na.rm = TRUE)) %>%
    ungroup() %>%
    spread(key = Month, value = Revenue)

  # Replace NA with 0
  pivot_table[is.na(pivot_table)] <- 0

  # Rearrange the columns based on the month order
  month_order <- c("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")
  existing_months <- intersect(month_order, names(pivot_table))
  pivot_table <- pivot_table[, c("Year", existing_months)]

  # Calculate mean for each month and add it to the table
  mean_row <- colMeans(pivot_table[,-1], na.rm = TRUE, dims = 1)
  mean_row <- round(mean_row)

  # Construct a list for the mean row to ensure the correct structure
  mean_list <- as.list(mean_row)
  names(mean_list) <- names(pivot_table)[-1]
  mean_list <- c(Year = "Mean", mean_list)

  # Add mean row to the pivot_table
  pivot_table <- rbind(pivot_table, mean_list)

  # Ensure that Year column can handle "Mean"
  pivot_table$Year <- as.character(pivot_table$Year)

  return(pivot_table)
}
# DO NOT CHANGE THIS CODE

# Open connection
fptr <- file(Sys.getenv("OUTPUT_PATH"))
open(fptr, open = "w")

# Read input 'csv' file
df_input <- read.csv("/dev/stdin", stringsAsFactors = FALSE)

# Process result data set
df_output <- pivot_data_by_years_and_months(df_input)

# Save results as 'csv' file 
write.csv(df_output, fptr, row.names = FALSE)

# Close connection
close(fptr)
